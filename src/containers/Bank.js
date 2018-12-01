import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { CAPITAL } from '../constants'
import Bank from '../components/Bank'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
  ({ chips, debt }, { payback }) => ({
    debt,
    onClick: !!debt && chips > CAPITAL ? payback : undefined
  })
)(Bank)
