import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from '../redux/gameActions'
import check from '../rules/check'
import Button from './Button'

const Actions = ({ players, game, playerKey, stake, ...action }) => {
  const bet = () => action.bet(playerKey, 5)
  const minus = () => action.bet(playerKey, -5)
  const startGame = () => action.startGame()

  const draw = () => action.draw(playerKey)
  const stay = () => action.set(playerKey, 'stay')
  const double = () => action.double(playerKey)
  const surrender = () => action.set(playerKey, 'surrender')
  const split = () => action.split()

  const { canBet, canMinus, canPlay } = action
  const { canDraw, canDouble, canSurrender, canSplit } = action
  const actions =
    {
      idle: [
        { color: 'green', children: '+', disabled: !canBet, onClick: bet },
        { color: 'brown', children: '-', disabled: !canMinus, onClick: minus },
        { color: 'navy', children: '→', disabled: !canPlay, onClick: startGame }
      ],
      playing: [
        { color: 'green', children: 'H', disabled: !canDraw, onClick: draw },
        { color: 'brown', children: 'S', disabled: !canDraw, onClick: stay },
        { color: 'navy', children: 'D', disabled: !canDouble, onClick: double },
        canSplit && { color: 'olive', children: 'SP', onClick: split },
        {
          color: 'teal',
          children: 'SU',
          disabled: !canSurrender,
          onClick: surrender
        }
      ].filter(Boolean)
    }[game.status] || []

  return (
    <section>
      {actions.map((action, index) => (
        <Button {...action} key={index} />
      ))}
    </section>
  )
}

export default connect(
  ({ players, game, coins }, { playerKey }) => {
    const player = players[playerKey]
    const canReplicaAction =
      playerKey !== 'replica' || !!players['primary'].status

    return {
      players,
      game,
      stake: player.stake,
      canBet: coins > 5,
      canMinus: player.stake > 5,
      canPlay: !!player.stake,
      canDraw: canReplicaAction && check.canPlayerDraw(player),
      canSplit: canReplicaAction && check.canSplit(players),
      canDouble: canReplicaAction && check.canPlayerDouble(player),
      canSurrender:
        canReplicaAction &&
        !players['replica'].hand.length &&
        check.canPlayerSurrender(player)
    }
  },
  dispatch => bindActionCreators(gameActions, dispatch)
)(Actions)
