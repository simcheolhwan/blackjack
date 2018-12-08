import React from 'react'
import classNames from 'classnames'
import style from './Wager.module.scss'

const Wager = ({ title, footer, small, children, onClick }) => (
  <div
    className={classNames(
      style.wager,
      small && style.small,
      onClick && style.clickable
    )}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Wager
