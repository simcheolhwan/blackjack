import React, { Component } from 'react'
import { loadState, saveState, removeState } from '../database/localStorage'

const TRIGGER = 10
class Inspector extends Component {
  state = { count: 0, restore: false, remove: false, data: '' }

  increase = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  handleChange = event => {
    this.setState({ data: event.target.value })
  }

  restore = () => {
    const { data } = this.state
    data && saveState(JSON.parse(data))
    data && this.setState({ restore: true })
  }

  remove = () => {
    removeState()
    this.setState({ remove: true })
  }

  render() {
    const { count, data } = this.state

    return count >= TRIGGER ? (
      <article>
        <textarea defaultValue={JSON.stringify(loadState())} rows={1} />
        <textarea value={data} onChange={this.handleChange} rows={1} />
        <button onClick={this.restore}>Restore</button>
        <button onClick={this.remove}>Remove</button>
      </article>
    ) : (
      this.props.children({ increase: this.increase })
    )
  }
}

export default Inspector
