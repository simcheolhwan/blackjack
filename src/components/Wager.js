import React from 'react'
import classNames from 'classnames'
import style from './Wager.module.scss'

const Wager = ({ title, footer, large, children, onClick }) => (
  <div
    className={classNames(
      style.wager,
      large && style.large,
      onClick && style.clickable
    )}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Wager
