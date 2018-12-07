export const bet = bets => (dispatch, getState) => {
  const { turn } = getState()
  dispatch({ type: 'bet', turn: turn || 0, bets })
}

export const draw = () => (dispatch, getState) => {
  const { deck, turn } = getState()
  dispatch({ type: 'draw', turn, card: deck[0] })
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
  dispatch({ type: 'double', turn, bets: player[turn]['bets'], card: deck[0] })
}

export const split = () => (dispatch, getState) => {
  const { player, turn } = getState()
  dispatch({ type: 'split', turn, bets: player[turn]['bets'] })
}

export const surrender = () => (dispatch, getState) => {
  const { turn } = getState()
  dispatch({ type: 'surrender', turn })
}
