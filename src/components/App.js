import React from 'react'
import getShuffledDeck from '../utils/getShuffledDeck'
import getDefaultValue from '../utils/getDefaultValue'
import Card from './Card'

const App = () => (
  <ul style={{ display: 'flex', alignItems: 'flex-end' }}>
    {getShuffledDeck.map((card, index) => (
      <div style={{ margin: 1 }}>
        <div
          style={{
            height: getDefaultValue(card) * 5,
            backgroundColor: 'silver'
          }}
        />
        <Card key={index}>{card}</Card>
      </div>
    ))}
  </ul>
)

export default App
