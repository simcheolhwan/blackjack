import React from 'react'
import Card from './Card'
import style from './Hand.module.scss'

const Hand = ({ hand, status, canDraw }) => (
  <article>
    <p className={style.status}>{status}</p>
    <ul className={style.deck}>
      {hand.map((card, index) => (
        <li key={index}>
          <Card>{card}</Card>
        </li>
      ))}

      {canDraw && (
        <li>
          <Card back>+</Card>
        </li>
      )}
    </ul>
  </article>
)

export default Hand
