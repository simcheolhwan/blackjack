import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './routes/Menu'
import Simulator from './routes/Simulator'

export default (
  <>
    <Route path="/" exact component={Menu} />
    <Route path="/simulator" exact component={Simulator} />
  </>
)
