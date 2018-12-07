export const start = () => (dispatch, getState) => {
  const { deck, turn } = getState()
  const player = [deck[0], deck[2]]
  const dealer = [deck[1]]
  dispatch({ type: 'start', turn, player, dealer })
}

export const finish = () => (dispatch, getState) => {
  const { bank } = getState()
  dispatch({ type: 'finish', payload: bank })
}
