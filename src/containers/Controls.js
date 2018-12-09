import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/game'
import g from '../rules/game'
import Control from '../components/Control'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ player, dealer, turn }, { start, finish }) =>
    Object.assign(
      {},
      Number.isInteger(turn)
        ? g({ player, dealer, turn }).hasFinished && {
            children: '✓',
            onClick: finish
          }
        : player[0].bets && {
            children: '→',
            onClick: start
          }
    )
)(Control)
