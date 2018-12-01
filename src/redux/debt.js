export default (state = 0, action) => {
  switch (action.type) {
    case 'lend':
      return state + action.amount

    case 'payback':
      return state - action.amount

    default:
      return state
  }
}
