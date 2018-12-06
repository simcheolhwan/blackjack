import fn from './player'

describe('플레이어', () => {
  describe('H', () => {
    test('가능', () => {
      expect(fn({ player: [{ hand: [10, 2] }] }, 0).can.H).toBeTruthy()
    })

    describe('불가', () => {
      test('21', () => {
        expect(fn({ player: [{ hand: [8, 2, 'A'] }] }, 0).can.H).toBeFalsy()
      })

      test('블랙잭', () => {
        expect(fn({ player: [{ hand: ['A', 'K'] }] }, 0).can.H).toBeFalsy()
      })

      test('버스트', () => {
        expect(fn({ player: [{ hand: [10, 2, 10] }] }, 0).can.H).toBeFalsy()
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
    const player = [
      { hand: [6, 5], bet: 1 },
      { hand: [6, 5], bet: 2 },
      { hand: [6, 3, 2], bet: 1 },
      { hand: ['A'], bet: 1 }
    ]

    test('가능', () => {
      expect(fn({ player, bankroll: 1 }, 0).can.D).toBeTruthy()
    })

    describe('불가', () => {
      test('첫 두 장이 아님', () => {
        expect(fn({ player, bankroll: 1 }, 2).can.D).toBeFalsy()
        expect(fn({ player, bankroll: 1 }, 3).can.D).toBeFalsy()
      })

      test('칩이 충분하지 않음', () => {
        expect(fn({ player, bankroll: 1 }, 1).can.D).toBeFalsy()
      })
    })
  })

  describe('SP', () => {
    const player = [
      { hand: [8, 8], bet: 1 },
      { hand: [8, 8], bet: 2 },
      { hand: [10, 6], bet: 1 }
    ]

    test('가능', () => {
      expect(fn({ player, bankroll: 1 }, 0).can.SP).toBeTruthy()
    })

    describe('불가', () => {
      test('첫 두 장이 아님', () => {
        const hand = [8, 8, 2]
        expect(fn({ player: [{ hand }], bankroll: 1 }, 0).can.SP).toBeFalsy()
      })

      test('페어가 아님', () => {
        expect(fn({ player, bankroll: 1 }, 2).can.SP).toBeFalsy()
      })

      test('칩이 충분하지 않음', () => {
        expect(fn({ player, bankroll: 1 }, 1).can.SP).toBeFalsy()
      })

      test('Player can split to 4 hands', () => {
        const full = [...player, player[0]]
        expect(fn({ player: full, bankroll: 1 }, 3).can.SP).toBeFalsy()
      })

      test("Player can't resplit aces", () => {
        const aces = [{ hand: ['A', 'A'], bet: 1 }, { hand: ['A'], bet: 1 }]
        expect(fn({ player: aces, bankroll: 2 }, 0).can.SP).toBeFalsy()
      })
    })
  })

  describe('SU', () => {
    test('가능', () => {
      expect(fn({ player: [{ hand: [10, 6] }] }, 0).can.SU).toBeTruthy()
    })

    describe('불가', () => {
      test('첫 두 장이 아님', () => {
        expect(fn({ player: [{ hand: [10, 4, 2] }] }, 0).can.SU).toBeFalsy()
      })

      test('스플릿했음', () => {
        expect(fn({ player: [{ hand: [10, 6] }, {}] }, 0).can.SU).toBeFalsy()
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
