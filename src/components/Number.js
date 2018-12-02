import React from 'react'
import style from './Number.module.scss'

const Number = ({ children }) => {
  const integer = Math.floor(children)
  const decimal = children - integer

  return (
    <span className={style.number}>
      <span>{String(integer)}</span>
      {integer < 1000 && !!decimal && <small>{String(decimal).slice(1)}</small>}
    </span>
  )
}

export default Number
