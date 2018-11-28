import React from 'react'
import Card from './Card'

const Hand = ({ hand, isDealer }) => (
  <ul style={{ display: 'flex' }}>
    {hand.map((card, index) => (
      <Card
        style={Object.assign(
          { margin: 1 },
          isDealer && index && { backgroundColor: 'gray', color: 'silver' }
        )}
        size={1.25}
        key={index}
      >
        {card}
      </Card>
    ))}
  </ul>
)

export default Hand
