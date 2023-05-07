import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import store from "./database/store"
import "./index.scss"
import Table from "./modules/Table"
import Menu from "./containers/Menu"
import * as serviceWorker from "./serviceWorker"

createRoot(document.getElementById("game")).render(
  <Provider store={store}>
    <Menu table={<Table />} />
  </Provider>
)

serviceWorker.register()
