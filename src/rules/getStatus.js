import check from '../rules/check'
import getTotals from './getTotals'

export default (players, playerKey) => {
  const { hand } = players[playerKey]
  const totals = getTotals(hand)
  const is21 = totals.some(n => n === 21)
  const isBust = totals.every(n => n > 21)
  const isBlackjack = is21 && hand.length === 2
  const isStay = playerKey === 'dealer' && check.shouldDealerStay(players)
  return is21
    ? isBlackjack
      ? 'blackjack'
      : 'stay'
    : isBust
    ? 'bust'
    : isStay
    ? 'stay'
    : ''
}
