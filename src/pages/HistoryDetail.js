import React from 'react'
import style from './History.module.scss'
import Chart from '../components/Chart'

const HistoryDetail = ({ summary, games, max }) => (
  <article className={style.article}>
    <header className={style.header}>{summary}</header>
    <Chart max={max}>{games.slice().reverse()}</Chart>
  </article>
)

export default HistoryDetail
