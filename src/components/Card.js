import React from 'react'
import style from './Card.module.scss'

const Card = ({ children, style: variant = {}, size = 1 }) => (
  <div className={style.card} style={{ ...variant, fontSize: size + 'rem' }}>
    {children}
  </div>
)

export default Card
