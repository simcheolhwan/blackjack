import React from 'react'
import classNames from 'classnames'
import style from './Number.module.scss'

const Number = ({ children }) => {
  const integer = Math.floor(children)
  const decimal = children - integer

  return (
    <span className={classNames(style.number, integer > 9999 && style.large)}>
      <span>{String(integer)}</span>
      {integer < 1000 && !!decimal && <small>{String(decimal).slice(1)}</small>}
    </span>
  )
}

export default Number
