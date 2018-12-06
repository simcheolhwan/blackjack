import fn from './player'

describe('플레이어', () => {
  test('H', () => {
    expect(fn({ player: [{ hand: [10, 2] }] }, 0).can.H).toBeTruthy()
    expect(fn({ player: [{ hand: ['A', 'K'] }] }, 0).can.H).toBeFalsy()
    expect(fn({ player: [{ hand: [10, 2, 10] }] }, 0).can.H).toBeFalsy()

    // Player can't hit split aces
    const player = [{ hand: ['A', 2] }, { hand: ['A'] }]
    expect(fn({ player }, 0).can.H).toBeFalsy()
  })

  test('S', () => {
    expect(fn({ player: [{ hand: [] }] }, 0).can.S).toBeTruthy()
  })

  test('D', () => {
    const player = [
      { hand: [6, 5], bet: 1 },
      { hand: [6, 5], bet: 2 },
      { hand: [6, 3, 2], bet: 1 },
      { hand: ['A'], bet: 1 }
    ]

    expect(fn({ player, bankroll: 1 }, 0).can.D).toBeTruthy()
    expect(fn({ player, bankroll: 1 }, 1).can.D).toBeFalsy()
    expect(fn({ player, bankroll: 1 }, 2).can.D).toBeFalsy()
    expect(fn({ player, bankroll: 1 }, 3).can.D).toBeFalsy()
  })

  test('SP', () => {
    const player = [
      { hand: [8, 8], bet: 1 },
      { hand: [8, 8], bet: 2 },
      { hand: [10, 6], bet: 1 }
    ]

    expect(fn({ player, bankroll: 1 }, 0).can.SP).toBeTruthy()
    expect(fn({ player, bankroll: 1 }, 1).can.SP).toBeFalsy()
    expect(fn({ player, bankroll: 1 }, 2).can.SP).toBeFalsy()

    // Player can split to 4 hands
    const full = [...player, player[0]]
    expect(fn({ player: full, bankroll: 1 }, 3).can.SP).toBeFalsy()

    // Player can't resplit aces
    const aces = [{ bet: 1, hand: ['A', 'A'] }, { bet: 1, hand: ['A'] }]
    expect(fn({ player: aces, bankroll: 2 }, 0).can.SP).toBeFalsy()
  })

  test('SU', () => {
    expect(fn({ player: [{ hand: [10, 6] }] }, 0).can.SU).toBeTruthy()
    expect(fn({ player: [{ hand: [10, 4, 2] }] }, 0).can.SU).toBeFalsy()
    expect(fn({ player: [{ hand: [10, 4, 2] }] }, 0).can.SU).toBeFalsy()
    expect(fn({ player: [{ hand: [10, 6] }, {}] }, 0).can.SU).toBeFalsy()
  })
})
