import React from "react"
import style from "./Trip.module.scss"

const Trip = ({ title, summary }) => (
  <article className={style.trip}>
    <h1 className={style.title}>Trip {title}</h1>
    <section>
      <p>{summary} →</p>
    </section>
  </article>
)

export default Trip
