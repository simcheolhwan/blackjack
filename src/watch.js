import p from './rules/player'
import d from './rules/dealer'
import h from './rules/hand'

export default (store, callback) => {
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
    const { must } = d(dealer)
    return must.draw && { type: 'draw', card: deck[0] }
  }

  const state = store.getState()
  callback(state)

  const { deck, player, dealer, bank, turn } = state
  const next =
    Number.isInteger(turn) && (player[turn] ? watchPlayer() : watchDealer())
  next && store.dispatch(next)
}
