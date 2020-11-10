const initial = { hand: [], bets: 0 }
export default (state = [initial], action) => {
  const round = (state = initial, turn) => {
    const f = (callback) =>
      turn === action.turn ? { ...state, ...callback(state) } : state

    switch (action.type) {
      case "start":
        return f(() => ({ hand: action.player }))

      case "finish":
        return f(() => ({ bets: action.bets }))

      case "bet":
        return f(({ bets }) => ({ bets: bets + action.bets }))

      case "draw":
      case "hit":
        return f(({ hand }) => ({ hand: [...hand, action.card] }))

      case "double":
        return f(({ hand, bets }) => ({
          hand: [...hand, action.card],
          bets: bets * 2,
          double: true,
        }))

      case "split":
        return f(({ hand }) => ({ hand: [hand[0]] }))

      case "surrender":
        return f(() => ({ surrender: true }))

      default:
        return state
    }
  }

  switch (action.type) {
    case "start":
      return [round(state[0], 0)]

    case "finish":
    case "leave":
      return [round()]

    case "bet":
    case "hit":
    case "draw":
    case "double":
    case "surrender":
      return state.map(round)

    case "split":
      return [...state.map(round), round(state[action.turn], action.turn)]

    default:
      return state
  }
}
