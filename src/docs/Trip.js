import React from 'react'
import classNames from 'classnames'
import style from './Trip.module.scss'

const Trip = ({ index, summary }) => (
  <article className={classNames(style.trip, !index && style.first)}>
    <h1>Trip {index + 1}</h1>
    <section>
      <p>{summary} →</p>
    </section>
  </article>
)

export default Trip
