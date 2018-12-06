import h from './hand'

export default ({ player, bankroll }, index) => {
  const { hand, bet } = player[index]
  const { totals } = h(hand)

  const isInit = hand.length === 2
  const isPair = hand[0] === hand[1]
  const hasEnough = bankroll >= bet
  const hasSplitAces = player.length > 1 && hand[0] === 'A'
  const H = totals.some(n => n < 21) && !hasSplitAces

  return {
    can: {
      H,
      S: true,
      D: H && isInit && hasEnough,
      SP: isInit && isPair && hasEnough && player.length < 4 && !hasSplitAces,
      SU: isInit && player.length === 1
    }
  }
}
