import { UNIT } from "../rules/constants"

export default (games) => {
  const { length } = games
  const max = length ? Math.max(...games) : 0
  const summary = [length + " Games", "Best " + max * UNIT]

  return {
    summary: summary.join(" | "),
    games: games.map((n) => n * UNIT),
    max: max * UNIT,
  }
}
