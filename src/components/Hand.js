import React from 'react'
import Card from './Card'
import Actions from './Actions'
import Rules from '../utils/rules'

const Hand = ({ hand, draw, canDraw, actions, isDealer }) => (
  <div style={style.container}>
    <p>{Rules.getResult(hand)}</p>

    <section style={style.totals}>{Rules.getTotals(hand).join(', ')}</section>

    <ul style={{ display: 'flex', marginTop: 15, marginBottom: 15 }}>
      {hand.map((card, index) => (
        <Card key={index}>{card}</Card>
      ))}

      {canDraw && (
        <Card back onClick={draw}>
          +
        </Card>
      )}
    </ul>

    {actions && <Actions actions={actions} />}
  </div>
)

const style = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  totals: { color: 'silver' }
}

export default Hand
