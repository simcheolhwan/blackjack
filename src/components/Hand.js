import React from 'react'
import { connect } from 'react-redux'
import getTotals from '../rules/getTotals'
import getResult from '../rules/getResult'
import style from './Hand.module.scss'
import Card from './Card'
import Actions from './Actions'
import getGameResult from '../rules/getGameResult'

const Hand = ({
  playerKey,
  hand,
  stake,
  totals,
  result,
  isDealer,
  gameResult
}) => (
  <div className={style.container}>
    <p style={{ order: isDealer && 2 }}>{result}</p>

    <section className={style.totals} style={{ order: isDealer && 1 }}>
      {totals.filter(Boolean).join(', ')}
    </section>

    <ul className={style.deck}>
      {hand.map((card, index) => (
        <Card key={index}>{card}</Card>
      ))}
    </ul>

    {!isDealer && (
      <>
        <p>{stake}만원</p>
        {Number.isFinite(gameResult) && <p>{String(gameResult)}</p>}
        <Actions playerKey={playerKey} />
      </>
    )}
  </div>
)

export default connect(({ players }, { playerKey }) => {
  const player = players[playerKey]
  const { dealer } = players
  const { hand, stake } = player
  return {
    hand,
    stake,
    totals: getTotals(hand),
    result: getResult(hand),
    gameResult: getGameResult({ player, dealer }),
    isDealer: playerKey === 'dealer'
  }
})(Hand)
