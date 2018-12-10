import { UNIT } from '../rules/constants'

export default ({ chips, debt, history, trips }) => {
  const migrateGames = array => array.map(({ chips }) => chips / UNIT)
  const bank = (chips - debt) / UNIT

  return {
    bank: bank >= 0 ? bank : 0, // 빚이 자금보다 많았다면, 0으로 초기화한다.
    history: { games: migrateGames(history), trips: trips.map(migrateGames) },
    v: 2
  }
}
