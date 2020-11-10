import testDeck from "../database/testDeck"
import { shuffleDeck } from "../rules/deck"

export default (state = [], action) => {
  switch (action.type) {
    case "start":
      return state.slice(3)

    case "enter":
    case "finish":
      return [...testDeck(), ...shuffleDeck()]

    case "draw":
    case "hit":
    case "double":
      return state.slice(1)

    default:
      return state
  }
}
