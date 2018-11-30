import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check, { getCurrentPlayer } from '../rules/check'
import colors from '../styles/colors'
import Table from '../components/Table'
import Player from './Player'
import Actions from './Actions'
import Chips from './Chips'
import ButtonGroup from '../components/ButtonGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ players, game }, { startGame, resetGame, win, draw }) => {
    const { primary, replica } = players
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

    return {
      dealer: <Player playerKey="dealer" />,
      primary: <Player playerKey="primary" />,
      replica: !!replica.hand.length && <Player playerKey="replica" />,
      actions: <Actions playerKey={getCurrentPlayer(players)} />,
      chips: <Chips />,
      controls: <ButtonGroup buttons={controls} />
    }
  }
)(Table)
