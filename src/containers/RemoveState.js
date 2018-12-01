import { Component } from 'react'
import { removeState } from '../localStorage'

const TRIGGER = 10
class RemoveState extends Component {
  state = { count: 0 }

  componentDidUpdate() {
    this.state.count === TRIGGER && removeState()
  }

  increase = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    const hasRemoved = this.state.count >= TRIGGER
    return this.props.render({
      hasRemoved,
      increase: hasRemoved ? undefined : this.increase
    })
  }
}

export default RemoveState
