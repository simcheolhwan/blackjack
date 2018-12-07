import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/game'
import colors from '../styles/colors'
import ActionGroup from '../components/ActionGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ player, turn }, { start, finish }) => ({
    actions: [
      false && {
        color: colors['navy'],
        children: '✓',
        onClick: finish
      },
      !Number.isInteger(turn) && {
        color: colors['navy'],
        children: '→',
        disabled: !player[0].bets,
        onClick: start
      }
    ].filter(Boolean)
  })
)(ActionGroup)
