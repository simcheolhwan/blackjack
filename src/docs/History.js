import React from 'react'
import { connect } from 'react-redux'
import style from './History.module.scss'

const History = ({ history, max, debt, close }) => (
  <article className={style.article}>
    <header className={style.record}>
      {history.length} Games | Record {max} | Debt {debt}
    </header>

    <ul className={style.chart}>
      {history
        .slice(-1000)
        .reverse()
        .map(({ chips, debt }, index) => (
          <li className={style.line} key={index}>
            <span className={style.index}>
              {history.slice(-1000).length - index}
            </span>
            <div className={style.track}>
              <div
                className={style.bar}
                style={{ width: (100 * chips) / max + '%' }}
              />
              <span className={style.number}>{chips}</span>
            </div>
          </li>
        ))}
    </ul>

    {close}
  </article>
)

export default connect(({ history, debt }) => ({
  history,
  debt,
  max: history.length ? Math.max(...history.map(({ chips }) => chips)) : 0
}))(History)
