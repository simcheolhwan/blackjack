import React, { Component, createRef } from 'react'
import classNames from 'classnames'
import style from './Line.module.scss'
import Number from './Number'

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
    const { index, chips, debt } = this.props

    return (
      <div className={style.line}>
        <span className={style.index}>{index}</span>

        <div className={style.track} ref={this.track}>
          {[[debt, 'red'], [chips, 'green']].map(this.renderBar)}

          <span className={style.number}>
            <Number>{chips}</Number>
          </span>
        </div>

        <span className={style.debt}>{!!debt && -1 * debt}</span>
      </div>
    )
  }
}

export default Line
