import React from 'react'
import classNames from 'classnames'
import style from './Wager.module.scss'

const Wager = ({ title, footer, children, onClick }) => (
  <div
    className={classNames(style.wager, onClick && style.clickable)}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Wager
