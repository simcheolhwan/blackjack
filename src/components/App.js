import React, { useState, useEffect } from 'react'
import getShuffledDeck from '../utils/getShuffledDeck'
import Rules from '../utils/rules'
import Deck from './Deck'
import Hand from './Hand'

const App = () => {
  const [deck, setDeck] = useState(getShuffledDeck())
  const [player, setPlayer] = useState([])
  const [dealer, setDealer] = useState([])
  const [playerStatus, setPlayerStatus] = useState()
  const [dealerStatus, setDealerStatus] = useState()
  const state = { player, playerStatus, dealer, dealerStatus }

  useEffect(() => {
    const isReady = player.length === 2 && dealer.length === 1
    !isReady && init()
  }, [])

  useEffect(
    () => {
      Rules.isBlackjack(player) && dealer[0] === 'A' && setPlayerStatus('stay')
    },
    [player]
  )

  useEffect(
    () => {
      Rules.shouldDealerStay(state) && setDealerStatus('stay')
    },
    [dealer]
  )

  const init = () => {
    const nextDeck = draw(2 - player.length, deck, player, setPlayer)
    draw(1 - dealer.length, nextDeck, dealer, setDealer)
  }

  const draw = (n, deck, hand, fn) => {
    const cards = deck.slice(0, n)
    const nextDeck = deck.slice(n)
    fn([...hand, ...cards])
    setDeck(nextDeck)
    return nextDeck
  }

  const drawPlayer = () => draw(1, deck, player, setPlayer)
  const drawDealer = () => draw(1, deck, dealer, setDealer)

  const playerActions = [
    {
      color: 'brown',
      children: 'Stay',
      disabled: !Rules.canDraw(state),
      onClick: () => setPlayerStatus('stay')
    }
  ]

  return (
    <main style={style}>
      <Deck deck={deck} hidden />
      <Hand
        isDealer
        hand={dealer}
        draw={drawDealer}
        canDraw={Rules.shouldDealerDraw(state)}
      />
      <Hand
        hand={player}
        draw={drawPlayer}
        canDraw={Rules.canDraw(state)}
        actions={playerActions}
      />
      <footer>
        {Number.isFinite(Rules.finish(state)) && Rules.finish(state)}
      </footer>
    </main>
  )
}

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 30
}

export default App
