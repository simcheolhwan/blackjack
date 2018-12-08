import p from './rules/player'
import d from './rules/dealer'
import h from './rules/hand'
import g from './rules/game'

export default ({ dispatch, getState }, callback) => {
  const watchPlayer = () => {
    const { can, must } = p({ player, bank }, turn)
    const { bust } = h(player[turn].hand)
    return must.draw
      ? { type: 'draw', card: deck[0], turn }
      : !Object.values(can).some(Boolean) && {
          type: bust ? 'bust' : 'stay',
          turn
        }
  }

  const watchDealer = () => {
    const { hasFinished } = g({ player, dealer, turn })
    const { must } = d(dealer)
    return !hasFinished && must.draw && { type: 'draw', card: deck[0] }
  }

  const state = getState()
  callback(state)

  const { deck, player, dealer, bank, turn } = state
  const next =
    Number.isInteger(turn) && (player[turn] ? watchPlayer() : watchDealer())

  next && setTimeout(() => dispatch(next), 300)
}
