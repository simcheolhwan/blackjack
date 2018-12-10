import { getCardValue } from './deck'

export default (hand = []) => {
  const hard = hand.reduce((sum, card) => sum + getCardValue(card), 0)
  const soft = hand.includes('A') && hard + 10 <= 21 ? hard + 10 : false
  const blackjack = hand.length === 2 && soft === 21
  const totals = soft ? (soft === 21 ? [soft] : [hard, soft]) : [hard]
  return hand.length
    ? { totals, blackjack, bust: totals.every(n => n > 21) }
    : { totals: [] }
}
