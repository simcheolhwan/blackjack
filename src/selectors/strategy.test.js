import selector, { findPossible } from './strategy'

const cases = [
  {
    player: [{ hand: ['A', 'K'], bets: 1 }],
    dealer: ['A'],
    bank: 1,
    turn: 0,
    expected: undefined
  }, // 블랙잭
  {
    player: [{ hand: ['A', 'A'], bets: 1 }],
    dealer: [6],
    bank: 0,
    turn: 0,
    expected: 'H'
  }, // 스플릿: 자금 부족
  {
    player: [{ hand: [8, 8], bets: 1 }],
    dealer: [10],
    bank: 0,
    turn: 0,
    expected: 'SU'
  }, // 스플릿: 자금 부족
  {
    player: [{ hand: [7, 7], bets: 1 }],
    dealer: [7],
    bank: 0,
    turn: 0,
    expected: 'H'
  }, // 스플릿: 자금 부족
  {
    player: [{ hand: [6, 6], bets: 1 }],
    dealer: [6],
    bank: 0,
    turn: 0,
    expected: 'S'
  }, // 스플릿: 자금 부족
  {
    player: [
      { hand: [6, 5, 10], bets: 2 },
      { hand: [6, 5, 10], bets: 2 },
      { hand: [6, 5, 10], bets: 2 },
      { hand: [6, 6], bets: 1 }
    ],
    dealer: [6],
    bank: 1,
    turn: 3,
    expected: 'S'
  }, // 스플릿: 최대 핸드 한도 도달
  {
    player: [
      { hand: [6, 5, 10], bets: 2 },
      { hand: [6, 5, 10], bets: 2 },
      { hand: [6, 5, 10], bets: 2 },
      { hand: [6, 6], bets: 1 }
    ],
    dealer: [7],
    bank: 1,
    turn: 3,
    expected: 'H'
  }, // 스플릿: 최대 핸드 한도 도달
  {
    player: [{ hand: [6, 5], bets: 1 }],
    dealer: [6],
    bank: 0,
    turn: 0,
    expected: 'H'
  }, // 더블: 자금 부족
  {
    player: [{ hand: [5, 5], bets: 1 }],
    dealer: [9],
    bank: 0,
    turn: 0,
    expected: 'H'
  }, // 더블: 자금 부족
  {
    player: [{ hand: ['A', 7], bets: 1 }],
    dealer: [6],
    bank: 0,
    turn: 0,
    expected: 'S'
  }, // 더블: 자금 부족
  {
    player: [{ hand: ['A', 6], bets: 1 }],
    dealer: [6],
    bank: 0,
    turn: 0,
    expected: 'H'
  }, // 더블: 자금 부족
  {
    player: [{ hand: [6, 3, 2], bets: 1 }],
    dealer: [6],
    bank: 1,
    turn: 0,
    expected: 'H'
  }, // 더블: 초기 상태가 아님
  {
    player: [{ hand: ['A', 4, 3], bets: 1 }],
    dealer: [6],
    bank: 1,
    turn: 0,
    expected: 'S'
  }, // 더블: 초기 상태가 아님
  {
    player: [{ hand: ['A', 4, 2], bets: 1 }],
    dealer: [6],
    bank: 1,
    turn: 0,
    expected: 'H'
  }, // 더블: 초기 상태가 아님
  {
    player: [{ hand: [10, 3, 2], bets: 1 }],
    dealer: [10],
    bank: 0,
    turn: 0,
    expected: 'H'
  }, // 서렌더: 초기 상태가 아님
  {
    player: [{ hand: [8, 7], bets: 1 }, { hand: [8], bets: 1 }],
    dealer: [10],
    bank: 0,
    turn: 0,
    expected: 'H'
  } // 서렌더: 스플릿했음
]

describe('전략', () => {
  const testSelector = ({ player, dealer, bank, turn, expected }) => {
    expect(selector({ player, dealer, bank, turn })).toEqual(expected)
  }

  test.each(cases)('%j', testSelector)
})

describe('전략 중 가능한 것 찾기', () => {
  test.each`
    can                      | strategies    | expected
    ${{ H: true, D: false }} | ${['D', 'H']} | ${'H'}
    ${{ H: true, D: true }}  | ${['D', 'H']} | ${'D'}
  `('$can $strategies $expected', ({ can, strategies, expected }) => {
    expect(findPossible(strategies, can)).toBe(expected)
  })
})
