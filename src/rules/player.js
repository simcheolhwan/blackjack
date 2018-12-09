import h from './hand'

export default ({ player, bank, turn }) => {
  const { hand, bets } = player[turn]
  const { totals } = h(hand)

  const isInit = hand.length === 2
  const isPair = hand[0] === hand[1]
  const hasEnough = bank >= bets
  const hasSplitAces = player.length > 1 && hand[0] === 'A'
  const H = hand.length > 1 && totals.some(n => n < 21) && !hasSplitAces

  const can = {
    H,
    S: true,
    D: isInit && hasEnough,
    SP: isInit && isPair && hasEnough && player.length < 4 && !hasSplitAces,
    SU: isInit && player.length === 1
  }

  const must = {
    draw: hand.length < 2
  }

  return { can: H ? can : {}, must }
}
