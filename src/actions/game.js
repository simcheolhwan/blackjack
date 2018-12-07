import g from '../rules/game'

export const start = () => (dispatch, getState) => {
  const start = () => {
    const { deck, turn } = getState()
    const player = [deck[0], deck[2]]
    const dealer = [deck[1]]
    return { type: 'start', turn: turn || 0, player, dealer }
  }

  dispatch({ type: 'shuffle' })
  dispatch(start())
}

export const finish = () => (dispatch, getState) => {
  const { player, dealer, bank, turn } = getState()
  const { prize } = g({ player, dealer, turn })
  const bets = player.reduce((sum, { bets }) => sum + bets, 0)
  const amount = prize + bets
  dispatch({ type: 'finish', amount, bank: bank + amount })
}
