import React from 'react'
import classNames from 'classnames'
import style from './Box.module.scss'

const Box = ({ title, footer, children, onClick }) => (
  <div
    className={classNames(style.box, onClick && style.clickable)}
    onClick={onClick}
  >
    <div className={style.content}>{children}</div>
  </div>
)

export default Box
