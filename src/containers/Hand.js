import { connect } from 'react-redux'
import Hand from '../components/Hand'
import h from '../rules/hand'

export default connect(({ player, dealer }, { index }) => {
  const { hand, surrender } = Number.isInteger(index)
    ? player[index]
    : { hand: dealer }
  const status = surrender ? 'surrender' : ''
  return { hand, desc: join([join(h(hand).totals, ', '), status]) }
})(Hand)

/* utils */
const join = (array, sep = ' ') => array.filter(Boolean).join(sep)
