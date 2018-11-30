import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check, { isInit } from '../rules/check'
import { BET } from '../constants'
import ButtonGroup from '../components/ButtonGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  (
    { players, coins, game },
    { bet, startGame, draw, set, double, split },
    { playerKey }
  ) => {
    const player = players[playerKey]
    const actions = game.isPlaying
      ? [
          {
            color: 'teal',
            children: 'SU',
            disabled: !(isInit(player) && !players['replica'].hand.length),
            onClick: () => set(playerKey, 'surrender')
          },
          {
            color: 'olive',
            children: 'SP',
            disabled: !check.canSplit({ players, coins }),
            onClick: () => split()
          },
          {
            color: 'navy',
            children: 'D',
            disabled: !(isInit(player) && coins >= player.stake),
            onClick: () => double(playerKey)
          },
          {
            color: 'brown',
            children: 'S',
            disabled: !!player.status,
            onClick: () => set(playerKey, 'stay')
          },
          {
            color: 'green',
            children: 'H',
            disabled: !!player.status,
            onClick: () => draw(playerKey)
          }
        ]
      : BET.map(n => ({
          color: 'green',
          children: String(n),
          disabled: coins < n,
          onClick: () => bet(playerKey, n)
        }))
    return { buttons: actions }
  }
)(ButtonGroup)
