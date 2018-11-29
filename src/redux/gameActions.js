import Check from '../rules/check'
import getGameResult from '../rules/getGameResult'

export const initGame = () => bet('primary')

export const resetGame = () => (dispatch, getState) => {
  const getCoin = player => player.stake * getGameResult({ player, dealer })
  const reducer = (coin, player) => coin + getCoin(player)
  const { dealer, primary, replica } = getState().players
  const win = [primary, replica].reduce(reducer, 0)

  dispatch({ type: 'reset', player: 'dealer' })
  dispatch({ type: 'reset', player: 'primary' })
  dispatch({ type: 'reset', player: 'replica' })
  dispatch({ type: 'win', amount: win })
  dispatch(bet('primary'))
}

export const startGame = () => (dispatch, getState) => {
  const { players } = getState()
  dispatch({ type: 'start' })
  Array.from({ length: 2 - players['primary'].hand.length }).forEach(() =>
    dispatch(draw('primary'))
  )
  !players['dealer'].hand.length && dispatch(draw('dealer'))
}

export const stopGame = () => (dispatch, getState) => {
  dispatch({ type: 'stop' })
}

export const draw = playerKey => (dispatch, getState) => {
  const { deck, players } = getState()
  const player = players[playerKey]
  const card = deck[0]
  const hand = [...player.hand, card]

  dispatch({ type: 'draw', player: playerKey, hand })
  dispatch(watch(playerKey))
}

export const split = () => (dispatch, getState) => {
  const { players } = getState()
  const { hand, stake } = players['primary']
  const card = hand[0]
  dispatch({ type: 'hand', player: 'primary', hand: [card] })
  dispatch({ type: 'hand', player: 'replica', hand: [card] })
  dispatch({ type: 'bet', player: 'replica', stake })
}

const watch = playerKey => (dispatch, getState) => {
  const { players } = getState()
  const shouldStay =
    playerKey === 'dealer'
      ? Check.shouldDealerStay(players)
      : Check.shouldPlayerStay(players[playerKey])

  shouldStay && dispatch(setStatus(playerKey, 'stay'))
}

export const setStatus = (playerKey, status) => dispatch => {
  dispatch({ type: status, player: playerKey })
}

export const bet = (playerKey, stake = 5) => (dispatch, getState) => {
  const { players, coins } = getState()
  const nextStake = (players[playerKey].stake || 0) + stake
  const isValid = coins >= stake && nextStake >= 5
  isValid && dispatch({ type: 'bet', player: playerKey, stake })
}
