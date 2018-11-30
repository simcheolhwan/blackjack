import React from 'react'
import style from './Box.module.scss'

const Box = ({ title, children, onClick }) => (
  <div className={style.box} onClick={onClick}>
    {title && <h1 className={style.title}>{title}</h1>}
    <p className={style.content}>{children}</p>
  </div>
)

export default Box
