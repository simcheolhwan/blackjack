import { combineReducers } from 'redux'

const status = (state = 'idle', action) => {
  switch (action.type) {
    case 'start':
      return 'playing'

    case 'stop':
      return 'stop'

    case 'reset':
      return 'idle'

    default:
      return state
  }
}

export default combineReducers({ status })
