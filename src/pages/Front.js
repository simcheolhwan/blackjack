import React from 'react'
import style from './Front.module.scss'

const Front = () => (
  <h1 className={style.title}>{process.env.REACT_APP_TITLE}</h1>
)

export default Front
