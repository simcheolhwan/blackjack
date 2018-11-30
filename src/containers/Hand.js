import { connect } from 'react-redux'
import check from '../rules/check'
import Hand from '../components/Hand'
import getTotals from '../rules/getTotals'

export default connect(({ players }, { playerKey }) => {
  const { hand, status } = players[playerKey]
  return {
    hand,
    status: join([join(getTotals(hand), ', '), status]),
    canDraw:
      playerKey === 'dealer' &&
      !check.hasGameFinished(players) &&
      check.shouldDealerDraw(players)
  }
})(Hand)

/* utils */
const join = (array, sep = ' ') => array.filter(Boolean).join(sep)
