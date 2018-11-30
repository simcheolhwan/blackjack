import React from 'react'
import style from './Button.module.scss'

const Button = ({ color, children, ...rest }) => (
  <button className={style.button} style={{ color }} {...rest}>
    {children}
  </button>
)

export default Button
