import p from "../rules/player"
import d from "../rules/dealer"
import h from "../rules/hand"
import g from "../rules/game"
import selectStrategy from "../selectors/strategy"
import { start, finish } from "../actions/game"

const actions = {
  H: "hit",
  S: "stay",
  D: "double",
  SP: "split",
  SU: "surrender",
}

export default ({ dispatch, getState }, callback) => {
  const nextPlayer = () => {
    const { can, must } = p({ player, bank, turn })
    const strategy = selectStrategy({ player, dealer, bank, turn })
    const { hand, bets } = player[turn]
    const { bust } = h(hand)
    const card = deck[0]

    return must.draw
      ? { type: "draw", turn, card }
      : Object.values(can).some(Boolean)
      ? settings.auto.action && { type: actions[strategy], turn, bets, card }
      : { type: bust ? "bust" : "stay", turn }
  }

  const nextDealer = () => {
    const { must } = d(dealer)
    return hasFinished
      ? settings.auto.finish && finish()(dispatch, getState)
      : must.draw && { type: "draw", card: deck[0] }
  }

  const state = getState()
  const { deck, player, dealer, bank, turn, settings } = state
  callback(state)

  const isPlaying = Number.isInteger(turn)
  const { hasFinished } = g({ player, dealer, turn })
  const next = isPlaying && (player[turn] ? nextPlayer() : nextDealer())
  next && setTimeout(() => dispatch(next), settings.auto.action ? 100 : 300)

  const { bets } = player[0]
  settings.auto.start && !isPlaying && bets && start()(dispatch, getState)
}
