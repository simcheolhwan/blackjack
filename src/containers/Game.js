import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { getCurrentPlayer } from '../rules/check'
import Table from '../components/Table'
import Help from './Help'
import Player from './Player'
import Actions from './Actions'
import Chips from './Chips'
import Bank from './Bank'
import Controls from './Controls'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ players, game }, { startGame, resetGame, win, draw }) => ({
    dealer: game.isPlaying ? <Player playerKey="dealer" /> : <Help />,
    primary: <Player playerKey="primary" />,
    replica: !!players['replica'].hand.length && <Player playerKey="replica" />,
    actions: <Actions playerKey={getCurrentPlayer(players)} />,
    chips: <Chips />,
    bank: <Bank />,
    controls: <Controls />
  })
)(Table)
