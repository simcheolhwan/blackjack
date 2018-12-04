import { getResults } from './game'

describe('게임', () => {
  describe('일반', () => {
    test('stay', () => {
      const results = getResults({ stake: 2, hand: [10, 5, 6] }, [7, 9, 10])
      expect(results.result).toBe(1)
      expect(results.prize).toBe(2)
      expect(results.message).toBe('Win')
    })

    test('bust', () => {
      const results = getResults({ stake: 2, hand: [10, 5, 7] }, [])
      expect(results.result).toBe(-1)
      expect(results.prize).toBe(-2)
      expect(results.message).toBe('Lose')
    })
  })

  describe('블랙잭', () => {
    test('Undefined', () => {
      const results = getResults({ stake: 2, hand: ['A', 'K'] }, ['A'])
      expect(results.result).toBeUndefined()
      expect(results.prize).toBeUndefined()
      expect(results.message).toBeUndefined()
    })

    test('Win', () => {
      const results = getResults({ stake: 2, hand: ['A', 'K'] }, [9])
      expect(results.result).toBe(1.5)
      expect(results.prize).toBe(3)
      expect(results.message).toBe('Blackjack')
    })

    test('Draw', () => {
      const results = getResults({ stake: 2, hand: ['A', 'K'] }, ['A', 'K'])
      expect(results.result).toBe(0)
      expect(results.prize).toBe(0)
      expect(results.message).toBe('Draw')
    })
  })
})
