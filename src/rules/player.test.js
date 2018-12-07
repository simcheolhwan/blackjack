import fn from './player'

describe('플레이어', () => {
  describe('H', () => {
    test('가능', () => {
      expect(fn({ player: [{ hand: [10, 2] }] }, 0).can.H).toBeTruthy()
    })

    describe('불가', () => {
      test.each`
        name           | hand
        ${'21'}        | ${[8, 2, 'A']}
        ${'blackjack'} | ${['A', 'K']}
        ${'bust'}      | ${[10, 2, 10]}
      `('$name', ({ hand }) => {
        expect(fn({ player: [{ hand }] }, 0).can.H).toBeFalsy()
      })

      test("Player can't hit split aces", () => {
        const player = [{ hand: ['A', 2] }, { hand: ['A'] }]
        expect(fn({ player }, 0).can.H).toBeFalsy()
      })
    })
  })

  test('S', () => {
    // 언제나 가능
    expect(fn({ player: [{ hand: [] }] }, 0).can.S).toBeTruthy()
  })

  describe('D', () => {
    test('가능', () => {
      const player = [{ hand: [6, 5], bet: 1 }]
      expect(fn({ player, bank: 1 }, 0).can.D).toBeTruthy()
    })

    describe('불가', () => {
      test.each`
        name             | game
        ${'Not initial'} | ${{ player: [{ hand: ['A'], bet: 1 }], bank: 1 }}
        ${'Not initial'} | ${{ player: [{ hand: [6, 3, 2], bet: 1 }], bank: 1 }}
        ${'Not enough'}  | ${{ player: [{ hand: [6, 5], bet: 2 }], bank: 1 }}
      `('$name', ({ game }) => {
        expect(fn(game, 0).can.D).toBeFalsy()
      })
    })
  })

  describe('SP', () => {
    test('가능', () => {
      const player = [{ hand: [8, 8], bet: 1 }, { hand: [8, 8], bet: 2 }]
      expect(fn({ player, bank: 1 }, 0).can.SP).toBeTruthy()
    })

    describe('불가', () => {
      test.each`
        name             | game
        ${'Not initial'} | ${{ player: [{ hand: [8, 8, 2], bet: 1 }], bank: 1 }}
        ${'Not a pair'}  | ${{ player: [{ hand: [8, 6], bet: 1 }], bank: 1 }}
        ${'Not enough'}  | ${{ player: [{ hand: [8, 8], bet: 2 }], bank: 1 }}
      `('$name', ({ game }) => {
        expect(fn(game, 0).can.SP).toBeFalsy()
      })

      test('Player can split to 4 hands', () => {
        const player = [
          { hand: [8, 3, 10], bet: 1 },
          { hand: [8, 3, 10], bet: 1 },
          { hand: [8, 3, 10], bet: 1 },
          { hand: [8, 8], bet: 1 }
        ]
        expect(fn({ player, bank: 1 }, 3).can.SP).toBeFalsy()
      })

      test("Player can't resplit aces", () => {
        const player = [{ hand: ['A', 'A'], bet: 1 }, { hand: ['A'], bet: 1 }]
        expect(fn({ player, bank: 2 }, 0).can.SP).toBeFalsy()
      })
    })
  })

  describe('SU', () => {
    test('가능', () => {
      expect(fn({ player: [{ hand: [10, 6] }] }, 0).can.SU).toBeTruthy()
    })

    describe('불가', () => {
      test.each`
        name             | game
        ${'Not initial'} | ${{ player: [{ hand: [10, 4, 2] }], bank: 1 }}
        ${'Split'}       | ${{ player: [{ hand: [10, 6] }, {}] }}
      `('$name', ({ game }) => {
        expect(fn(game, 0).can.SU).toBeFalsy()
      })
    })
  })

  describe('must', () => {
    test('draw', () => {
      expect(fn({ player: [{ hand: ['A'] }] }, 0).must.draw).toBeTruthy()
      expect(fn({ player: [{ hand: ['A', 'K'] }] }, 0).must.draw).toBeFalsy()
    })
  })
})
