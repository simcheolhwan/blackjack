export default (state = 100, action) => {
  switch (action.type) {
    case 'bet':
      return state - action.stake

    case 'win':
      return state + action.amount

    default:
      return state
  }
}
