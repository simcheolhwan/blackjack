import React from 'react'
import style from './Card.module.scss'

const Card = ({ back, children }) => (
  <div className={style.card}>
    <div className={back && style.back}>{children}</div>
  </div>
)

export default Card
