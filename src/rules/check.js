import getTotals from './getTotals'
import getResult from './getResult'

export const isInit = ({ hand, status }) => hand.length === 2 && !status
export const getCurrentPlayer = ({ primary, replica }) =>
  !!replica.hand.length && !!primary.status ? 'replica' : 'primary'

export default {
  canSplit: ({ players, coins }) => {
    const { primary, replica } = players
    const hasReplica = !!replica.hand.length
    return (
      isInit(primary) &&
      coins >= primary.stake &&
      primary.hand[0] === primary.hand[1] &&
      !hasReplica
    )
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
