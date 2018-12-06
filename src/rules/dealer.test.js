import fn from './dealer'

describe('딜러', () => {
  test('드로우', () => {
    // Dealer must draw to 16
    expect(fn([6]).must.draw).toBeTruthy()
    expect(fn([6, 10]).must.draw).toBeTruthy()

    // Dealer stands on soft 17
    expect(fn([7, 10]).must.draw).toBeFalsy()
    expect(fn(['A', 6]).must.draw).toBeFalsy()
  })
})
