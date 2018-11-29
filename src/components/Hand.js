import React from 'react'
import Rules from '../utils/rules'
import style from './Hand.module.scss'
import Card from './Card'
import Actions from './Actions'

const Hand = ({ hand, draw, actions, isDealer, gameResult }) => (
  <div className={style.container}>
    <p style={{ order: isDealer && 2 }}>{Rules.getResult(hand)}</p>

    <section className={style.totals} style={{ order: isDealer && 1 }}>
      {Rules.getTotals(hand).join(', ')}
    </section>

    <ul className={style.deck}>
      {hand.map((card, index) => (
        <Card key={index}>{card}</Card>
      ))}

      {draw && (
        <Card back onClick={draw}>
          +
        </Card>
      )}
    </ul>

    <p>&times;{Number.isFinite(gameResult) && gameResult}</p>
    {actions && <Actions actions={actions} />}
  </div>
)

export default Hand
