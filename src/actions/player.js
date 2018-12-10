export const bet = bets => (dispatch, getState) => {
  const { turn } = getState()
  dispatch({ type: 'bet', turn: turn || 0, bets })
}

export const bust = () => (dispatch, getState) => {
  const { turn } = getState()
  dispatch({ type: 'bust', turn })
}

export const hit = () => (dispatch, getState) => {
  const { deck, turn } = getState()
  dispatch({ type: 'hit', turn, card: deck[0] })
}

export const stay = () => (dispatch, getState) => {
  const { turn } = getState()
  dispatch({ type: 'stay', turn })
}

export const double = () => (dispatch, getState) => {
  const { deck, player, turn } = getState()
  const { bets } = player[turn]
  dispatch({ type: 'double', turn, bets, card: deck[0] })
}

export const split = () => (dispatch, getState) => {
  const { player, turn } = getState()
  const { bets } = player[turn]
  dispatch({ type: 'split', turn, bets })
}

export const surrender = () => (dispatch, getState) => {
  const { turn } = getState()
  dispatch({ type: 'surrender', turn })
}
