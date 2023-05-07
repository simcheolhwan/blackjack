import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../actions/player"
import { UNIT } from "../rules/constants"
import { getResults } from "../rules/game"
import Player from "../components/Player"
import Wager from "../components/Wager"
import Hand from "./Hand"

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actions, dispatch),
  ({ player, dealer, turn }, { bet }, { index }) => {
    const isPlaying = Number.isInteger(turn)
    const { message } = isPlaying && getResults({ player, dealer }, index)
    const { bets } = player[index]
    const wager = {
      small: bets * UNIT > 9999,
      onClick: isPlaying ? undefined : () => bet(-bets),
    }

    return Object.assign(
      {
        bets: <Wager {...wager}>{bets * UNIT}</Wager>,
        style: { width: 100 / player.length + "%" },
        active: turn === index || player.length === 1, // 핸드가 하나면 언제나 활성상태
        small: player.length > 1,
      },
      isPlaying && {
        message,
        hand: <Hand index={index} />,
      }
    )
  }
)(Player)
