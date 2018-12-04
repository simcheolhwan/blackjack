import getStatus from '../rules/getStatus'
import { getTotalReturn } from '../rules/getResult'
import { UNIT } from '../constants'

/* Trip */
export const enter = () => dispatch => {
  dispatch(resetChips())
}

export const leave = () => (dispatch, getState) => {
  const { history } = getState()
  dispatch(resetGame('trips', history))
}

/* Game */
export const startGame = () => (dispatch, getState) => {
  const { players } = getState()
  dispatch({ type: 'start' })
  Array.from({ length: 2 - players['primary'].hand.length }).forEach(() =>
    dispatch(draw('primary'))
  )
  !players['dealer'].hand.length && dispatch(draw('dealer'))
}

export const resetGame = (name = 'history', history) => {
  return (dispatch, getState) => {
    const { players, chips, debt } = getState()
    const payload = history || { players, chips, debt }
    history && dispatch({ type: 'clear', name: 'history' })
    dispatch({ type: 'record', name, payload })
    dispatch({ type: 'reset', name: 'dealer' })
    dispatch({ type: 'reset', name: 'primary' })
    dispatch({ type: 'reset', name: 'replica' })
  }
}

/* Bet */
export const bet = (playerKey, stake = UNIT) => (dispatch, getState) => {
  const { chips } = getState()
  const isValid = chips >= stake
  isValid && dispatch({ type: 'bet', name: playerKey, stake })
}

export const win = () => (dispatch, getState) => {
  const { players } = getState()
  dispatch({ type: 'win', amount: getTotalReturn(players) })
}

export const lend = () => ({ type: 'lend' })
export const payback = () => ({ type: 'payback' })
export const resetChips = () => ({ type: 'chips/reset' })

/* Player */
export const draw = playerKey => (dispatch, getState) => {
  const { deck, players } = getState()
  const player = players[playerKey]
  const card = deck[0]
  const hand = [...player.hand, card]
  dispatch({ type: 'draw', name: playerKey, hand })
  dispatch(watchPlayer(playerKey))
}

export const set = (playerKey, status) => (dispatch, getState) => {
  dispatch({ type: status, name: playerKey })
}

export const double = playerKey => (dispatch, getState) => {
  const { players } = getState()
  dispatch(bet(playerKey, players[playerKey].stake))
  dispatch(set(playerKey, 'stay'))
  dispatch(draw(playerKey))
}

export const split = () => (dispatch, getState) => {
  const { players } = getState()
  const { hand, stake } = players['primary']
  const card = hand[0]
  dispatch({ type: 'hand', name: 'primary', hand: [card] })
  dispatch({ type: 'hand', name: 'replica', hand: [card] })
  dispatch({ type: 'bet', name: 'replica', stake })
}

/* Watch */
const watchPlayer = playerKey => (dispatch, getState) => {
  const { players } = getState()
  const status = getStatus(players, playerKey)
  status && dispatch(set(playerKey, status))
}
