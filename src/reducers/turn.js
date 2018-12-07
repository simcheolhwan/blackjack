export default (state = 0, action) => {
  switch (action.type) {
    case 'start':
      return 0

    case 'stay':
    case 'double':
      return state + 1

    default:
      return state
  }
}
