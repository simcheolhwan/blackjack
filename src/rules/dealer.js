import h from './hand'

export default dealer => ({
  must: { draw: h(dealer).totals.every(n => n <= 16) }
})
