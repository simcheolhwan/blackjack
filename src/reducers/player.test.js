import testReducer from '../helpers/testReducer'
import reducer from './player'

const cases = [
  {
    action: {},
    state: undefined,
    expected: [{ hand: [], bets: 0 }]
  },
  {
    action: { type: 'bet', turn: 0, bets: 1 },
    state: [{ hand: [], bets: 0 }],
    expected: [{ hand: [], bets: 1 }]
  },
  {
    action: { type: 'start', turn: 0, player: ['A', 'K'] },
    state: [{ hand: [], bets: 1 }],
    expected: [{ hand: ['A', 'K'], bets: 1 }]
  },
  {
    action: { type: 'finish', bets: 1 },
    state: [{ hand: ['A', 'K'], bets: 1 }, { hand: ['A', 9], bets: 1 }],
    expected: [{ hand: [], bets: 1 }]
  },
  {
    action: { type: 'draw', turn: 0, card: 'A' },
    state: [{ hand: [], bets: 1 }],
    expected: [{ hand: ['A'], bets: 1 }]
  },
  {
    action: { type: 'hit', turn: 0, card: 'A' },
    state: [{ hand: [], bets: 1 }],
    expected: [{ hand: ['A'], bets: 1 }]
  },
  {
    action: { type: 'double', turn: 0, card: 10 },
    state: [{ hand: [6, 5], bets: 1 }],
    expected: [{ hand: [6, 5, 10], bets: 2, double: true }]
  },
  {
    action: { type: 'split', turn: 0 },
    state: [{ hand: ['A', 'A'], bets: 1 }],
    expected: [{ hand: ['A'], bets: 1 }, { hand: ['A'], bets: 1 }]
  },
  {
    action: { type: 'split', turn: 1 },
    state: [{ hand: ['A', 'K'], bets: 1 }, { hand: ['A', 'A'], bets: 1 }],
    expected: [
      { hand: ['A', 'K'], bets: 1 },
      { hand: ['A'], bets: 1 },
      { hand: ['A'], bets: 1 }
    ]
  },
  {
    action: { type: 'surrender', turn: 0 },
    state: [{ hand: [10, 6], bets: 1 }],
    expected: [{ hand: [10, 6], bets: 1, surrender: true }]
  }
]

describe('플레이어 리듀서', () => {
  test.each(cases)('%#', testReducer(reducer))
})
