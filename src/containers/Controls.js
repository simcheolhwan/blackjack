import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/game'
import g from '../rules/game'
import colors from '../styles/colors'
import ActionGroup from '../components/ActionGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ player, dealer, turn }, { start, finish }) => ({
    actions: [
      Number.isInteger(turn)
        ? g({ player, dealer, turn }).hasFinished && {
            color: colors['navy'],
            children: '✓',
            onClick: finish
          }
        : {
            color: colors['navy'],
            children: '→',
            disabled: !player[0].bets,
            onClick: start
          }
    ].filter(Boolean)
  })
)(ActionGroup)
