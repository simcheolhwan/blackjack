import { connect } from "react-redux"
import selector from "../selectors/games"
import GamesDetail from "./GamesDetail"
const mapStateToProps = ({ history }) => selector(history.games)
export default connect(mapStateToProps)(GamesDetail)
