import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const InitialPlayer = { stake: 0, hand: [], status: '' }
const InitialPlayers = {
  dealer: { ...InitialPlayer, hand: [] },
  primary: { ...InitialPlayer, hand: [] }
}

export default createStore(
  reducer,
  { deck: undefined, players: InitialPlayers },
  composeEnhancers(applyMiddleware(thunk))
)
