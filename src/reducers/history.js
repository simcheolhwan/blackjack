import { combineReducers } from 'redux'

export const games = (state = [], action) => {
  switch (action.type) {
    case 'leave':
      return []

    case 'finish':
      return [...state, action.bank]

    default:
      return state
  }
}

export const trips = (state = [], action) => {
  switch (action.type) {
    case 'leave':
      return action.games.length ? [...state, action.games] : state

    default:
      return state
  }
}

export default combineReducers({ games, trips })
