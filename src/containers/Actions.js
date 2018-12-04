import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check, { isInit } from '../rules/check'
import { getBets } from '../constants'
import ButtonGroup from '../components/ButtonGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  (
    { players, chips, game },
    { bet, startGame, draw, set, double, split },
    { playerKey }
  ) => {
    const player = players[playerKey]
    const actions = game.isPlaying
      ? [
          {
            children: 'SU',
            disabled: !(isInit(player) && !players['replica'].hand.length),
            onClick: () => set(playerKey, 'surrender')
          },
          {
            children: 'SP',
            disabled: !check.canSplit({ players, chips }),
            onClick: () => split()
          },
          {
            children: 'D',
            disabled: !(isInit(player) && chips >= player.stake),
            onClick: () => double(playerKey)
          },
          {
            children: 'S',
            disabled: !!player.status,
            onClick: () => set(playerKey, 'stay')
          },
          {
            children: 'H',
            disabled: !!player.status,
            onClick: () => draw(playerKey)
          }
        ]
      : getBets(chips).map(n => ({
          children: String(n),
          disabled: chips < n,
          onClick: () => bet(playerKey, n)
        }))
    return { buttons: actions }
  }
)(ButtonGroup)
