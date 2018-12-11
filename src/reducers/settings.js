import { combineReducers } from 'redux'
import createReducer from '../helpers/createReducer'

const bool = (state = false, action) => {
  switch (action.type) {
    case 'toggle':
      return !state

    default:
      return state
  }
}

export const auto = combineReducers({
  action: createReducer(bool, 'action'),
  start: createReducer(bool, 'start'),
  finish: createReducer(bool, 'finish')
})

export default combineReducers({ auto })
