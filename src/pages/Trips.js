import React, { Component } from 'react'
import { connect } from 'react-redux'
import selector from '../selectors/games'
import Trip from '../components/Trip'
import GamesDetail from './GamesDetail'

class Trips extends Component {
  state = { currentTripIndex: null }

  reset = () => {
    this.setState({ currentTripIndex: null })
  }

  renderTrip = (trip, index) => {
    const onClick = () => this.setState({ currentTripIndex: index })

    return (
      <li onClick={onClick} key={index}>
        <Trip {...trip} title={this.props.trips.length - index} />
      </li>
    )
  }

  render() {
    const { trips, button } = this.props
    const { currentTripIndex } = this.state

    return Number.isInteger(currentTripIndex) ? (
      <>
        <GamesDetail {...trips[currentTripIndex]} />
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

export default connect(({ history }) => ({
  trips: history.trips
    .slice()
    .reverse()
    .map(selector)
}))(Trips)
