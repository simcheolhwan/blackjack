import { combineReducers } from 'redux'
import deck from './deck'
import players from './players'
import coins from './coins'
import game from './game'

export default combineReducers({ deck, players, coins, game })
