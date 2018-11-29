import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from '../redux/gameActions'
import Check from '../rules/check'
import Coins from './Coins'
import Hand from './Hand'

class Game extends Component {
  componentDidMount() {
    this.props.initGame()
  }

  componentDidUpdate() {
    this.props.status === 'playing' && this.watch()
  }

  watch = () => {
    const { isDealerTurn, draw, hasGameFinished, stopGame } = this.props
    isDealerTurn && setTimeout(() => draw('dealer'), 500)
    hasGameFinished && stopGame()
  }

  render() {
    const { playersKeys } = this.props
    return (
      <main style={style}>
        {playersKeys.map(key => (
          <Hand playerKey={key} key={key} />
        ))}
        <Coins />
      </main>
    )
  }
}

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 15
}

export default connect(
  ({ players, game }) => {
    const playersKeys = Object.keys(players).filter(
      key => key !== 'replica' || players[key].hand.length
    )

    return {
      ...game,
      playersKeys,
      isDealerTurn: Check.shouldDealerDraw(players),
      hasGameFinished: Check.hasGameFinished(players)
    }
  },
  dispatch => bindActionCreators(gameActions, dispatch)
)(Game)
