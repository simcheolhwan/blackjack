import fn from './dealer'

describe('딜러', () => {
  describe('드로우', () => {
    test('Dealer must draw to 16', () => {
      expect(fn([6]).must.draw).toBeTruthy()
      expect(fn([6, 10]).must.draw).toBeTruthy()
    })

    test('Dealer stands on soft 17', () => {
      expect(fn([7, 10]).must.draw).toBeFalsy()
      expect(fn(['A', 6]).must.draw).toBeFalsy()
      expect(fn(['A', 'A', 5]).must.draw).toBeFalsy()
      expect(fn([6, 10, 10]).must.draw).toBeFalsy()
    })
  })
})
