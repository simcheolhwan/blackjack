import React from 'react'
import style from './Finite.module.scss'

const Finite = ({ children }) => {
  const integer = Math.floor(children)
  const decimal = children - integer

  return (
    <span className={style.number}>
      <span>{String(integer)}</span>
      {integer < 1000 && !!decimal && <small>{String(decimal).slice(1)}</small>}
    </span>
  )
}

export default Finite
