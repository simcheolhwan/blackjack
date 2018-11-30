import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check from '../rules/check'
import Table from '../components/Table'
import Button from '../components/Button'
import Coins from './Coins'
import Player from './Player'

export default connect(
  ({ players, game }) => ({
    showReplica: !!players['replica'].hand.length,
    showFinishButton:
      game.status === 'playing' && check.hasGameFinished(players)
  }),
  dispatch => bindActionCreators(actions, dispatch),
  ({ showReplica, showFinishButton }, { win, resetGame }) => {
    const handleClick = () => {
      win()
      resetGame()
    }
    return {
      dealer: <Player playerKey="dealer" />,
      primary: <Player playerKey="primary" />,
      replica: showReplica && <Player playerKey="replica" />,
      controls: showFinishButton && <Button onClick={handleClick}>︎←</Button>,
      chips: <Coins />
    }
  }
)(Table)
