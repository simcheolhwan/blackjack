import React, { Component } from 'react'
import { connect } from 'react-redux'
import selector from '../selectors/history'
import Trip from './Trip'
import HistoryDetail from './HistoryDetail'

class Trips extends Component {
  state = { currentTripIndex: null }

  reset = () => {
    this.setState({ currentTripIndex: null })
  }

  renderTrip = (trip, index) => {
    const onClick = () => this.setState({ currentTripIndex: index })

    return (
      <li onClick={onClick} key={index}>
        <Trip {...trip} index={index} />
      </li>
    )
  }

  render() {
    const { trips, button } = this.props
    const { currentTripIndex } = this.state

    return Number.isInteger(currentTripIndex) ? (
      <>
        <HistoryDetail {...trips[currentTripIndex]} />
        <button onClick={this.reset}>Back</button>
      </>
    ) : (
      <article>
        <ul>{trips.map(this.renderTrip)}</ul>
        {button}
      </article>
    )
  }
}

const mapStateToProps = ({ trips }) => ({ trips: trips.map(selector(50)) })
export default connect(mapStateToProps)(Trips)
