import getResult from './getResult'

export const getCurrentPlayer = ({ primary, replica }) =>
  !!replica.hand.length && !!primary.status ? 'replica' : 'primary'

export default {
  hasGameFinished: players =>
    ['primary', 'replica']
      .filter(playerKey => players[playerKey].hand.length)
      .every(playerKey => getResult(players, playerKey))
}
