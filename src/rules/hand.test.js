import h from "./hand"

const testHand = ({ hand, totals, blackjack, bust }) => {
  expect(h(hand).totals).toEqual(totals)
  typeof blackjack === "boolean" && expect(h(hand).blackjack).toBe(blackjack)
  typeof bust === "boolean" && expect(h(hand).bust).toBe(bust)
}

describe("핸드", () => {
  test("undefined", () => {
    const { totals, blackjack, bust } = h([])
    expect(totals).toEqual([])
    expect(blackjack).toBe(undefined)
    expect(bust).toBe(undefined)
  })

  describe("블랙잭", () => {
    test.each`
      hand           | totals  | blackjack
      ${["A", 10]}   | ${[21]} | ${true}
      ${["A", "K"]}  | ${[21]} | ${true}
      ${["A", 8, 2]} | ${[21]} | ${false}
    `("$hand", testHand)
  })

  describe("하드 토탈", () => {
    test.each`
      hand            | totals  | bust
      ${[10, 9]}      | ${[19]} | ${false}
      ${["J", 2, 10]} | ${[22]} | ${true}
    `("$hand", testHand)
  })

  describe("소프트 토탈", () => {
    test.each`
      hand                                 | totals
      ${["A"]}                             | ${[1, 11]}
      ${["A", "A"]}                        | ${[2, 12]}
      ${["A", 2]}                          | ${[3, 13]}
      ${["A", 2, "A"]}                     | ${[4, 14]}
      ${["A", 2, "A", "A"]}                | ${[5, 15]}
      ${["A", 2, "A", "A", "A"]}           | ${[6, 16]}
      ${["A", 2, "A", "A", "A", "A"]}      | ${[7, 17]}
      ${["A", 2, "A", "A", "A", "A", "A"]} | ${[8, 18]}
      ${["A", 2, 8]}                       | ${[21]}
      ${["A", 2, 9]}                       | ${[12]}
    `("$hand", testHand)
  })
})
