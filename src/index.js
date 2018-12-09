import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './database/store'
import './index.scss'
import Table from './containers/Table'
import Menu from './pages/Menu'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Menu table={<Table />} />
  </Provider>,
  document.getElementById('game')
)
serviceWorker.register()
