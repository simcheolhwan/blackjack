import React from 'react'
import classNames from 'classnames'
import style from './Table.module.scss'

const Table = props => {
  const { dealer, primary, replica } = props
  const { header, chips, bank, actions, controls } = props

  return (
    <main className={style.table}>
      <header className={style.header}>{header}</header>

      <section className={style.dealer}>{dealer}</section>
      <section className={classNames(style.players, replica && style.two)}>
        {replica && <section>{replica}</section>}
        <section>{primary}</section>
      </section>

      <section className={style.actions}>{actions}</section>
      <footer className={style.footer}>
        <section className={style.capital}>
          {chips}
          {bank}
        </section>
        <section className={style.controls}>{controls}</section>
      </footer>
    </main>
  )
}

export default Table
