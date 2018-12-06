import { games, trips } from './history'

describe('기록 리듀서', () => {
  describe('게임', () => {
    test('게임이 끝나면 기록을 전달받아 저장한다.', () => {
      const action = { type: 'finish', payload: 101 }
      const state = undefined
      const expected = [101]
      expect(games(state, action)).toEqual(expected)
    })
  })

  describe('여행', () => {
    test('여행이 끝나면 기록을 전달받아 저장한다.', () => {
      const action = { type: 'leave', payload: [150, 200] }
      const state = undefined
      const expected = [[150, 200]]
      expect(trips(state, action)).toEqual(expected)
    })
  })
})
