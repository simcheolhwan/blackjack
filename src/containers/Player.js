import React from 'react'
import { connect } from 'react-redux'
import getTotals from '../rules/getTotals'
import Box from '../components/Box'
import Hand from './Hand'
import Result from './Result'
import Actions from './Actions'

const Player = ({ playerKey, stake, totals, status, isDealer }) => (
  <div>
    <p>{status}</p>

    <section>{totals.filter(Boolean).join(', ')}</section>
    <Hand playerKey={playerKey} />

    {!isDealer && (
      <>
        <Box>{stake}</Box>
        <Result playerKey={playerKey} />
        <Actions playerKey={playerKey} />
      </>
    )}
  </div>
)

export default connect(({ players }, { playerKey }) => {
  const player = players[playerKey]
  const isDealer = playerKey === 'dealer'
  return { ...player, totals: getTotals(player.hand), isDealer }
})(Player)
