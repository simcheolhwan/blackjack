import React from 'react'
import Card from './Card'
import style from './Hand.module.scss'

const Hand = ({ hand, state }) => (
  <article>
    <p className={style.state}>{state}</p>
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
