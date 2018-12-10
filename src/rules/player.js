import h from './hand'

export default ({ player = [{ hand: [], bets: 0 }], bank = 0, turn = 0 }) => {
  const { hand, bets } = player[turn]
  const { totals } = h(hand)

  const isInit = hand.length === 2
  const isPair = isInit && hand[0] === hand[1]
  const hasEnough = bank >= bets
  const hasSplitAces = player.length > 1 && hand[0] === 'A'
  const H = hand.length > 1 && totals.some(n => n < 21) && !hasSplitAces

  const can = {
    H,
    S: H,
    D: H && isInit && hasEnough,
    SP: H && isPair && hasEnough && player.length < 4 && !hasSplitAces,
    SU: H && isInit && player.length === 1
  }

  const must = {
    draw: hand.length === 1
  }

  return { can, must }
}
