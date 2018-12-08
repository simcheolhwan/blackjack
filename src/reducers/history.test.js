import { games, trips } from './history'

describe('기록 리듀서', () => {
  describe('게임', () => {
    test('게임이 끝나면 기록을 전달받아 저장한다.', () => {
      const action = { type: 'finish', bank: 101 }
      const state = undefined
      const expected = [101]
      expect(games(state, action)).toEqual(expected)
    })
  })

  describe('여행', () => {
    test('여행이 끝나면 기록을 전달받아 저장한다.', () => {
      const action = { type: 'leave', games: [150, 200] }
      const state = undefined
      const expected = [[150, 200]]
      expect(trips(state, action)).toEqual(expected)
    })

    test('전달받은 배열이 비어있으면 저장하지 않는다.', () => {
      const action = { type: 'leave', games: [] }
      const state = [[150, 200]]
      const expected = [[150, 200]]
      expect(trips(state, action)).toEqual(expected)
    })
  })
})
