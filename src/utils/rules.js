import getTotals from './getTotals'
import getResult, { isBlackjack } from './getResult'
import getGameResult from './getGameResult'

export default {
  getTotals,
  getResult,
  isBlackjack,
  getGameResult,

  canPlayerDraw: ({ hand, state }) => !getResult(hand) && !state,
  shouldPlayerStay: ({ hand }) => isBlackjack(hand),

  canSplit: ({ players }) =>
    players[0].hand.length === 2 &&
    players[0].hand[0] === players[0].hand[1] &&
    !players[0].state &&
    players.length === 1,

  shouldDealerDraw: ({ dealer, players }) =>
    players.every(({ state }) => state === 'stay') &&
    getTotals(dealer.hand).every(n => n <= 16) &&
    dealer.state !== 'stay',

  shouldDealerStay: ({ dealer, players }) =>
    getTotals(dealer.hand).some(n => n >= 17) ||
    (players.some(player => getResult(player.hand) === 'blackjack') &&
      dealer.hand.length === 2)
}
