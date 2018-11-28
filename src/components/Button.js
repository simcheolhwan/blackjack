import React from 'react'
import style from './Button.module.scss'

const Button = ({ color, children, ...rest }) => (
  <button
    className={style.button}
    style={{ backgroundColor: rest.disabled ? 'silver' : color }}
    {...rest}
  >
    {children}
  </button>
)

export default Button
