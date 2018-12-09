import fn from './player'

const cases = {
  H: [
    { player: [{ hand: [10, 2] }], can: true },
    { player: [{ hand: [8] }] }, // must draw
    { player: [{ hand: [8, 2, 'A'] }] }, // 21
    { player: [{ hand: ['A', 'K'] }] }, // blackjack
    { player: [{ hand: [10, 2, 10] }] }, // bust
    { player: [{ hand: ['A', 2] }, { hand: ['A'] }] }, // Player can't hit split aces
    { player: [{ hand: ['A', 'K'] }, { hand: ['A', 9] }], turn: 1 } // Player can't hit split aces
  ],

  S: [
    { player: [{ hand: ['A', 'A'] }], can: true },
    { player: [{ hand: [8] }] },
    { player: [{ hand: ['A', 'K'] }] }
  ],

  D: [
    { player: [{ hand: [6, 5], bets: 1 }], bank: 1, can: true },
    { player: [{ hand: ['A'], bets: 1 }], bank: 1 }, // Not initial
    { player: [{ hand: [6, 3, 2], bets: 1 }], bank: 1 }, // Not initial
    { player: [{ hand: [6, 5], bets: 2 }], bank: 1 }, // Not enough
    {
      player: [{ hand: ['A', 2], bets: 2 }, { hand: ['A'] }],
      bank: 2,
      turn: 0
    }, // Player can't hit split aces
    {
      player: [{ hand: ['A', 'K'] }, { hand: ['A', 9], bets: 2 }],
      bank: 2,
      turn: 1
    } // Player can't hit split aces
  ],

  SP: [
    {
      player: [{ hand: [8, 8], bets: 1 }, { hand: [8, 8], bets: 2 }],
      bank: 1,
      turn: 0,
      can: true
    },
    { player: [{ hand: [8, 8, 2], bets: 1 }], bank: 1 }, // Not initial
    { player: [{ hand: [8, 6], bets: 1 }], bank: 1 }, // Not a pair
    { player: [{ hand: [8, 8], bets: 2 }], bank: 1 }, // Not enough
    {
      player: [
        { hand: [8, 3, 10], bets: 1 },
        { hand: [8, 3, 10], bets: 1 },
        { hand: [8, 3, 10], bets: 1 },
        { hand: [8, 8], bets: 1 }
      ],
      bank: 1,
      turn: 3
    }, // Player can split to 4 hands
    {
      player: [{ hand: ['A', 'A'], bets: 1 }, { hand: ['A'], bets: 1 }],
      bank: 2,
      turn: 0
    } // Player can't resplit aces
  ],

  SU: [
    { player: [{ hand: [10, 6] }], can: true },
    { player: [{ hand: [10, 4, 2] }], bank: 1, turn: 0 }, // Not initial
    { player: [{ hand: [9, 7] }, { hand: [9] }], bank: 1, turn: 0 }, // Split
    { player: [{ hand: ['A', 'K'] }], bank: 1, turn: 0 } // 21
  ]
}

describe('플레이어', () => {
  Object.entries(cases).forEach(([action, list]) =>
    describe(action, () => {
      test.each(list)('%#', ({ can = false, turn = 0, ...rest }) => {
        expect(fn({ ...rest, turn }).can[action]).toBe(can)
      })
    })
  )

  describe('must', () => {
    test.each`
      hand          | expected
      ${['A']}      | ${true}
      ${['A', 2]}   | ${false}
      ${['A', 'K']} | ${false}
    `('draw', ({ hand, expected }) => {
      expect(fn({ player: [{ hand }], turn: 0 }).must.draw).toBe(expected)
    })
  })
})
