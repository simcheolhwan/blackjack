import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check from '../rules/check'
import Card from '../components/Card'

const Hand = ({ hand }) => (
  <ul>
    {hand.map((card, index) => (
      <Card key={index}>{card}</Card>
    ))}

    {false && <Card back>+</Card>}
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
  dispatch => bindActionCreators(actions, dispatch),
  ({ hand, canDraw }, { draw }, { playerKey }) =>
    Object.assign({ hand }, canDraw && { onClick: () => draw(playerKey) })
)(Hand)
