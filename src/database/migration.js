import { UNIT } from '../rules/constants'
export default ({ chips, debt, history, trips }) => {
  const migrateGames = array => array.map(({ chips }) => chips / UNIT)
  const bank = (chips - debt) / UNIT
  return {
    v: 2,
    bank: bank >= 0 ? bank : 0,
    history: { games: migrateGames(history), trips: trips.map(migrateGames) }
  }
}
