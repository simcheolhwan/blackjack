export default (state = null, action) => {
  switch (action.type) {
    case 'start':
      return 0

    case 'finish':
      return null

    case 'bust':
    case 'stay':
    case 'double':
    case 'surrender':
      return state + 1

    default:
      return state
  }
}
