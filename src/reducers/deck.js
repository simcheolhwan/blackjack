import shuffle from '../helpers/shuffle'
import { shuffleDeck } from '../rules/deck'
import { DECKS } from '../rules/constants'

export default (state = [], action) => {
  switch (action.type) {
    case 'shuffle':
      return shuffleDeck(DECKS, shuffle)

    case 'start':
      return state.slice(3)

    case 'draw':
    case 'double':
      return state.slice(1)

    default:
      return state
  }
}
