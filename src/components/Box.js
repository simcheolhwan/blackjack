import React from 'react'
import style from './Box.module.scss'

const Box = ({ title, footer, children, onClick }) => (
  <div className={style.box} onClick={onClick}>
    <div className={style.content}>{children}</div>
  </div>
)

export default Box
