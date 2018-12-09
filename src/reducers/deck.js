import testDeck from '../database/testDeck'
import { shuffleDeck } from '../rules/deck'

export default (state = [], action) => {
  switch (action.type) {
    case 'shuffle':
      return [...testDeck(), ...shuffleDeck()]

    case 'start':
      return state.slice(3)

    case 'draw':
    case 'hit':
    case 'double':
      return state.slice(1)

    default:
      return state
  }
}
