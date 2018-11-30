const deck = undefined
const player = { stake: 0, status: '', hand: [] }
const players = {
  dealer: { ...player, hand: [] },
  primary: { ...player, hand: [] }
}

export const MIN = 5
export const INITIAL = { deck, players }
