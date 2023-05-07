import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../actions/game"
import g from "../rules/game"
import Control from "../components/Control"

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actions, dispatch),
  ({ player, dealer, turn }, { start, finish }) => {
    const isPlaying = Number.isInteger(turn)
    const { hasFinished } = g({ player, dealer, turn })
    const { bets } = player[0]
    return (
      (isPlaying
        ? hasFinished && { children: "✓", onClick: finish }
        : bets && { children: "→", onClick: start }) || {}
    )
  }
)(Control)
