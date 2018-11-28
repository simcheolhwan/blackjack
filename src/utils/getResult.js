import getTotals from './getTotals'

export const isBlackjack = hand =>
  hand.length === 2 && getTotals(hand).some(n => n === 21)

export default hand => {
  const totals = getTotals(hand)
  const isBust = totals.every(n => n > 21)
  return isBlackjack(hand) ? 'blackjack' : isBust ? 'bust' : ''
}
