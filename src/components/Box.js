import React from 'react'
import style from './Box.module.scss'

const Box = ({ title, children }) => (
  <div className={style.box}>
    {title && <h1 className={style.title}>{title}</h1>}
    <p className={style.content}>{children}</p>
  </div>
)

export default Box
