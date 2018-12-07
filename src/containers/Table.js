import React from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'
import Page from '../pages/Page'
import Hand from './Hand'
import Player from './Player'
import Actions from './Actions'
import Bank from './Bank'
import Controls from './Controls'

const pages = {
  enter: { title: 'Enter casino', content: 'Select money' },
  bet: { title: 'Bet', content: 'Select chips' }
}

export default connect(({ player, bank, turn }) =>
  Object.assign(
    { dealer: <Page {...pages.enter} />, actions: <Actions /> },
    bank + player[0].bets && {
      dealer: Number.isInteger(turn) ? <Hand /> : <Page {...pages.bet} />,
      player: player.map((p, i) => <Player {...p} index={i} key={i} />),
      bank: <Bank />,
      controls: <Controls />
    }
  )
)(Table)
