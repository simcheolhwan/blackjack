import getTotals from './getTotals'
import getResult from './getResult'

export default ({ player, dealer }) => {
  const compare = () => {
    const playerTotal = Math.max(...playerTotals)
    const dealerTotal = Math.max(...dealerTotals)
    return playerTotal > dealerTotal
      ? WIN
      : dealerTotal < playerTotal
      ? DRAW
      : LOSE
  }

  const WIN = 2
  const BLACKJACK = 1.5
  const DRAW = 1
  // const SURRENDER = 0.5
  const LOSE = 0

  const playerTotals = getTotals(player.hand)
  const playerResult = getResult(player.hand)
  const dealerTotals = getTotals(dealer.hand)
  const dealerResult = getResult(dealer.hand)
  const isDealerNotBlackjack =
    dealer.hand[0] !== 'A' ||
    (dealer.hand.length === 2 && dealerResult !== 'blackjack')

  const byPlayer = { blackjack: isDealerNotBlackjack && BLACKJACK, bust: LOSE }
  const byDealer = { blackjack: LOSE, bust: WIN }

  return Number.isFinite(byPlayer[playerResult])
    ? byPlayer[playerResult]
    : Number.isFinite(byDealer[dealerResult])
    ? byDealer[dealerResult]
    : dealer.state === 'stay'
    ? compare()
    : NaN
}
