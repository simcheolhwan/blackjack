import h from './hand'
import { getCardValue } from './deck'

const __ = result =>
  ({
    '1.5': 'Blackjack',
    '1': 'Win',
    '0': 'Draw',
    '-0.5': 'Surrender',
    '-1': 'Lose'
  }[String(result)])

export const getResults = ({ state, stake, hand }, dealer) => {
  const determineDealerBlackjack = () =>
    ({
      1: [1, 10].includes(getCardValue(dealer[0])) ? -1 : 0,
      2: Number(dealerHand.blackjack)
    }[dealer.length] || 0)

  const compare = () =>
    Math.sign(Math.max(...playerHand.totals) - Math.max(...dealerHand.totals))

  const playerHand = h(hand)
  const dealerHand = h(dealer)

  const result = playerHand.blackjack
    ? [1.5, 0][determineDealerBlackjack()]
    : playerHand.bust
    ? -1
    : state === 'surrender'
    ? -0.5
    : dealerHand.blackjack
    ? [-1, 0][playerHand.blackjack]
    : dealerHand.bust
    ? 1
    : compare()

  return { result, prize: result && result * stake, message: __(result) }
}

export default ({ player, dealer }) => ({
  prize: player.reduce((sum, p) => getResults(p, dealer).prize, 0),
  hasFinished: player.every(p => getResults(p, dealer).message)
})
