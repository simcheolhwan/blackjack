import getTotals from './getTotals'

const isBlackjack = hand =>
  hand.length === 2 && getTotals(hand).some(n => n === 21)

const getResult = hand => {
  const totals = getTotals(hand)
  const isBust = totals.every(n => n > 21)
  return isBlackjack(hand) ? 'blackjack' : isBust ? 'bust' : ''
}

const finish = ({ player, dealer, dealerStatus }) => {
  const WIN = 2
  const BLACKJACK = 1.5
  const DRAW = 1
  const LOSE = 0

  const compare = () => {
    const playerTotal = Math.max(...playerTotals)
    const dealerTotal = Math.max(...dealerTotals)
    return playerTotal > dealerTotal
      ? WIN
      : dealerTotal < playerTotal
      ? DRAW
      : LOSE
  }

  const playerTotals = getTotals(player)
  const playerResult = getResult(player)
  const dealerTotals = getTotals(dealer)
  const dealerResult = getResult(dealer)
  const isDealerNotBlackjack =
    dealer[0] !== 'A' || (dealer.length === 2 && dealerResult !== 'blackjack')

  const byPlayer = { blackjack: isDealerNotBlackjack && BLACKJACK, bust: LOSE }
  const byDealer = { blackjack: LOSE, bust: WIN }

  return Number.isFinite(byPlayer[playerResult])
    ? byPlayer[playerResult]
    : Number.isFinite(byDealer[dealerResult])
    ? byDealer[dealerResult]
    : dealerStatus === 'stay'
    ? compare()
    : NaN
}

export default {
  getTotals,
  getResult,
  isBlackjack,
  finish,
  canDraw: ({ player, playerStatus }) => !getResult(player) && !playerStatus,
  shouldDealerDraw: ({ player, playerStatus, dealer }) =>
    playerStatus === 'stay' && getTotals(dealer).every(n => n <= 16),
  shouldDealerStay: ({ dealer }) => getTotals(dealer).some(n => n >= 17)
}
