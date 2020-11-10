import { getCardValue } from "./deck"
import h from "./hand"

const H = ["H"]
const S = ["S"]
const DH = ["D", "H"]
const DS = ["D", "S"]
const SP = ["SP"]
const SU = ["SU"]

export default ({ hand = [], dealer = [] }, hard = false) => {
  const getHard = () =>
    totals[0] >= 17
      ? S
      : totals[0] <= 8
      ? H
      : {
          16: b(2, 6) ? S : b(7, 8) ? H : SU,
          15: b(2, 6) ? S : upcard === 10 ? SU : H,
          14: b(2, 6) ? S : H,
          13: b(2, 6) ? S : H,
          12: b(4, 6) ? S : H,
          11: b(2, 9) ? DH : H,
          10: b(2, 9) ? DH : H,
          9: b(3, 6) ? DH : H,
        }[totals[0]]

  const upcard = getCardValue(dealer[0])
  const b = between(upcard)
  const isInit = hand.length === 2
  const isPair = isInit && hand[0] === hand[1]
  const { totals } = h(hand)
  const isSoft = totals.length > 1

  return (
    (hard
      ? getHard()
      : isPair
      ? {
          10: S,
          9: b(2, 6) || b(8, 9) ? SP : S,
          8: b(2, 9) ? SP : upcard === 10 ? SU : H,
          7: b(2, 7) ? SP : upcard === 10 ? SU : H,
          6: b(2, 6) ? SP : H,
          5: b(2, 9) ? DH : H,
          4: b(5, 6) ? SP : H,
          3: b(2, 7) ? SP : H,
          2: b(2, 7) ? SP : H,
          1: SP,
        }[getCardValue(hand[0])]
      : isSoft
      ? {
          20: S,
          19: S,
          18: b(3, 6) ? DS : b(2, 8) ? S : H,
          17: b(3, 6) ? DH : H,
          16: b(4, 6) ? DH : H,
          15: b(4, 6) ? DH : H,
          14: b(5, 6) ? DH : H,
          13: b(5, 6) ? DH : H,
        }[totals[1]]
      : getHard()) || []
  )
}

/* utils */
const between = (n) => (min, max) => n >= min && n <= max
