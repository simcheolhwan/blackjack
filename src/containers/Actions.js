import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UNIT } from '../rules/constants'
import p from '../rules/player'
import * as actions from '../actions/player'
import * as tripActions from '../actions/trip'
import ActionGroup from '../components/ActionGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators({ ...actions, ...tripActions }, dispatch),
  (
    { player, bank, turn },
    { enter, bet, hit, stay, double, split, surrender }
  ) => {
    const actions = { SU: surrender, SP: split, D: double, S: stay, H: hit }
    return {
      actions: Number.isInteger(turn)
        ? Object.entries(actions).map(([key, onClick]) => ({
            children: key,
            disabled: !(player[turn] && p({ player, bank }, turn).can[key]),
            onClick
          }))
        : bank + player[0].bets
        ? [1, 2, 5, 10, 20].map(n => ({
            children: n * UNIT,
            disabled: bank < n,
            onClick: () => bet(n)
          }))
        : [100, 200, 500, 1000, 2000].map(n => ({
            children: n * UNIT,
            onClick: () => enter(n)
          }))
    }
  }
)(ActionGroup)
