import React, { useState, useEffect } from 'react'
import { set } from 'dot-prop-immutable'
import getShuffledDeck from '../utils/getShuffledDeck'
import Rules from '../utils/rules'
import Deck from './Deck'
import Hand from './Hand'

const App = () => {
  const [deck, setDeck] = useState(getShuffledDeck())
  const [dealer, setDealer] = useState({ hand: [], state: '' })
  const [players, setPlayers] = useState([{ hand: [], state: '' }])
  const gameState = { players, dealer }

  useEffect(() => {
    const isReady = players[0].hand.length === 2 && dealer.hand.length === 1
    !isReady && init()
  }, [])

  useEffect(
    () => {
      Rules.shouldDealerStay(gameState) && setDealerState('stay')
      players.forEach(
        (player, index) =>
          Rules.shouldPlayerStay(player) && setPlayerState(index)('stay')
      )
    },
    [players, dealer]
  )

  const init = () => {
    const nextDeck = draw(
      2 - players[0].hand.length,
      deck,
      players[0].hand,
      setPlayerHand(0)
    )
    draw(1 - dealer.hand.length, nextDeck, dealer.hand, setDealerHand)
  }

  const draw = (n, deck, hand, fn) => {
    const cards = deck.slice(0, n)
    const nextDeck = deck.slice(n)
    fn([...hand, ...cards])
    setDeck(nextDeck)
    return nextDeck
  }

  const drawDealer = () => draw(1, deck, dealer.hand, setDealerHand)
  const drawPlayer = index =>
    draw(1, deck, players[index].hand, setPlayerHand(index))

  const setDealerHand = hand => setDealer({ ...dealer, hand })
  const setDealerState = state => setDealer({ ...dealer, state })
  const setPlayerHand = index => hand =>
    setPlayers(set(players, `${index}.hand`, hand))
  const setPlayerState = index => state =>
    setPlayers(set(players, `${index}.state`, state))

  const split = () => {
    const card = players[0].hand[0]
    const player = { hand: [card], state: '' }
    setPlayers([player, player])
  }

  return (
    <main style={style}>
      <Deck deck={deck} hidden />

      <Hand
        isDealer
        {...dealer}
        draw={drawDealer}
        canDraw={Rules.shouldDealerDraw(gameState)}
      />

      <div style={style.players}>
        {players.map((player, index) => {
          const canDraw = Rules.canPlayerDraw(player)

          const props = {
            ...player,
            canDraw,
            gameResult: Rules.getGameResult({ player, dealer }),
            actions: [
              {
                color: 'brown',
                children: 'Stay',
                disabled: !canDraw,
                onClick: () => setPlayerState(index)('stay')
              },
              Rules.canSplit(gameState) && {
                color: 'chocolate',
                children: 'Split',
                onClick: split
              }
            ],
            draw: () => drawPlayer(index)
          }

          return <Hand {...props} key={index} />
        })}
      </div>
    </main>
  )
}

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 30,

  players: { display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }
}

export default App
