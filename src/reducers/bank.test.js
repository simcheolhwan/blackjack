import testReducer from '../helpers/testReducer'
import reducer from './bank'

describe('자금 리듀서', () => {
  test.each`
    action                           | state        | expected
    ${{ type: 'enter', bank: 1000 }} | ${undefined} | ${1000}
    ${{ type: 'leave' }}             | ${1}         | ${0}
    ${{ type: 'bet', bets: 1 }}      | ${1000}      | ${999}
    ${{ type: 'double', bets: 1 }}   | ${1000}      | ${999}
    ${{ type: 'split', bets: 1 }}    | ${1000}      | ${999}
    ${{ type: 'finish', amount: 2 }} | ${1000}      | ${1002}
  `('$action.type', testReducer(reducer))
})
