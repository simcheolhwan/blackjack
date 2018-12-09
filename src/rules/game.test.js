import g, { getResults } from './game'

const testResults = ({ player, dealer, index = 0, result, prize, message }) => {
  const results = getResults({ player, dealer }, index)
  expect(results.result).toBe(result)
  expect(results.prize).toBe(prize)
  expect(results.message).toBe(message)
}

const cases = {
  undefined: [
    {
      player: [{ hand: [10, 10], bets: 2 }],
      dealer: [6],
      result: undefined,
      prize: undefined,
      message: undefined
    }
  ],
  stay: [
    {
      player: [{ hand: [10, 5, 6], bets: 2 }],
      dealer: [7, 9, 10],
      result: 1,
      prize: 2,
      message: 'Win'
    },
    {
      player: [{ hand: [10, 7], bets: 2 }],
      dealer: ['A', 9],
      result: -1,
      prize: -2,
      message: 'Lose'
    },
    {
      player: [{ hand: [10, 7], bets: 2 }],
      dealer: [2, 3, 4, 5, 3],
      result: 0,
      prize: 0,
      message: 'Draw'
    }
  ],
  bust: [
    {
      player: [{ hand: [10, 5], bets: 2 }],
      dealer: [2, 3, 4, 5, 8],
      result: 1,
      prize: 2,
      message: 'Win'
    },
    {
      player: [{ hand: [10, 5, 7], bets: 2 }],
      dealer: [],
      result: -1,
      prize: -2,
      message: 'Lose'
    }
  ],
  blackjack: [
    {
      player: [{ hand: ['A', 'K'], bets: 2 }],
      dealer: ['A'],
      result: undefined,
      prize: undefined,
      message: undefined
    },
    {
      player: [{ hand: ['A', 'K'], bets: 2 }],
      dealer: [9],
      result: 1.5,
      prize: 3,
      message: 'Blackjack'
    },
    {
      player: [{ hand: ['A', 8, 2], bets: 2 }],
      dealer: ['A', 'K'],
      result: -1,
      prize: -2,
      message: 'Lose'
    },
    {
      player: [{ hand: ['A', 'K'], bets: 2 }],
      dealer: ['A', 'K'],
      result: 0,
      prize: 0,
      message: 'Draw'
    },
    {
      // Blackjack after a split are counted as a non-blackjack 21
      player: [{ hand: ['A', 'K'], bets: 1 }, { hand: ['A'], bets: 1 }],
      dealer: ['A', 9],
      result: 1,
      prize: 1,
      message: 'Win'
    }
  ]
}

describe('게임 결과', () => {
  Object.entries(cases).forEach(([key, value]) =>
    describe(key, () => {
      test.each(value)('%#', testResults)
    })
  )

  test('Not finished', () => {
    const { hasFinished } = g(cases['undefined'][0])
    expect(hasFinished).toBeFalsy()
  })

  test('스플릿 후 합계', () => {
    const player = [{ hand: [8, 10], bets: 2 }, { hand: [8, 10], bets: 2 }]
    const dealer = [6, 10, 10]
    const results = g({ player, dealer })
    expect(results.prize).toBe(4)
  })
})
