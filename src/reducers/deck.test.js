import reducer from './deck'

describe('덱 리듀서', () => {
  test('덱을 섞는다.', () => {
    const action = { type: 'shuffle' }
    const state = []
    expect(reducer(state, action).length).not.toBe(0)
  })

  test('게임을 시작하면 첫 3장을 제거한다.', () => {
    const action = { type: 'start' }
    const state = ['A', 'A', 6, 'K', 'Q']
    const expected = ['K', 'Q']
    expect(reducer(state, action)).toEqual(expected)
  })

  describe('카드를 뽑으면 덱에서 1장을 제거한다.', () => {
    test.each(['draw', 'double'])('%s', type => {
      const action = { type }
      const state = ['A', 2]
      const expected = [2]
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
