import { combineReducers } from 'redux'
import createReducer from './createReducer'
import player from './player'

export default combineReducers({
  dealer: createReducer(player, 'dealer'),
  primary: createReducer(player, 'primary'),
  replica: createReducer(player, 'replica')
})
