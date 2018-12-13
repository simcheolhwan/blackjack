import React from 'react'
import style from './FixedHeader.module.scss'

const FixedHeader = ({ children }) => (
  <nav className={style.nav}>{children}</nav>
)

export default FixedHeader
