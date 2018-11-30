import React from 'react'
import { connect } from 'react-redux'
import getResult from '../rules/getResult'
import Player from '../components/Player'
import Hand from './Hand'
import Actions from './Actions'

export default connect(({ players }, { playerKey }) => ({
  result: getResult(players, playerKey),
  hand: <Hand playerKey={playerKey} />,
  bet: players[playerKey].stake,
  actions: <Actions playerKey={playerKey} />,
  isDealer: playerKey === 'dealer'
}))(Player)
