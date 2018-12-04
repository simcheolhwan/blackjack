import { connect } from 'react-redux'
import selector from '../selectors/history'
import HistoryDetail from './HistoryDetail'
const mapStateToProps = ({ history, debt }) => selector(1000, debt)(history)
export default connect(mapStateToProps)(HistoryDetail)
