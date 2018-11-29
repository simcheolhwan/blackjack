import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from '../redux/gameActions'
import check from '../rules/check'
import getTotals from '../rules/getTotals'
import style from './Hand.module.scss'
import Box from './Box'
import Card from './Card'
import Result from './Result'
import Actions from './Actions'

const Hand = ({
  playerKey,
  hand,
  stake,
  totals,
  status,
  canDraw,
  draw,
  isDealer
}) => (
  <div className={style.container}>
    <p style={{ order: isDealer && 2 }}>{status}</p>

    <section className={style.totals} style={{ order: isDealer && 1 }}>
      {totals.filter(Boolean).join(', ')}
    </section>

    <ul className={style.deck}>
      {hand.map((card, index) => (
        <Card key={index}>{card}</Card>
      ))}

      {canDraw && (
        <Card back onClick={() => draw(playerKey)}>
          +
        </Card>
      )}
    </ul>

    {!isDealer && (
      <>
        <Box title="베팅">{stake}만원</Box>
        <Result playerKey={playerKey} />
        <Actions playerKey={playerKey} />
      </>
    )}
  </div>
)

export default connect(
  ({ players, game }, { playerKey }) => {
    const player = players[playerKey]
    const isDealer = playerKey === 'dealer'
    return {
      ...player,
      isDealer,
      totals: getTotals(player.hand),
      canDraw:
        isDealer &&
        !check.hasGameFinished(players) &&
        check.shouldDealerDraw(players)
    }
  },
  dispatch => bindActionCreators(gameActions, dispatch)
)(Hand)
