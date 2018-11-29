import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from '../redux/gameActions'
import Check from '../rules/check'
import Button from './Button'

const Actions = ({ game, playerKey, stake, ...action }) => {
  const draw = () => action.draw(playerKey)
  const stay = () => action.setStatus(playerKey, 'stay')
  const surrender = () => action.setStatus(playerKey, 'surrender')
  const split = () => action.split()
  const double = () => {
    action.bet(playerKey, stake)
    draw()
    stay()
  }

  const bet = () => action.bet(playerKey, 5)
  const minus = () => action.bet(playerKey, -5)
  const startGame = () => action.startGame()
  const resetGame = () => action.resetGame()

  const { canDraw, canSurrender, canSplit } = action
  const actions = {
    idle: [
      { color: 'green', children: '+', onClick: bet },
      { color: 'brown', children: '-', onClick: minus },
      { color: 'navy', children: '→', onClick: startGame }
    ],
    playing: [
      { color: 'green', children: 'H', disabled: !canDraw, onClick: draw },
      { color: 'brown', children: 'S', disabled: !canDraw, onClick: stay },
      { color: 'navy', children: 'D', disabled: !canDraw, onClick: double },
      canSplit && { color: 'olive', children: 'SP', onClick: split },
      {
        color: 'teal',
        children: 'SU',
        disabled: !canSurrender,
        onClick: surrender
      }
    ].filter(Boolean),
    stop: [{ color: 'navy', children: '✔︎', onClick: resetGame }]
  }[game.status]

  return (
    <section>
      {actions.map((action, index) => (
        <Button {...action} key={index} />
      ))}
    </section>
  )
}

export default connect(
  ({ players, game }, { playerKey }) => {
    const player = players[playerKey]

    return {
      game,
      stake: player.stake,
      canDraw: Check.canPlayerDraw(player),
      canSplit: Check.canSplit(players),
      canSurrender:
        !players['replica'].hand.length && Check.canPlayerSurrender(player)
    }
  },
  dispatch => bindActionCreators(gameActions, dispatch)
)(Actions)
