import getTotals from './getTotals'
import getDefaultValue from './getDefaultValue'

export const getResult = (players, playerKey) => {
  const compare = () => {
    const playerTotal = Math.max(...getTotals(player.hand))
    const dealerTotal = Math.max(...getTotals(dealer.hand))
    return playerTotal > dealerTotal
      ? 'WIN'
      : dealerTotal > playerTotal
      ? 'LOSE'
      : 'DRAW'
  }

  const { dealer } = players
  const player = players[playerKey]

  const dealerIsNotBlackjack = {
    1: ![1, 10].includes(getDefaultValue(dealer.hand[0])),
    2: dealer.status !== 'blackjack'
  }[dealer.hand.length]

  const byPlayer = {
    blackjack: dealerIsNotBlackjack && 'BLACKJACK',
    bust: 'LOSE',
    surrender: 'SURRENDER'
  }

  const byDealer = {
    blackjack: player.status === 'blackjack' ? 'DRAW' : 'LOSE',
    bust: 'WIN'
  }

  return (
    byPlayer[player.status] ||
    byDealer[dealer.status] ||
    (dealer.status === 'stay' ? compare() : '')
  )
}

const prize = { BLACKJACK: 2.5, WIN: 2, DRAW: 1, SURRENDER: 0.5, LOSE: 0 }
export const getReturn = (players, playerKey) => {
  const result = getResult(players, playerKey)
  return players[playerKey].stake * (prize[result] || 0)
}

export const getTotalReturn = players => {
  const reducer = (coin, playerKey) => coin + getReturn(players, playerKey)
  return ['primary', 'replica'].reduce(reducer, 0)
}

export default getResult
