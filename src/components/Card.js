import React from 'react'
import style from './Card.module.scss'

const Card = ({ children }) => <div className={style.card}>{children}</div>

export default Card
