import { CAPITAL } from '../constants'

export default (state = 0, action) => {
  switch (action.type) {
    case 'lend':
      return state + CAPITAL

    case 'payback':
      return state - CAPITAL

    default:
      return state
  }
}
