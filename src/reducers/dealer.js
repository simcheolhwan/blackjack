export default (state = [], action) => {
  switch (action.type) {
    case 'start':
      return action.dealer

    case 'draw':
      return Number.isInteger(action.turn) ? state : [...state, action.card]

    default:
      return state
  }
}
