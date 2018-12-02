import React from 'react'
import style from './Line.module.scss'
import Number from '../components/Number'

const Line = ({ index, chips, debt, max }) => (
  <li className={style.line}>
    <span className={style.index}>{index}</span>
    <div className={style.track}>
      <div className={style.bar} style={{ width: (100 * chips) / max + '%' }} />
      <span className={style.number}>
        <Number>{chips}</Number>
      </span>
    </div>
    <span className={style.debt}>{!!debt && -1 * debt}</span>
  </li>
)

export default Line
