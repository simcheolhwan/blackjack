import React from 'react'
import getDefaultValue from '../rules/getDefaultValue'
import Card from './Card'

const Deck = ({ deck, hidden }) =>
  hidden ? null : (
    <ul style={{ display: 'flex', alignItems: 'flex-end' }}>
      {deck.map((card, index) => (
        <div style={{ padding: 1 }} key={index}>
          <div
            style={{
              height: getDefaultValue(card) * 5,
              backgroundColor: 'silver'
            }}
          />
          <Card>{card}</Card>
        </div>
      ))}
    </ul>
  )

export default Deck
