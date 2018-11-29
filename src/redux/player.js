import { combineReducers } from 'redux'

const hand = (state = [], action) => {
  switch (action.type) {
    case 'draw':
    case 'hand':
      return action.hand

    case 'reset':
      return []

    default:
      return state
  }
}

const status = (state = '', action) => {
  switch (action.type) {
    case 'stay':
    case 'bust':
    case 'blackjack':
    case 'surrender':
      return action.type

    case 'reset':
      return ''

    default:
      return state
  }
}

const stake = (state = 0, action) => {
  switch (action.type) {
    case 'bet':
      return state + action.stake

    case 'reset':
      return 0

    default:
      return state
  }
}

export default combineReducers({ hand, status, stake })
