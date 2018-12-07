export default (state = null, action) => {
  switch (action.type) {
    case 'start':
      return 0

    case 'stay':
    case 'double':
    case 'surrender':
      return state + 1

    default:
      return state
  }
}
