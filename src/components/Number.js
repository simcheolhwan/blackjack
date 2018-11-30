import React from 'react'
import style from './Number.module.scss'

const Number = ({ children }) => {
  const integer = Math.floor(children)
  const decimal = children - integer

  return (
    <div className={style.number}>
      <span>{String(integer)}</span>
      {!!decimal && <small>{String(decimal).slice(1)}</small>}
    </div>
  )
}

export default Number
