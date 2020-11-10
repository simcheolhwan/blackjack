import h from "./hand"

export default (dealer = []) => ({
  must: { draw: dealer.length && h(dealer).totals.every((n) => n <= 16) },
})
