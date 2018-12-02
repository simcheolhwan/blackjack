import React from 'react'
import style from './Line.module.scss'

const Line = ({ index, chips, debt, max }) => (
  <li className={style.line}>
    <span className={style.index}>{index}</span>
    <div className={style.track}>
      <div className={style.bar} style={{ width: (100 * chips) / max + '%' }} />
      <span className={style.number}>{chips}</span>
    </div>
    <span className={style.debt}>{!!debt && -1 * debt}</span>
  </li>
)

export default Line
