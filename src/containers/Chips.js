import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { MIN } from '../constants'
import Box from '../components/Box'

const Chips = ({ chips, withdraw }) => (
  <Box onClick={withdraw}>{String(chips)}</Box>
)

export default connect(
  ({ chips, players, game }) => ({
    chips,
    canWithdraw: !game.isPlaying && chips + players['primary'].stake < MIN
  }),
  dispatch => bindActionCreators(actions, dispatch),
  ({ chips, canWithdraw }, { win }) => ({
    chips,
    withdraw: canWithdraw ? () => win(100) : undefined
  })
)(Chips)
