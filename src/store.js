import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { saveState, loadState } from './localStorage'

const persistedState = loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, persistedState, enhancer)
store.subscribe(() => saveState(store.getState()))

export default store
