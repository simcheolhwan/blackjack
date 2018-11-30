import { combineReducers } from 'redux'

const isPlaying = (state = false, action) => {
  switch (action.type) {
    case 'start':
      return true

    case 'reset':
      return false

    default:
      return state
  }
}

export default combineReducers({ isPlaying })
