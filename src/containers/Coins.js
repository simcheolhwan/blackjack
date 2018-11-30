import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { MIN } from '../constants'
import Box from '../components/Box'

const Coins = ({ coins, withdraw }) => (
  <Box onClick={withdraw}>{String(coins)}</Box>
)

export default connect(
  ({ coins, players, game }) => ({
    coins,
    canWithdraw:
      game.status === 'idle' && coins + players['primary'].stake < MIN
  }),
  dispatch => bindActionCreators(actions, dispatch),
  ({ coins, canWithdraw }, { win }) => ({
    coins,
    withdraw: canWithdraw ? () => win(100) : undefined
  })
)(Coins)
