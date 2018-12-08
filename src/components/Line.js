import React, { Component, createRef } from 'react'
import classNames from 'classnames'
import style from './Line.module.scss'
import Finite from './Finite'

class Line extends Component {
  track = createRef()
  state = { width: 0 }

  componentDidMount() {
    const { width } = this.track.current.getBoundingClientRect()
    this.setState({ width: width - 50 })
  }

  calcBarWidth = amount => {
    const { max } = this.props
    const { width } = this.state
    return width * (amount / max) || 0
  }

  renderBar = ([n, color], index) => (
    <div
      className={classNames(style.bar, style[color])}
      style={{ width: this.calcBarWidth(n) }}
      key={index}
    />
  )

  render() {
    const { index, number, minus } = this.props

    return (
      <div className={style.line}>
        <span className={style.index}>{index}</span>

        <div className={style.track} ref={this.track}>
          {[[minus, 'red'], [number, 'green']].map(this.renderBar)}

          <span className={style.number}>
            <Finite>{number}</Finite>
          </span>
        </div>

        <span className={style.minus}>{!!minus && -1 * minus}</span>
      </div>
    )
  }
}

export default Line
