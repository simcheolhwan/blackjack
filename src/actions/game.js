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

  const initialBets = player[0]['bets'] / (Number(!!player[0]['double']) + 1)
  const totalBets = player.reduce((sum, { bets }) => sum + bets, 0)
  const totalReturn = prize + totalBets
  const nextBank = bank + totalReturn

  dispatch({
    type: 'finish',
    amount: totalReturn - initialBets, // 이만큼 내 자금에 더한다
    bets: initialBets, // 이만큼 새로 베팅한다
    bank: nextBank // 이만큼 기록한다
  })
}
