import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check from '../rules/check'
import style from './Hand.module.scss'
import Card from '../components/Card'

const Hand = ({ hand, canDraw, draw, playerKey }) => (
  <ul className={style.hand}>
    {hand.map((card, index) => (
      <Card key={index}>{card}</Card>
    ))}

    {canDraw && (
      <Card back onClick={() => draw(playerKey)}>
        +
      </Card>
    )}
  </ul>
)

export default connect(
  ({ players }, { playerKey }) => {
    const { hand } = players[playerKey]
    const canDraw =
      playerKey === 'dealer' &&
      !check.hasGameFinished(players) &&
      check.shouldDealerDraw(players)

    return { hand, canDraw }
  },
  dispatch => bindActionCreators(actions, dispatch)
)(Hand)
