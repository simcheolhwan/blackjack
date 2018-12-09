import d from './dealer'
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
  const { hand, bets, surrender } = player[index]
  const determineDealerBlackjack = () =>
    ({
      1: [1, 10].includes(getCardValue(dealer[0])) ? -1 : 0,
      2: Number(dealerHand.blackjack)
    }[dealer.length] || 0) // -1: 아직 알 수 없음

  const compare = () =>
    Math.sign(Math.max(...playerHand.totals) - Math.max(...dealerHand.totals))

  const playerHand = h(hand)
  const dealerHand = h(dealer)

  const result = playerHand.blackjack
    ? [player.length > 1 ? 1 : 1.5, 0][determineDealerBlackjack()]
    : playerHand.bust
    ? -1
    : surrender
    ? -0.5
    : dealerHand.blackjack
    ? [-1, 0][Number(playerHand.blackjack)]
    : dealerHand.bust
    ? 1
    : d(dealer).must.draw
    ? undefined
    : compare()

  return { result, prize: result && result * bets, message: __(result) }
}

export default ({ player, dealer, turn }) => ({
  prize: player.reduce(
    (sum, p, i) => sum + getResults({ player, dealer }, i).prize,
    0
  ),
  hasFinished:
    turn === player.length &&
    player.every((p, i) => getResults({ player, dealer }, i).message)
})
