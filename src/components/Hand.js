import React from 'react'
import Card from './Card'
import style from './Hand.module.scss'

const Hand = ({ hand, desc }) => (
  <article className={style.hand}>
    <p className={style.desc}>{desc}</p>
    <main className={style.container}>
      <ul className={style.deck}>
        {hand.map((card, index) => (
          <li key={index}>
            <Card>{card}</Card>
          </li>
        ))}
      </ul>
    </main>
  </article>
)

export default Hand
