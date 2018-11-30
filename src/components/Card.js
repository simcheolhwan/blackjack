import React from 'react'
import classNames from 'classnames'
import style from './Card.module.scss'

const Card = ({ back, children }) => (
  <div className={classNames(style.card, back && style.back)}>{children}</div>
)

export default Card
