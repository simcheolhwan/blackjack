import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/player'
import { UNIT } from '../rules/constants'
import g, { getResults } from '../rules/game'
import Player from '../components/Player'
import Wager from '../components/Wager'
import Hand from './Hand'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ player, dealer, turn }, { bet }, { index }) => {
    const { bets } = player[index]
    const { message } = getResults({ player, dealer }, index)
    const wager = {
      small: bets * UNIT > 9999,
      onClick: Number.isInteger(turn) ? undefined : () => bet(-bets)
    }

    return {
      hand: <Hand index={index} />,
      bets: <Wager {...wager}>{bets * UNIT}</Wager>,
      message: g({ player, dealer, turn }).hasFinished && message,
      style: { width: 100 / player.length + '%' },
      active: player.length === 1 || turn === index,
      small: player.length > 1
    }
  }
)(Player)
