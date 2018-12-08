import React from 'react'
import { connect } from 'react-redux'
import { MIN, MAX, UNIT } from '../rules/constants'
import Table from '../components/Table'
import Page from '../pages/Page'
import Leave from '../pages/Leave'
import Hand from './Hand'
import Player from './Player'
import Actions from './Actions'
import Bank from './Bank'
import Controls from './Controls'

const pages = {
  enter: {
    title: 'Enter casino',
    content: 'Select money'
  },
  bet: {
    title: 'Bet',
    content: `Select chips\nMinimum ${MIN * UNIT}\nMaximum ${MAX * UNIT}`
  }
}

export default connect(({ player, bank, turn, history }) => {
  const canStart = bank + player[0].bets
  const bet = canStart ? <Page {...pages.bet} /> : <Leave />
  return Object.assign(
    { dealer: <Page {...pages.enter} />, actions: <Actions /> },
    (canStart || history.games.length) && {
      dealer: Number.isInteger(turn) ? <Hand /> : bet,
      player: player.map((p, i) => <Player {...p} index={i} key={i} />),
      bank: <Bank />,
      controls: <Controls />
    }
  )
})(Table)
