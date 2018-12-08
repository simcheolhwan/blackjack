import reducer from './bank'

describe('자금 리듀서', () => {
  test('카지노에 입장할 때 자금을 설정한다.', () => {
    const action = { type: 'enter', bank: 1000 }
    const state = undefined
    const expected = 1000
    expect(reducer(state, action)).toEqual(expected)
  })

  test('카지노에서 퇴장할 때 자금을 초기화한다.', () => {
    const action = { type: 'leave' }
    const state = 1
    const expected = 0
    expect(reducer(state, action)).toEqual(expected)
  })

  describe('플레이어 액션에 따라 자금이 바뀐다.', () => {
    test.each(['bet', 'double', 'split'])('%s', type => {
      const action = { type, turn: 0, bets: 1 }
      const state = 1000
      const expected = 999
      expect(reducer(state, action)).toEqual(expected)
    })
  })

  test('플레이어가 게임을 마칠 때 자금이 바뀐다.', () => {
    const action = { type: 'finish', amount: 2 }
    const state = 1000
    const expected = 1002
    expect(reducer(state, action)).toEqual(expected)
  })
})
