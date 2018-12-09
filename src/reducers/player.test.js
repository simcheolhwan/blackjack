import reducer from './player'

describe('플레이어 리듀서', () => {
  test('초기 상태', () => {
    const action = {}
    const state = undefined
    const expected = [{ hand: [], bets: 0 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('베팅', () => {
    const action = { type: 'bet', turn: 0, bets: 1 }
    const state = [{ hand: [], bets: 0 }]
    const expected = [{ hand: [], bets: 1 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('게임 시작', () => {
    const action = { type: 'start', turn: 0, player: ['A', 'K'] }
    const state = [{ hand: [], bets: 1 }]
    const expected = [{ hand: ['A', 'K'], bets: 1 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('게임 종료', () => {
    const action = { type: 'finish', bets: 1 }
    const state = [{ hand: ['A', 'K'], bets: 1 }, { hand: ['A', 9], bets: 1 }]
    const expected = [{ hand: [], bets: 1 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('드로우', () => {
    const action = { type: 'draw', turn: 0, card: 'A' }
    const state = [{ hand: [], bets: 1 }]
    const expected = [{ hand: ['A'], bets: 1 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('Hit', () => {
    const action = { type: 'hit', turn: 0, card: 'A' }
    const state = [{ hand: [], bets: 1 }]
    const expected = [{ hand: ['A'], bets: 1 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('Double', () => {
    const action = { type: 'double', turn: 0, card: 10 }
    const state = [{ hand: [6, 5], bets: 1 }]
    const expected = [{ hand: [6, 5, 10], bets: 2, double: true }]
    expect(reducer(state, action)).toEqual(expected)
  })

  describe('Split', () => {
    test('1', () => {
      const action = { type: 'split', turn: 0 }
      const state = [{ hand: ['A', 'A'], bets: 1 }]
      const expected = [{ hand: ['A'], bets: 1 }, { hand: ['A'], bets: 1 }]
      expect(reducer(state, action)).toEqual(expected)
    })

    test('2', () => {
      const action = { type: 'split', turn: 1 }
      const state = [
        { hand: ['A', 'K'], bets: 1 },
        { hand: ['A', 'A'], bets: 1 }
      ]
      const expected = [
        { hand: ['A', 'K'], bets: 1 },
        { hand: ['A'], bets: 1 },
        { hand: ['A'], bets: 1 }
      ]
      expect(reducer(state, action)).toEqual(expected)
    })
  })

  test('Surrender', () => {
    const action = { type: 'surrender', turn: 0 }
    const state = [{ hand: [10, 6], bets: 1 }]
    const expected = [{ hand: [10, 6], bets: 1, surrender: true }]
    expect(reducer(state, action)).toEqual(expected)
  })
})
