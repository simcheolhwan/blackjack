import React from 'react'
import { connect } from 'react-redux'
import { getCurrentPlayer } from '../rules/check'
import getResult from '../rules/getResult'
import Player from '../components/Player'
import Hand from './Hand'

export default connect(({ players }, { playerKey }) => ({
  result: getResult(players, playerKey),
  hand: <Hand playerKey={playerKey} />,
  bet: players[playerKey].stake,
  isDealer: playerKey === 'dealer',
  active:
    playerKey === 'dealer' ||
    getCurrentPlayer(players) === playerKey ||
    !!players['replica'].status
}))(Player)
