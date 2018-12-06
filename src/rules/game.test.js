import { getResults } from './game'

describe('게임 결과', () => {
  describe('stay', () => {
    test('Win', () => {
      const player = [{ hand: [10, 5, 6], bet: 2 }]
      const results = getResults({ player, dealer: [7, 9, 10] }, 0)
      expect(results.result).toBe(1)
      expect(results.prize).toBe(2)
      expect(results.message).toBe('Win')
    })

    test('Lose', () => {
      const player = [{ hand: [10, 7], bet: 2 }]
      const results = getResults({ player, dealer: ['A', 9] }, 0)
      expect(results.result).toBe(-1)
      expect(results.prize).toBe(-2)
      expect(results.message).toBe('Lose')
    })

    test('Draw', () => {
      const player = [{ hand: [10, 7], bet: 2 }]
      const results = getResults({ player, dealer: [2, 3, 4, 5, 3] }, 0)
      expect(results.result).toBe(0)
      expect(results.prize).toBe(0)
      expect(results.message).toBe('Draw')
    })
  })

  describe('bust', () => {
    test('Win', () => {
      // 딜러 버스트
      const player = [{ hand: [10, 5], bet: 2 }]
      const results = getResults({ player, dealer: [2, 3, 4, 5, 8] }, 0)
      expect(results.result).toBe(1)
      expect(results.prize).toBe(2)
      expect(results.message).toBe('Win')
    })

    test('Lose', () => {
      // 플레이어 버스트
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
      // 플레이어 21, 딜러 블랙잭
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
      // are counted as a non-blackjack 21
      const player = [{ hand: ['A', 'K'], bet: 1 }, { hand: ['A'], bet: 1 }]
      const results = getResults({ player, dealer: ['A', 9] }, 0)
      expect(results.result).toBe(1)
      expect(results.prize).toBe(1)
      expect(results.message).toBe('Win')
    })
  })
})
