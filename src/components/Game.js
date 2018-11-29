import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from '../redux/gameActions'
import check from '../rules/check'
import Coins from './Coins'
import Hand from './Hand'
import Button from './Button'

const Game = ({ playersKeys, showFinishButton, finishGame, resetGame }) => {
  const handleClick = () => {
    finishGame()
    resetGame()
  }

  return (
    <main style={style}>
      <Hand playerKey="dealer" />

      <div style={{ display: 'flex' }}>
        {playersKeys.map(key => (
          <Hand playerKey={key} key={key} />
        ))}
      </div>

      {showFinishButton && (
        <Button color="navy" onClick={handleClick}>
          ✔︎
        </Button>
      )}

      <Coins />
    </main>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  lineHeight: 1.6,
  padding: 15,
  textAlign: 'center'
}

export default connect(
  ({ players, game }) => ({
    showFinishButton: game.status !== 'idle' && check.hasGameFinished(players),
    playersKeys: [
      players['replica'].hand.length && 'replica',
      'primary'
    ].filter(Boolean)
  }),
  dispatch => bindActionCreators(gameActions, dispatch)
)(Game)
