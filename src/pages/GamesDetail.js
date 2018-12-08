import React from 'react'
import style from './Games.module.scss'
import Chart from '../components/Chart'

const GamesDetail = ({ summary, games, max }) => (
  <article className={style.article}>
    <header className={style.header}>{summary}</header>
    <Chart max={max}>{games.slice().reverse()}</Chart>
  </article>
)

export default GamesDetail
