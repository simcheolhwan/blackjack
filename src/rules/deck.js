export const getCardValue = card => Number(card) || (card === 'A' && 1) || 10
export const getDeck = n =>
  Array.from({ length: n * 4 }, () => deck).reduce(concat, [])

export const shuffleDeck = (n, shuffle) => shuffle(getDeck(n))

/* utils */
const deck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const concat = (acc, cur) => [...acc, ...cur]
