import getTotals from './getTotals'
import getResult from './getResult'

export default {
  canPlayerDraw: ({ status }) => !status,
  canPlayerDouble: ({ hand, status }) => hand.length === 2 && !status,
  canPlayerSurrender: ({ hand, status }) => hand.length === 2 && !status,
  canSplit: ({ primary, replica }) => {
    const { hand, status } = primary
    const hasReplica = !!replica.hand.length
    return hand.length === 2 && hand[0] === hand[1] && !status && !hasReplica
  },

  shouldDealerDraw: ({ dealer, primary, replica }) => {
    const { status, hand } = dealer
    return (
      !status &&
      getTotals(hand).every(n => n <= 16) &&
      [primary, replica]
        .filter(({ hand }) => hand.length)
        .every(({ status }) => status)
    )
  },

  shouldDealerStay: ({ dealer }) =>
    !dealer.status && getTotals(dealer.hand).some(n => n >= 17),

  hasGameFinished: players =>
    ['primary', 'replica']
      .filter(playerKey => players[playerKey].hand.length)
      .every(playerKey => getResult(players, playerKey))
}
