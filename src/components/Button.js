import React from 'react'
import style from './Button.module.scss'

const Button = ({ backgroundColor, children, ...rest }) => (
  <button className={style.button} style={{ backgroundColor }} {...rest}>
    {children}
  </button>
)

export default Button
