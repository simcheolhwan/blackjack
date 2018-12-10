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
  action: createReducer(bool, 'action')
})

export default combineReducers({ auto })
