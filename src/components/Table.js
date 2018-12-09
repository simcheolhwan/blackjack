import React from 'react'
import style from './Table.module.scss'

const Table = ({ dealer, player = [], bank, actions, controls }) => (
  <main className={style.table}>
    <section className={style.dealer}>{dealer}</section>
    {!!player.length && <section className={style.player}>{player}</section>}
    <section className={style.actions}>{actions}</section>
    <footer className={style.footer}>
      <section className={style.bank}>{bank}</section>
      <section className={style.controls}>{controls}</section>
    </footer>
  </main>
)

export default Table
