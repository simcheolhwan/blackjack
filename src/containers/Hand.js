import { connect } from 'react-redux'
import Hand from '../components/Hand'
import d from '../rules/dealer'
import h from '../rules/hand'

export default connect(({ player, dealer, turn }, { index }) => {
  const { hand, surrender } = Number.isInteger(index)
    ? player[index]
    : { hand: dealer }

  const { totals, blackjack, bust } = h(hand)
  const status = blackjack
    ? 'blackjack'
    : bust
    ? 'bust'
    : surrender
    ? 'surrender'
    : turn > index || (!Number.isInteger(index) && !d(dealer).must.draw)
    ? 'stay'
    : ''

  return { hand, desc: join([join(totals, ', '), status]) }
})(Hand)

/* utils */
const join = (array, sep = ' ') => array.filter(Boolean).join(sep)
