import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const InitialState = {
  players: {
    dealer: { hand: [] },
    primary: { hand: [] }
  }
}

export default createStore(
  reducer,
  InitialState,
  composeEnhancers(applyMiddleware(thunk))
)
