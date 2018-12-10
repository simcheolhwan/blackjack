import testReducer from '../helpers/testReducer'
import reducer from './deck'

describe('덱 리듀서', () => {
  test.each`
    action                | state                      | expected
    ${{ type: 'start' }}  | ${['A', 'A', 6, 'K', 'Q']} | ${['K', 'Q']}
    ${{ type: 'hit' }}    | ${['A', 2]}                | ${[2]}
    ${{ type: 'draw' }}   | ${['A', 2]}                | ${[2]}
    ${{ type: 'double' }} | ${['A', 2]}                | ${[2]}
  `('$action.type', testReducer(reducer))

  test.each(['enter', 'finish'])('%s', type => {
    const action = { type }
    const state = []
    expect(reducer(state, action).length).not.toBe(0)
  })
})
