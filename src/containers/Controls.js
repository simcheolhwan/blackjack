import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check from '../rules/check'
import colors from '../styles/colors'
import ButtonGroup from '../components/ButtonGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ players, game }, { startGame, resetGame, win, draw }) => {
    const { primary } = players
    const finishGame = () => {
      win()
      resetGame()
    }

    const controls = game.isPlaying
      ? [
          check.hasGameFinished(players)
            ? {
                color: colors['navy'],
                children: '←',
                onClick: finishGame
              }
            : {
                color: colors['navy'],
                children: '→',
                disabled: !check.shouldDealerDraw(players),
                onClick: () => draw('dealer')
              }
        ]
      : [
          {
            color: colors['navy'],
            children: '→',
            disabled: !primary.stake,
            onClick: startGame
          }
        ]

    return { buttons: controls }
  }
)(ButtonGroup)
