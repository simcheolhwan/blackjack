import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UNIT, MAX } from '../rules/constants'
import p from '../rules/player'
import * as actions from '../actions/player'
import * as tripActions from '../actions/trip'
import selectStrategy from '../selectors/strategy'
import ActionGroup from '../components/ActionGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators({ ...actions, ...tripActions }, dispatch),
  (
    { history, ...game },
    { enter, bet, hit, stay, double, split, surrender }
  ) => {
    const { player, bank, turn } = game
    const actions = { SU: surrender, SP: split, D: double, S: stay, H: hit }
    const strategy = player[turn] && selectStrategy(game)
    const { can } = player[turn] ? p(game) : {}
    const { bets } = player[0]
    const isPlaying = Number.isInteger(turn)
    const isBetting = bank + bets || history.games.length // 자금 소진을 포함

    return {
      actions: isPlaying
        ? Object.entries(actions).map(([key, onClick]) => ({
            children: key,
            disabled: !(player[turn] && can[key]),
            border: strategy === key,
            onClick
          }))
        : isBetting
        ? [1, 2, 5, 10, 20].map(n => ({
            children: n * UNIT,
            disabled: bank < n || bets + n > MAX,
            onClick: () => bet(n)
          }))
        : [100, 200, 500, 1000, 2000].map(n => ({
            children: n * UNIT,
            onClick: () => enter(n)
          }))
    }
  }
)(ActionGroup)
