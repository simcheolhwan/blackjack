import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { getCurrentPlayer } from '../rules/check'
import getResult from '../rules/getResult'
import Player from '../components/Player'
import Wager from '../components/Wager'
import Hand from './Hand'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ players, game }, { bet }, { playerKey }) => {
    const { stake } = players[playerKey]
    const isDealer = playerKey === 'dealer'
    const onWagerClick =
      !!stake && !game.isPlaying ? () => bet(playerKey, -1 * stake) : undefined

    return {
      result: getResult(players, playerKey),
      hand: <Hand playerKey={playerKey} />,
      bet: (
        <Wager large={stake > 9999} onClick={onWagerClick}>
          {stake}
        </Wager>
      ),
      isDealer,
      small: !!players['replica'].hand.length,
      active:
        isDealer ||
        getCurrentPlayer(players) === playerKey ||
        !!players['replica'].status
    }
  }
)(Player)
