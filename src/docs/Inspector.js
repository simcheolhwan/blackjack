import React, { Component, createRef } from 'react'
import { loadState, saveState, removeState } from '../localStorage'

const TRIGGER = 10
class Inspector extends Component {
  copyRef = createRef()
  state = { count: 0, copy: false, restore: false, remove: false, data: '' }

  increase = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  handleChange = event => {
    this.setState({ data: event.target.value })
  }

  copy = () => {
    this.copyRef.current.select()
    document.execCommand('copy')
    this.setState({ copy: true })
  }

  restore = () => {
    const { data } = this.state
    data && saveState(data)
    data && this.setState({ restore: true })
  }

  remove = () => {
    removeState()
    this.setState({ remove: true })
  }

  renderButton = label => (
    <button onClick={this[label.toLowerCase()]} key={label}>
      {label}
    </button>
  )

  render() {
    const { count, data } = this.state

    return count >= TRIGGER ? (
      <article>
        <section>
          {['Copy', 'Restore', 'Remove'].map(this.renderButton)}
        </section>

        <input ref={this.copyRef} defaultValue={JSON.stringify(loadState())} />
        <input value={data} onChange={this.handleChange} />
      </article>
    ) : (
      this.props.children({ increase: this.increase })
    )
  }
}

export default Inspector
