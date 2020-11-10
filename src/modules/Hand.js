import { connect } from "react-redux"
import Hand from "../components/Hand"
import d from "../rules/dealer"
import h from "../rules/hand"

export default connect(({ player, dealer, turn }, { index }) => {
  const isPlayer = Number.isInteger(index) // 딜러는 정수가 아닌 값을 받는다.
  const { hand, surrender } = isPlayer ? player[index] : { hand: dealer }
  const { totals, blackjack, bust } = h(hand)
  const isStayingPlayer = turn > index
  const isStyaingDealer = !isPlayer && !d(dealer).must.draw

  const status = blackjack
    ? "blackjack"
    : bust
    ? "bust"
    : surrender
    ? "surrender"
    : isStayingPlayer || isStyaingDealer
    ? "stay"
    : ""

  return { hand, desc: join([join(totals, ", "), status]) }
})(Hand)

/* utils */
const join = (array, sep = " ") => array.filter(Boolean).join(sep)
