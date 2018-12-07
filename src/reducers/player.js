export default (state = [], action) => {
  const round = (state = { hand: [], bet: 0 }, turn) => {
    const f = callback =>
      turn === action.turn ? { ...state, ...callback(state) } : state

    switch (action.type) {
      case 'start':
        return f(({ hand }) => ({ hand: action.player }))

      case 'bet':
        return f(({ bet }) => ({ bet: bet + action.amount }))

      case 'draw':
        return f(({ hand }) => ({ hand: [...hand, action.card] }))

      case 'double':
        return f(({ hand, bet }) => ({
          hand: [...hand, action.card],
          bet: bet * 2
        }))

      case 'split':
        return f(({ hand }) => ({ hand: [hand[0]] }))

      default:
        return state
    }
  }

  switch (action.type) {
    case 'start':
      return [round(state[0], 0)]

    case 'finish':
      return [round()]

    case 'bet':
    case 'draw':
    case 'double':
      return state.map(round)

    case 'split':
      return [...state.map(round), round(state[action.turn], action.turn)]

    default:
      return state
  }
}
