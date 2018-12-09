import testReducer from '../helpers/testReducer'
import reducer from './dealer'

describe('딜러 리듀서', () => {
  test.each`
    action                                  | state        | expected
    ${{ type: 'start', dealer: [6] }}       | ${undefined} | ${[6]}
    ${{ type: 'finish' }}                   | ${[10, 7]}   | ${[]}
    ${{ type: 'draw', card: 10 }}           | ${[6]}       | ${[6, 10]}
    ${{ type: 'draw', turn: 0, card: 'A' }} | ${[10]}      | ${[10]}
  `('$action.type', testReducer(reducer))
})
