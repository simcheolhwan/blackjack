import { getResults } from './game'

describe('게임', () => {
  describe('일반', () => {
    test('stay', () => {
      const player = [{ hand: [10, 5, 6], bet: 2 }]
      const results = getResults({ player, dealer: [7, 9, 10] }, 0)
      expect(results.result).toBe(1)
      expect(results.prize).toBe(2)
      expect(results.message).toBe('Win')
    })

    test('bust', () => {
      const player = [{ hand: [10, 5, 7], bet: 2 }]
      const results = getResults({ player, dealer: [] }, 0)
      expect(results.result).toBe(-1)
      expect(results.prize).toBe(-2)
      expect(results.message).toBe('Lose')
    })
  })

  describe('블랙잭', () => {
    test('Undefined', () => {
      const player = [{ hand: ['A', 'K'], bet: 2 }]
      const results = getResults({ player, dealer: ['A'] }, 0)
      expect(results.result).toBeUndefined()
      expect(results.prize).toBeUndefined()
      expect(results.message).toBeUndefined()
    })

    test('Win', () => {
      const player = [{ hand: ['A', 'K'], bet: 2 }]
      const results = getResults({ player, dealer: [9] }, 0)
      expect(results.result).toBe(1.5)
      expect(results.prize).toBe(3)
      expect(results.message).toBe('Blackjack')
    })

    test('Lose', () => {
      const player = [{ hand: ['A', 8, 2], bet: 2 }]
      const results = getResults({ player, dealer: ['A', 'K'] }, 0)
      expect(results.result).toBe(-1)
      expect(results.prize).toBe(-2)
      expect(results.message).toBe('Lose')
    })

    test('Draw', () => {
      const player = [{ hand: ['A', 'K'], bet: 2 }]
      const results = getResults({ player, dealer: ['A', 'K'] }, 0)
      expect(results.result).toBe(0)
      expect(results.prize).toBe(0)
      expect(results.message).toBe('Draw')
    })

    test('Blackjack after a split', () => {
      const player = [{ hand: ['A', 'K'], bet: 1 }, { hand: ['A'], bet: 1 }]
      const results = getResults({ player, dealer: ['A', 9] }, 0)
      expect(results.result).toBe(1)
      expect(results.prize).toBe(1)
      expect(results.message).toBe('Win')
    })
  })
})
