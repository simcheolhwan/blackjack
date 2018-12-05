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

export const getResults = ({ player, dealer }, index) => {
  const { hand, state, bet } = player[index]
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
    ? [player.length > 1 ? 1 : 1.5, 0][determineDealerBlackjack()]
    : playerHand.bust
    ? -1
    : state === 'surrender'
    ? -0.5
    : dealerHand.blackjack
    ? [-1, 0][playerHand.blackjack]
    : dealerHand.bust
    ? 1
    : compare()

  return { result, prize: result && result * bet, message: __(result) }
}

export default args => ({
  prize: args.player.reduce((sum, p, i) => getResults(args, i).prize, 0),
  hasFinished: args.player.every((p, i) => getResults(args, i).message)
})
