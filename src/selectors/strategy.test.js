import selector from './strategy'

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
