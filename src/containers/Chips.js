import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { UNIT } from '../constants'
import Wager from '../components/Wager'
import Finite from '../components/Finite'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ chips, players, game }, { lend }) => {
    const canLend = !game.isPlaying && chips + players['primary'].stake < UNIT
    return {
      children: <Finite>{chips}</Finite>,
      onClick: canLend ? () => lend() : undefined
    }
  }
)(Wager)
