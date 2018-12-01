import React from 'react'
import style from './Bank.module.scss'

const Bank = ({ debt, onClick }) =>
  debt ? (
    <button className={style.bank} disabled={!onClick} onClick={onClick}>
      DEBT {debt}
    </button>
  ) : null

export default Bank
