import React, { useState, useEffect } from 'react'
import getShuffledDeck from '../utils/getShuffledDeck'
import getTotals from '../utils/getTotals'
import Deck from './Deck'
import Hand from './Hand'
import Button from './Button'

const App = () => {
  const [deck, setDeck] = useState(getShuffledDeck)
  const [player, setPlayer] = useState([])
  const [dealer, setDealer] = useState([])
  const [playerStatus, setPlayerStatus] = useState()
  const [dealerStatus, setDealerStatus] = useState()

  useEffect(() => {
    dealer.length < 1 && init()
  }, [])

  useEffect(
    () => {
      const playerStatus = getStatus(playerTotals)
      setPlayerStatus(playerStatus)
    },
    [player]
  )

  useEffect(
    () => {
      const dealerStatus = getStatus(dealerTotals)
      setDealerStatus(
        dealerStatus || (dealerTotals.some(n => n >= 17) ? 'stay' : '')
      )
    },
    [dealer]
  )

  const init = () => {
    const nextDeck = draw(2, deck, player, setPlayer)
    draw(1, nextDeck, dealer, setDealer)
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
  const stay = () => setPlayerStatus('stay')
  const getStatus = totals =>
    totals.some(n => n === 21)
      ? 'blackjack'
      : totals.every(n => n > 21)
      ? 'bust'
      : ''

  const getWinner = () =>
    ({ blackjack: dealer[0] !== 'A' && 'player', bust: 'dealer' }[
      playerStatus
    ] ||
    {
      blackjack: 'dealer',
      bust: 'player',
      stay: playerTotals.some(p => dealerTotals.every(n => p > n))
        ? 'player'
        : Math.max(...playerTotals) === Math.max(...dealerTotals)
        ? 'draw'
        : 'dealer'
    }[dealerStatus])

  const dealerTotals = getTotals(dealer)
  const playerTotals = getTotals(player)
  const winner = getWinner()
  const playerActions = (
    <section>
      <Button color="green" onClick={drawPlayer} disabled={!!playerStatus}>
        Hit
      </Button>
      <Button color="brown" onClick={stay} disabled={playerStatus}>
        Stay
      </Button>
    </section>
  )

  const isDealerTurn = playerStatus && !dealerStatus && !winner
  const dealerActions = (
    <section>
      <Button onClick={drawDealer} disabled={!isDealerTurn}>
        Next
      </Button>
      <Button onClick={() => window.location.reload()}>New Game</Button>
    </section>
  )

  return (
    <main style={{ padding: 30 }}>
      <Deck deck={deck} />
      <Hand hand={dealer} totals={dealerTotals} status={dealerStatus} />
      <Hand hand={player} totals={playerTotals} status={playerStatus} />
      {playerActions}
      {dealerActions}
      {winner && (
        <p style={{ color: { player: 'green', dealer: 'red' }[winner] }}>
          Winner: {winner}
        </p>
      )}
    </main>
  )
}

export default App
