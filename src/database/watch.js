import p from '../rules/player'
import d from '../rules/dealer'
import h from '../rules/hand'
import g from '../rules/game'

export default ({ dispatch, getState }, callback) => {
  const nextPlayer = () => {
    const { can, must } = p({ player, bank, turn })
    const { hand } = player[turn]
    const { bust } = h(hand)

    return must.draw
      ? {
          type: 'draw',
          turn,
          card: deck[0]
        }
      : !Object.values(can).some(Boolean) && {
          type: bust ? 'bust' : 'stay',
          turn
        }
  }

  const nextDealer = () => {
    const { hasFinished } = g({ player, dealer, turn })
    const { must } = d(dealer)
    return !hasFinished && must.draw && { type: 'draw', card: deck[0] }
  }

  const state = getState()
  const { deck, player, dealer, bank, turn } = state
  callback(state)

  const isPlaying = Number.isInteger(turn)
  const next = isPlaying && (player[turn] ? nextPlayer() : nextDealer())
  next && setTimeout(() => dispatch(next), 300)
}
