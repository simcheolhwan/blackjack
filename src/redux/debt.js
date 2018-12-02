import { SEED } from '../constants'

export default (state = 0, action) => {
  switch (action.type) {
    case 'lend':
      return state + SEED

    case 'payback':
      return state - SEED

    default:
      return state
  }
}
