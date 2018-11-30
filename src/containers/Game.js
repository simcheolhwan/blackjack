import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check from '../rules/check'
import Button from '../components/Button'
import Coins from './Coins'
import Player from './Player'

const Game = ({ playersKeys, showFinishButton, win, resetGame }) => {
  const handleClick = () => {
    win()
    resetGame()
  }

  return (
    <main>
      <Player playerKey="dealer" />

      <div>
        {playersKeys.map(key => (
          <Player playerKey={key} key={key} />
        ))}
      </div>

      {showFinishButton && <Button onClick={handleClick}>✔︎</Button>}

      <Coins />
    </main>
  )
}

export default connect(
  ({ players, game }) => ({
    showFinishButton:
      game.status === 'playing' && check.hasGameFinished(players),
    playersKeys: [
      players['replica'].hand.length && 'replica',
      'primary'
    ].filter(Boolean)
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Game)
