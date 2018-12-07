import React from 'react'
import classNames from 'classnames'
import style from './Card.module.scss'

const Card = ({ back, small, children }) => (
  <div className={classNames(style.card, small && style.small)}>
    <div className={back && style.back}>{children}</div>
  </div>
)

export default Card
