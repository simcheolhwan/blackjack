import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { MIN } from '../constants'
import Box from '../components/Box'
import Number from '../components/Number'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ chips, players, game }, { win }) => {
    const canWithdraw =
      !game.isPlaying && chips + players['primary'].stake < MIN
    return {
      children: <Number>{chips}</Number>,
      onClick: canWithdraw ? () => win(100) : undefined
    }
  }
)(Box)
