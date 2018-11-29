import getShuffledDeck from '../rules/getShuffledDeck'

export default (state = getShuffledDeck(), action) => {
  switch (action.type) {
    case 'reset':
      return getShuffledDeck()

    case 'draw':
      return state.slice(1)

    default:
      return state
  }
}
