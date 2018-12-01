import getDeck from './getDeck'

test('덱의 개수', () => {
  expect(getDeck(1).length).toBe(52 * 1)
  expect(getDeck(4).length).toBe(52 * 4)
})
