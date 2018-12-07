import { connect } from 'react-redux'
import selector from '../selectors/history'
import HistoryDetail from './HistoryDetail'
const mapStateToProps = ({ history }) => selector(history.games)
export default connect(mapStateToProps)(HistoryDetail)
