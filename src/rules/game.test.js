import g, { getResults } from './game'

const testResults = ({ game, index = 0, results, expected }) => {
  test('results', () => {
    results && expect(getResults(game, index)).toEqual(results)
  })

  test('game', () => {
    expected && expect(g(game)).toEqual(expected)
  })
}

const cases = {
  undefined: [
    {
      game: { player: [{ hand: [], bets: 0 }], dealer: [] },
      results: { result: undefined, prize: undefined, message: undefined },
      expected: { hasFinished: undefined, prize: undefined }
    },
    {
      game: { player: [{ hand: [10, 10], bets: 2 }], dealer: [6] },
      results: { result: undefined, prize: undefined, message: undefined },
      expected: { hasFinished: false, prize: undefined }
    }
  ],
  stay: [
    {
      game: { player: [{ hand: [10, 5, 6], bets: 2 }], dealer: [7, 9, 10] },
      results: { result: 1, prize: 2, message: 'Win' }
    },
    {
      game: { player: [{ hand: [10, 7], bets: 2 }], dealer: ['A', 9] },
      results: { result: -1, prize: -2, message: 'Lose' }
    },
    {
      game: { player: [{ hand: [10, 7], bets: 2 }], dealer: [2, 3, 4, 5, 3] },
      results: { result: 0, prize: 0, message: 'Draw' }
    }
  ],
  bust: [
    {
      game: { player: [{ hand: [10, 5], bets: 2 }], dealer: [2, 3, 4, 5, 8] },
      results: { result: 1, prize: 2, message: 'Win' }
    },
    {
      game: { player: [{ hand: [10, 5, 7], bets: 2 }], dealer: [7] },
      results: { result: -1, prize: -2, message: 'Lose' }
    }
  ],
  blackjack: [
    {
      game: { player: [{ hand: ['A', 'K'], bets: 2 }], dealer: ['A'] },
      results: { result: undefined, prize: undefined, message: undefined }
    },
    {
      game: { player: [{ hand: ['A', 'K'], bets: 2 }], dealer: [9] },
      results: { result: 1.5, prize: 3, message: 'Blackjack' }
    },
    {
      game: { player: [{ hand: ['A', 8, 2], bets: 2 }], dealer: ['A', 'K'] },
      results: { result: -1, prize: -2, message: 'Lose' }
    },
    {
      game: { player: [{ hand: ['A', 'K'], bets: 2 }], dealer: ['A', 'K'] },
      results: { result: 0, prize: 0, message: 'Draw' }
    },
    {
      // Blackjack after a split are counted as a non-blackjack 21
      game: {
        player: [{ hand: ['A', 'K'], bets: 1 }, { hand: ['A'], bets: 1 }],
        dealer: ['A', 9]
      },
      results: { result: 1, prize: 1, message: 'Win' }
    }
  ],
  split: [
    {
      game: {
        player: [{ hand: [8, 10], bets: 2 }, { hand: [8, 10], bets: 2 }],
        dealer: [6, 10, 10],
        turn: 2
      },
      expected: { hasFinished: true, prize: 4 }
    }
  ]
}

describe('게임 결과', () => {
  Object.entries(cases).forEach(([key, value]) =>
    describe(key, () => {
      describe.each(value)('%#', testResults)
    })
  )
})
