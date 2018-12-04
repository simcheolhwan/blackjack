import { combineReducers } from 'redux'
import createReducer from './createReducer'
import deck from './deck'
import players from './players'
import chips from './chips'
import debt from './debt'
import game from './game'
import history from './history'

export default combineReducers({
  deck,
  players,
  chips,
  debt,
  game,
  history: createReducer(history, 'history'),
  trips: createReducer(history, 'trips')
})
