import testReducer from '../helpers/testReducer'
import { games, trips } from './history'

describe('기록 리듀서', () => {
  test.each`
    action                           | state        | expected
    ${{ type: 'finish', bank: 101 }} | ${undefined} | ${[101]}
  `('$action.type', testReducer(games))

  test.each`
    action                                  | state           | expected
    ${{ type: 'leave', games: [150, 200] }} | ${undefined}    | ${[[150, 200]]}
    ${{ type: 'leave', games: [] }}         | ${[[150, 200]]} | ${[[150, 200]]}
  `('$action.type', testReducer(trips))
})
