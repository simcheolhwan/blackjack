import h from './hand'

export default ({ player, bankroll }, index) => {
  const { hand, bet } = player[index]
  const isInit = hand.length === 2
  const { totals } = h(hand)

  return {
    can: {
      H: totals < 21,
      S: true,
      D: isInit && bankroll >= bet,
      SP: isInit && hand[0] === hand[1] && bankroll >= bet && player.length < 4,
      SU: isInit && player.length === 1
    }
  }
}
