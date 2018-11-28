import React from 'react'
import style from './Card.module.scss'
import classNames from 'classnames'

const Card = ({ back, children, style: variant = {}, onClick }) => (
  <div
    className={classNames(style.card, back && style.back)}
    style={variant}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Card
