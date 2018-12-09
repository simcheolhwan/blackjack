import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { saveState, loadState } from './localStorage'
import reducer from '../reducers'
import watch from './watch'

const persistedState = loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, persistedState, enhancer)
store.subscribe(() => watch(store, saveState))

export default store
