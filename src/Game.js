import React from 'react'
import './Game.scss'
import Table from './containers/Table'
import Menu from './pages/Menu'

const Game = () => <Menu table={<Table />} />
export default Game
