import migrate from "./migrate"

test("v2로 마이그레이션", () => {
  expect(migrate(input)).toEqual(expected)
})

const expected = {
  v: 2,
  bank: 21,
  history: { games: [23], trips: [[18, 18, 20]] },
}

const input = {
  chips: 105,
  debt: 0,
  history: [
    {
      players: {
        dealer: { hand: ["Q", 5], status: "", stake: 0 },
        primary: { hand: ["A", "K"], status: "blackjack", stake: 10 },
        replica: { hand: [], status: "", stake: 0 },
      },
      chips: 115,
      debt: 0,
    },
  ],
  trips: [
    [
      {
        players: {
          dealer: { hand: ["A"], status: "", stake: 0 },
          primary: { hand: ["J", 5, 7], status: "bust", stake: 10 },
          replica: { hand: [], status: "", stake: 0 },
        },
        chips: 90,
        debt: 0,
      },
      {
        players: {
          dealer: { hand: [4, 8, 8], status: "stay", stake: 0 },
          primary: { hand: [10, "J"], status: "stay", stake: 10 },
          replica: { hand: [], status: "", stake: 0 },
        },
        chips: 90,
        debt: 0,
      },
      {
        players: {
          dealer: { hand: [8, 5, "K"], status: "bust", stake: 0 },
          primary: { hand: [9, "A"], status: "stay", stake: 10 },
          replica: { hand: [], status: "", stake: 0 },
        },
        chips: 100,
        debt: 0,
      },
    ],
  ],
}
