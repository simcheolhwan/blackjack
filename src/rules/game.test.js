import g, { getResults } from './game'

describe('게임 결과', () => {
  describe('Not finished', () => {
    const player = [{ hand: [10, 10], bets: 2 }]
    const dealer = [6]

    test('results', () => {
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBeFalsy()
      expect(results.prize).toBeFalsy()
      expect(results.message).toBeFalsy()
    })

    test('hasFinished', () => {
      const { hasFinished } = g({ player, dealer })
      expect(hasFinished).toBeFalsy()
    })
  })

  describe('stay', () => {
    test('Win', () => {
      const player = [{ hand: [10, 5, 6], bets: 2 }]
      const dealer = [7, 9, 10]
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(1)
      expect(results.prize).toBe(2)
      expect(results.message).toBe('Win')
    })

    test('Lose', () => {
      const player = [{ hand: [10, 7], bets: 2 }]
      const dealer = ['A', 9]
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(-1)
      expect(results.prize).toBe(-2)
      expect(results.message).toBe('Lose')
    })

    test('Draw', () => {
      const player = [{ hand: [10, 7], bets: 2 }]
      const dealer = [2, 3, 4, 5, 3]
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(0)
      expect(results.prize).toBe(0)
      expect(results.message).toBe('Draw')
    })
  })

  describe('bust', () => {
    test('Win', () => {
      // 딜러 버스트
      const player = [{ hand: [10, 5], bets: 2 }]
      const dealer = [2, 3, 4, 5, 8]
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(1)
      expect(results.prize).toBe(2)
      expect(results.message).toBe('Win')
    })

    test('Lose', () => {
      // 플레이어 버스트
      const player = [{ hand: [10, 5, 7], bets: 2 }]
      const dealer = []
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(-1)
      expect(results.prize).toBe(-2)
      expect(results.message).toBe('Lose')
    })
  })

  describe('블랙잭', () => {
    test('Undefined', () => {
      const player = [{ hand: ['A', 'K'], bets: 2 }]
      const dealer = ['A']
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBeUndefined()
      expect(results.prize).toBeUndefined()
      expect(results.message).toBeUndefined()
    })

    test('Win', () => {
      const player = [{ hand: ['A', 'K'], bets: 2 }]
      const dealer = [9]
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(1.5)
      expect(results.prize).toBe(3)
      expect(results.message).toBe('Blackjack')
    })

    test('Lose', () => {
      // 플레이어 21, 딜러 블랙잭
      const player = [{ hand: ['A', 8, 2], bets: 2 }]
      const dealer = ['A', 'K']
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(-1)
      expect(results.prize).toBe(-2)
      expect(results.message).toBe('Lose')
    })

    test('Draw', () => {
      const player = [{ hand: ['A', 'K'], bets: 2 }]
      const dealer = ['A', 'K']
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(0)
      expect(results.prize).toBe(0)
      expect(results.message).toBe('Draw')
    })

    test('Blackjack after a split', () => {
      // are counted as a non-blackjack 21
      const player = [{ hand: ['A', 'K'], bets: 1 }, { hand: ['A'], bets: 1 }]
      const dealer = ['A', 9]
      const results = getResults({ player, dealer }, 0)
      expect(results.result).toBe(1)
      expect(results.prize).toBe(1)
      expect(results.message).toBe('Win')
    })
  })

  describe('스플릿', () => {
    test('스플릿 후 총합', () => {
      const player = [{ hand: [8, 10], bets: 2 }, { hand: [8, 10], bets: 2 }]
      const dealer = [6, 10, 10]
      const results = g({ player, dealer }, 0)
      expect(results.prize).toBe(4)
    })
  })
})
