import React from 'react'
import style from './Table.module.scss'

const Table = ({ dealer, primary, replica, chips, controls }) => (
  <main className={style.table}>
    <section className={style.dealer}>{dealer}</section>

    <section className={style.players}>
      {replica && <section className={style.player}>{replica}</section>}
      <section className={style.player}>{primary}</section>
    </section>

    <footer className={style.footer}>
      <section className={style.chips}>{chips}</section>
      <section className={style.controls}>{controls}</section>
    </footer>
  </main>
)

export default Table
