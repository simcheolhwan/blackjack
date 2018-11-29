import getTotals from './getTotals'
import getResult from './getResult'
import getGameResult from './getGameResult'

export default {
  canPlayerDraw: ({ hand, status }) => !getResult(hand) && !status,
  canPlayerSurrender: ({ hand, status }) => hand.length === 2 && !status,
  shouldPlayerStay: ({ hand }) => getTotals(hand).some(n => n === 21),

  canSplit: ({ primary, replica }) => {
    const { hand, status } = primary
    const hasReplica = !!replica.hand.length
    return hand.length === 2 && hand[0] === hand[1] && !status && !hasReplica
  },

  shouldDealerDraw: ({ dealer, primary, replica }) =>
    [primary, replica]
      .filter(({ hand }) => hand.length)
      .every(({ status }) => status === 'stay') &&
    getTotals(dealer.hand).every(n => n <= 16) &&
    dealer.status !== 'stay',

  shouldDealerStay: ({ dealer, primary, replica }) =>
    getTotals(dealer.hand).some(n => n >= 17),

  hasGameFinished: ({ dealer, primary, replica }) =>
    [primary, replica]
      .filter(({ hand }) => hand.length)
      .every(player => Number.isFinite(getGameResult({ player, dealer })))
}
