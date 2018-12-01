import { CAPITAL } from '../constants'

export default (state = CAPITAL, action) => {
  switch (action.type) {
    case 'bet':
      return state - action.stake

    case 'win':
      return state + action.amount

    default:
      return state
  }
}
