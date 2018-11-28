import React from 'react'
import Card from './Card'

const Hand = ({ hand, totals, status }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <ul style={{ display: 'flex' }}>
      {hand.map((card, index) => (
        <Card style={{ margin: 1 }} size={1.25} key={index}>
          {card}
        </Card>
      ))}
    </ul>

    <section style={{ marginLeft: 5 }}>
      {totals.map((n, index) => (
        <p key={index}>{n}</p>
      ))}
    </section>

    {status && <section style={{ marginLeft: 5 }}>({status})</section>}
  </div>
)

export default Hand
