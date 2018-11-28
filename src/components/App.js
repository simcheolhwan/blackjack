import React, { useState, useEffect } from 'react'
import getShuffledDeck from '../utils/getShuffledDeck'
import Deck from './Deck'
import Hand from './Hand'

const App = () => {
  const [deck, setDeck] = useState(getShuffledDeck)
  const [dealer, setDealer] = useState([])
  const [player, setPlayer] = useState([])

  const draw = (n, deck, hand, fn) => {
    const cards = deck.slice(0, n)
    const nextDeck = deck.slice(n)
    fn([...hand, ...cards])
    setDeck(nextDeck)
    return nextDeck
  }

  const init = () => {
    const nextDeck = draw(2, deck, player, setPlayer)
    draw(2, nextDeck, dealer, setDealer)
  }

  useEffect(() => {
    dealer.length < 2 && init()
  })

  return (
    <>
      <Deck deck={deck} />
      <Hand hand={dealer} isDealer />
      <Hand hand={player} />
    </>
  )
}

export default App
