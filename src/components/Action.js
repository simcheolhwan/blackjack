import React from 'react'
import classNames from 'classnames'
import style from './Action.module.scss'

const Action = ({ color, children, ...rest }) => (
  <button
    className={classNames(style.button, children > 9999 && style.small)}
    style={{ color }}
    {...rest}
  >
    {children}
  </button>
)

export default Action
