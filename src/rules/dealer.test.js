import fn from './dealer'

describe('딜러', () => {
  test('드로우', () => {
    expect(fn([6]).must.draw).toBeTruthy()
    expect(fn([6, 10]).must.draw).toBeTruthy()
    expect(fn([7, 10]).must.draw).toBeFalsy()
    expect(fn(['A', 6]).must.draw).toBeFalsy()
  })
})
