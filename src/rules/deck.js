const deck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const reducer = (accumulator, currentValue) => [
  ...accumulator,
  ...Array.from({ length: 4 }, _ => currentValue)
]

export default deck.reduce(reducer, [])
