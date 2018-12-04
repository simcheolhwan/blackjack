import React from 'react'
import style from './History.module.scss'
import Chart from '../components/Chart'

const HistoryDetail = ({ summary, list, max }) => (
  <article className={style.article}>
    <header className={style.header}>{summary}</header>
    <Chart max={max}>{list.reverse()}</Chart>
  </article>
)

export default HistoryDetail
