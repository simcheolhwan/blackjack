import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { getCurrentPlayer } from '../rules/check'
import getResult from '../rules/getResult'
import Player from '../components/Player'
import Box from '../components/Box'
import Hand from './Hand'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ players, game }, { bet }, { playerKey }) => {
    const { stake } = players[playerKey]
    const isDealer = playerKey === 'dealer'
    const onBoxClick = () => !game.isPlaying && bet(playerKey, -1 * stake)
    return {
      result: getResult(players, playerKey),
      hand: <Hand playerKey={playerKey} />,
      bet: <Box onClick={onBoxClick}>{stake}</Box>,
      isDealer,
      small: !!players['replica'].hand.length,
      active:
        isDealer ||
        getCurrentPlayer(players) === playerKey ||
        !!players['replica'].status
    }
  }
)(Player)
