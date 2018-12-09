import fn from './dealer'

describe('딜러', () => {
  describe('드로우', () => {
    const mustDraw = ({ dealer, result }) => {
      expect(fn(dealer).must.draw).toBe(result)
    }

    describe('Dealer must draw to 16', () => {
      test.each`
        dealer     | result
        ${[6]}     | ${true}
        ${[6, 10]} | ${true}
      `('$dealer', mustDraw)
    })

    describe('Dealer stands on soft 17', () => {
      test.each`
        dealer           | result
        ${[7, 10]}       | ${false}
        ${['A', 6]}      | ${false}
        ${['A', 'A', 5]} | ${false}
        ${[6, 10, 10]}   | ${false}
      `('$dealer', mustDraw)
    })
  })
})
