import { SEED } from '../constants'

export default (state = SEED, action) => {
  switch (action.type) {
    case 'bet':
      return state - action.stake

    case 'win':
      return state + action.amount

    case 'lend':
      return state + SEED

    case 'payback':
      return state - SEED

    case 'chips/reset':
      return SEED

    default:
      return state
  }
}
