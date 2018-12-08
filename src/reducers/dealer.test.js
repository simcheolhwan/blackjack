import reducer from './dealer'

describe('딜러 리듀서', () => {
  test('시작', () => {
    const action = { type: 'start', dealer: [6] }
    const state = undefined
    const expected = [6]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('게임 종료', () => {
    const action = { type: 'finish' }
    const state = [10, 7]
    const expected = []
    expect(reducer(state, action)).toEqual(expected)
  })

  test('드로우', () => {
    const action = { type: 'draw', card: 10 }
    const state = [6]
    const expected = [6, 10]
    expect(reducer(state, action)).toEqual(expected)
  })

  test('드로우: 차례가 아님', () => {
    const action = { type: 'draw', turn: 0, card: 'A' }
    const state = [10]
    const expected = [10]
    expect(reducer(state, action)).toEqual(expected)
  })
})
