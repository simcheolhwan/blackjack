import { HISTORY } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case 'record':
      return [...state.slice(-1 * HISTORY), action.payload]

    case 'clear':
      return []

    default:
      return state
  }
}
