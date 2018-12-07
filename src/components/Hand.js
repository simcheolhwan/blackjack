import React from 'react'
import Card from './Card'
import style from './Hand.module.scss'

const Hand = ({ hand, desc }) => (
  <article>
    <p className={style.desc}>{desc}</p>
    <ul className={style.deck}>
      {hand.map((card, index) => (
        <li key={index}>
          <Card>{card}</Card>
        </li>
      ))}
    </ul>
  </article>
)

export default Hand
