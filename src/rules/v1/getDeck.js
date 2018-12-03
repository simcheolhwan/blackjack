const deck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const concat = (acc, cur) => [...acc, ...cur]
export default n => Array.from({ length: n * 4 }, () => deck).reduce(concat, [])
