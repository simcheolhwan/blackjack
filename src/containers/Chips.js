import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { UNIT } from '../constants'
import Box from '../components/Box'
import Number from '../components/Number'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ chips, players, game }, { lend }) => {
    const canLend = !game.isPlaying && chips + players['primary'].stake < UNIT
    return {
      children: <Number>{chips}</Number>,
      onClick: canLend ? () => lend() : undefined
    }
  }
)(Box)
