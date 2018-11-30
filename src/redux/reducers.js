import { combineReducers } from 'redux'
import deck from './deck'
import players from './players'
import chips from './chips'
import game from './game'

export default combineReducers({ deck, players, chips, game })
