import { getDeck, getCardValue } from './deck'

describe('덱', () => {
  describe('덱이 포함하는 카드 개수', () => {
    test.each`
      decks | length
      ${1}  | ${52 * 1}
      ${6}  | ${52 * 6}
    `('$decks', ({ decks, length }) => {
      expect(getDeck(decks).length).toBe(length)
    })
  })

  describe('카드의 숫자 읽기', () => {
    test.each`
      card   | value
      ${2}   | ${2}
      ${10}  | ${10}
      ${'J'} | ${10}
      ${'Q'} | ${10}
      ${'K'} | ${10}
      ${'A'} | ${1}
    `('$card', ({ card, value }) => {
      expect(getCardValue(card)).toBe(value)
    })
  })
})
