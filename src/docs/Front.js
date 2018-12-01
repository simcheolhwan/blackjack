import React, { memo } from 'react'
import classNames from 'classnames'
import style from './Front.module.scss'
import RemoveState from '../containers/RemoveState'

const Front = () => (
  <RemoveState
    render={({ increase, hasRemoved }) => (
      <h1
        className={classNames(style.title, hasRemoved && style.lineThrough)}
        onClick={increase}
      >
        BLACKJACK
      </h1>
    )}
  />
)

export default memo(Front)
