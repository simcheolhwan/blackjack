import shuffle from '../helpers/shuffle'
import { DECKS } from '../rules/constants'

export const getCardValue = card =>
  card && (Number(card) || (card === 'A' && 1) || 10)

export const getDeck = (n = 6) =>
  Array.from({ length: n * 4 }, () => deck).reduce(concat, [])

export const shuffleDeck = (n = DECKS, fn = shuffle) => fn(getDeck(n))

/* utils */
const deck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const concat = (acc, cur) => [...acc, ...cur]
