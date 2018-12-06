import reducer from './player'

describe('플레이어 리듀서', () => {
  test('베팅', () => {
    const action = { type: 'bet', turn: 0, amount: 1 }
    const state = [{ hand: [], bet: 0 }]
    const expected = [{ hand: [], bet: 1 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('시작', () => {
    const action = { type: 'start', turn: 0, player: ['A', 'K'] }
    const state = [{ hand: [], bet: 1 }]
    const expected = [{ hand: ['A', 'K'], bet: 1 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('끝', () => {
    const action = { type: 'finish' }
    const state = [{ hand: ['A', 'K'], bet: 1 }, { hand: ['A', 9], bet: 1 }]
    const expected = [{ hand: [], bet: 0 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('드로우', () => {
    const action = { type: 'draw', turn: 0, card: 'A' }
    const state = [{ hand: [], bet: 1 }]
    const expected = [{ hand: ['A'], bet: 1 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('더블', () => {
    const action = { type: 'double', turn: 0, card: 10 }
    const state = [{ hand: [6, 5], bet: 1 }]
    const expected = [{ hand: [6, 5, 10], bet: 2 }]
    expect(reducer(state, action)).toEqual(expected)
  })

  describe('스플릿', () => {
    test('1', () => {
      const action = { type: 'split', turn: 0 }
      const state = [{ hand: ['A', 'A'], bet: 1 }]
      const expected = [{ hand: ['A'], bet: 1 }, { hand: ['A'], bet: 1 }]
      expect(reducer(state, action)).toEqual(expected)
    })

    test('2', () => {
      const action = { type: 'split', turn: 1 }
      const state = [{ hand: ['A', 'K'], bet: 1 }, { hand: ['A', 'A'], bet: 1 }]
      const expected = [
        { hand: ['A', 'K'], bet: 1 },
        { hand: ['A'], bet: 1 },
        { hand: ['A'], bet: 1 }
      ]
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
