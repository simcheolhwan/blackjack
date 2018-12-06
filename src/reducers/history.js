import { combineReducers } from 'redux'

export const games = (state = [], action) => {
  switch (action.type) {
    case 'finish':
      return [...state, action.payload]

    case 'enter':
      return []

    default:
      return state
  }
}

export const trips = (state = [], action) => {
  switch (action.type) {
    case 'leave':
      return [...state, action.payload]

    default:
      return state
  }
}

export default combineReducers({ games, trips })
