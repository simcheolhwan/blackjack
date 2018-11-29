import getTotals from './getTotals'
import getResult from './getResult'
import getDefaultValue from './getDefaultValue'

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

  const BLACKJACK = 2.5
  const WIN = 2
  const DRAW = 1
  const SURRENDER = 0.5
  const LOSE = 0

  const playerTotals = getTotals(player.hand)
  const playerResult = getResult(player.hand)
  const dealerTotals = getTotals(dealer.hand)
  const dealerResult = getResult(dealer.hand)
  const dealerWillNeverBlackjack = [1, 10].includes(
    getDefaultValue(dealer.hand[0])
  )

  const byPlayer = {
    blackjack: dealerWillNeverBlackjack && BLACKJACK,
    bust: LOSE
  }

  const byDealer = {
    blackjack: LOSE,
    bust: WIN
  }

  return Number.isFinite(byPlayer[playerResult])
    ? byPlayer[playerResult]
    : Number.isFinite(byDealer[dealerResult])
    ? byDealer[dealerResult]
    : dealer.status === 'stay'
    ? compare()
    : player.status === 'surrender'
    ? SURRENDER
    : NaN
}
