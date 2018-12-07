import reducer from './turn'

describe('턴 리듀서', () => {
  test('초기 상태', () => {
    const action = {}
    const state = undefined
    const expected = null
    expect(reducer(state, action)).toEqual(expected)
  })

  test('게임을 시작할 때 첫 차례로 설정한다.', () => {
    const action = { type: 'start' }
    const state = null
    const expected = 0
    expect(reducer(state, action)).toEqual(expected)
  })

  describe('플레이어 액션에 따라 턴이 다음으로 넘어간다.', () => {
    test.each(['stay', 'double', 'surrender'])('%s', type => {
      const action = { type }
      const state = 0
      const expected = 1
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
