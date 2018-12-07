import g from '../rules/game'

export const bet = amount => (dispatch, getState) => {
  const { turn } = getState()
  dispatch({ type: 'bet', turn, amount })
}

export const draw = () => (dispatch, getState) => {
  const { deck, turn } = getState()
  dispatch({ type: 'draw', turn, card: deck[0] })
}

export const double = () => (dispatch, getState) => {
  const { deck, player, turn } = getState()
  dispatch({ type: 'double', turn, bets: player[turn]['bets'], card: deck[0] })
}

export const split = () => (dispatch, getState) => {
  const { player, turn } = getState()
  dispatch({ type: 'split', turn, bets: player[turn]['bets'] })
}

export const win = () => (dispatch, getState) => {
  const { prize } = g(getState())
  dispatch({ type: 'win', amount: prize })
}
