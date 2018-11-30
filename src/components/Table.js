import React from 'react'
import classNames from 'classnames'
import style from './Table.module.scss'

const Table = ({ dealer, primary, replica, chips, actions, controls }) => (
  <main className={style.table}>
    <section className={style.dealer}>{dealer}</section>

    <section className={classNames(style.players, replica && style.duplicated)}>
      {replica && <section>{replica}</section>}
      <section>{primary}</section>
    </section>

    <section className={style.actions}>{actions}</section>

    <footer className={style.footer}>
      <section className={style.chips}>{chips}</section>
      <section className={style.controls}>{controls}</section>
    </footer>
  </main>
)

export default Table
