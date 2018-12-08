import { getDeck, getCardValue } from './deck'

describe('덱', () => {
  test('덱이 포함하는 카드 개수', () => {
    expect(getDeck(1).length).toBe(52 * 1)
    expect(getDeck(6).length).toBe(52 * 6)
  })

  test('카드의 숫자 읽기', () => {
    expect(getCardValue(2)).toBe(2)
    expect(getCardValue(10)).toBe(10)
    expect(getCardValue('J')).toBe(10)
    expect(getCardValue('Q')).toBe(10)
    expect(getCardValue('K')).toBe(10)
    expect(getCardValue('A')).toBe(1)
  })
})
