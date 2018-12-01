import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'
import { saveState, loadState } from './localStorage'
import testState from './testStore'

const persistedState = testState() || loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, persistedState, enhancer)
store.subscribe(() => saveState(store.getState()))

export default store
