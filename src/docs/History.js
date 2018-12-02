import React from 'react'
import { connect } from 'react-redux'
import style from './History.module.scss'
import Chart from './Chart'

const History = ({ history, max, debt, close }) => (
  <article className={style.article}>
    <header className={style.record}>
      {history.length} Games | Record {max} | Debt {debt}
    </header>

    <ul className={style.chart}>
      <Chart max={max}>{history.slice(-1000).reverse()}</Chart>
    </ul>

    {close}
  </article>
)

export default connect(({ history, debt }) => ({
  history,
  debt,
  max: history.length ? Math.max(...history.map(({ chips }) => chips)) : 0
}))(History)
