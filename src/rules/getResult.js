import getTotals from './getTotals'

export const checkBlackjack = hand =>
  hand.length === 2 && getTotals(hand).some(n => n === 21)

export default hand => {
  const totals = getTotals(hand)
  const isBust = totals.every(n => n > 21)
  return checkBlackjack(hand) ? 'blackjack' : isBust ? 'bust' : ''
}
