import getStatus from '../rules/getStatus'
import { getTotalReturn } from '../rules/getResult'
import { MIN } from '../constants'

/* Game */
export const startGame = () => (dispatch, getState) => {
  const { players } = getState()
  dispatch({ type: 'start' })
  Array.from({ length: 2 - players['primary'].hand.length }).forEach(() =>
    dispatch(draw('primary'))
  )
  !players['dealer'].hand.length && dispatch(draw('dealer'))
}

export const resetGame = () => (dispatch, getState) => {
  dispatch({ type: 'reset', player: 'dealer' })
  dispatch({ type: 'reset', player: 'primary' })
  dispatch({ type: 'reset', player: 'replica' })
}

/* Bet */
export const bet = (playerKey, stake = MIN) => (dispatch, getState) => {
  const { coins } = getState()
  const isValid = coins >= stake
  isValid && dispatch({ type: 'bet', player: playerKey, stake })
}

export const win = () => (dispatch, getState) => {
  const { players } = getState()
  dispatch({ type: 'win', amount: getTotalReturn(players) })
}

/* Player */
export const draw = playerKey => (dispatch, getState) => {
  const { deck, players } = getState()
  const player = players[playerKey]
  const card = deck[0]
  const hand = [...player.hand, card]
  dispatch({ type: 'draw', player: playerKey, hand })
  dispatch(watchPlayer(playerKey))
}

export const set = (playerKey, status) => (dispatch, getState) => {
  dispatch({ type: status, player: playerKey })
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
  dispatch({ type: 'hand', player: 'primary', hand: [card] })
  dispatch({ type: 'hand', player: 'replica', hand: [card] })
  dispatch({ type: 'bet', player: 'replica', stake })
}

/* Watch */
const watchPlayer = playerKey => (dispatch, getState) => {
  const { players } = getState()
  const status = getStatus(players, playerKey)
  status && dispatch(set(playerKey, status))
}
