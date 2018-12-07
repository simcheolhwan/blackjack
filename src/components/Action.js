import React from 'react'
import style from './Action.module.scss'

const Action = ({ color, children, ...rest }) => (
  <button className={style.button} style={{ color }} {...rest}>
    {children}
  </button>
)

export default Action
