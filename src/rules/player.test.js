import fn from './player'

describe('플레이어', () => {
  describe('H', () => {
    test('가능', () => {
      expect(fn({ player: [{ hand: [10, 2] }] }, 0).can.H).toBeTruthy()
    })

    describe('불가', () => {
      test.each`
        name           | hand
        ${'must draw'} | ${[8]}
        ${'21'}        | ${[8, 2, 'A']}
        ${'blackjack'} | ${['A', 'K']}
        ${'bust'}      | ${[10, 2, 10]}
      `('$name', ({ hand }) => {
        expect(fn({ player: [{ hand }] }, 0).can.H).toBeFalsy()
      })

      describe("Player can't hit split aces", () => {
        test('Hand 1', () => {
          const player = [{ hand: ['A', 2] }, { hand: ['A'] }]
          expect(fn({ player }, 0).can.H).toBeFalsy()
        })

        test('Hand 2', () => {
          const player = [{ hand: ['A', 'K'] }, { hand: ['A', 9] }]
          expect(fn({ player }, 1).can.H).toBeFalsy()
        })
      })
    })
  })

  describe('S', () => {
    test('가능', () => {
      expect(fn({ player: [{ hand: ['A', 'A'] }] }, 0).can.S).toBeTruthy()
    })

    test('불가', () => {
      expect(fn({ player: [{ hand: [8] }] }, 0).can.S).toBeFalsy()
      expect(fn({ player: [{ hand: ['A', 'K'] }] }, 0).can.S).toBeFalsy()
    })
  })

  describe('D', () => {
    test('가능', () => {
      const player = [{ hand: [6, 5], bets: 1 }]
      expect(fn({ player, bank: 1 }, 0).can.D).toBeTruthy()
    })

    describe('불가', () => {
      test.each`
        name             | game
        ${'Not initial'} | ${{ player: [{ hand: ['A'], bets: 1 }], bank: 1 }}
        ${'Not initial'} | ${{ player: [{ hand: [6, 3, 2], bets: 1 }], bank: 1 }}
        ${'Not enough'}  | ${{ player: [{ hand: [6, 5], bets: 2 }], bank: 1 }}
      `('$name', ({ game }) => {
        expect(fn(game, 0).can.D).toBeFalsy()
      })

      describe("Player can't hit split aces", () => {
        test('Hand 1', () => {
          const player = [{ hand: ['A', 2], bets: 2 }, { hand: ['A'] }]
          expect(fn({ player, bank: 2 }, 0).can.D).toBeFalsy()
        })

        test('Hand 2', () => {
          const player = [{ hand: ['A', 'K'] }, { hand: ['A', 9], bets: 2 }]
          expect(fn({ player, bank: 2 }, 1).can.D).toBeFalsy()
        })
      })
    })
  })

  describe('SP', () => {
    test('가능', () => {
      const player = [{ hand: [8, 8], bets: 1 }, { hand: [8, 8], bets: 2 }]
      expect(fn({ player, bank: 1 }, 0).can.SP).toBeTruthy()
    })

    describe('불가', () => {
      test.each`
        name             | game
        ${'Not initial'} | ${{ player: [{ hand: [8, 8, 2], bets: 1 }], bank: 1 }}
        ${'Not a pair'}  | ${{ player: [{ hand: [8, 6], bets: 1 }], bank: 1 }}
        ${'Not enough'}  | ${{ player: [{ hand: [8, 8], bets: 2 }], bank: 1 }}
      `('$name', ({ game }) => {
        expect(fn(game, 0).can.SP).toBeFalsy()
      })

      test('Player can split to 4 hands', () => {
        const player = [
          { hand: [8, 3, 10], bets: 1 },
          { hand: [8, 3, 10], bets: 1 },
          { hand: [8, 3, 10], bets: 1 },
          { hand: [8, 8], bets: 1 }
        ]
        expect(fn({ player, bank: 1 }, 3).can.SP).toBeFalsy()
      })

      test("Player can't resplit aces", () => {
        const player = [{ hand: ['A', 'A'], bets: 1 }, { hand: ['A'], bets: 1 }]
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
        ${'21'}          | ${{ player: [{ hand: ['A', 'K'] }], bank: 1 }}
      `('$name', ({ game }) => {
        expect(fn(game, 0).can.SU).toBeFalsy()
      })
    })
  })

  describe('must', () => {
    test('draw', () => {
      expect(fn({ player: [{ hand: ['A'] }] }, 0).must.draw).toBeTruthy()
      expect(fn({ player: [{ hand: ['A', 2] }] }, 0).must.draw).toBeFalsy()
      expect(fn({ player: [{ hand: ['A', 'K'] }] }, 0).must.draw).toBeFalsy()
    })
  })
})
