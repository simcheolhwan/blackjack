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

  const checkIsNotBlackjack = ({ hand }) => {
    const isNotBlackjack = {
      1: ![1, 10].includes(getDefaultValue(dealer.hand[0])),
      2: dealer.status !== 'blackjack'
    }[hand.length]
    return typeof isNotBlackjack === 'boolean' ? isNotBlackjack : true
  }

  const { dealer } = players
  const player = players[playerKey]

  const byPlayer = {
    blackjack: checkIsNotBlackjack(dealer) && 'BLACKJACK',
    bust: 'LOSE',
    surrender: 'SURRENDER'
  }

  const byDealer = {
    blackjack: player.status === 'blackjack' ? 'DRAW' : 'LOSE',
    bust: 'WIN'
  }

  const result =
    byPlayer[player.status] ||
    byDealer[dealer.status] ||
    (dealer.status === 'stay' && compare())

  return !!player.hand.length ? result : ''
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

export const getTotalResult = players => {
  const reducer = (result, playerKey) => {
    console.log(playerKey, getResult(players, playerKey))
    return result + prize[getResult(players, playerKey)] || 0
  }
  return ['primary', 'replica'].reduce(reducer, 0)
}

export default getResult
