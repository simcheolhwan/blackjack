import React from 'react'
import classNames from 'classnames'
import style from './Player.module.scss'

const Player = ({ message, hand, bets, style: variant, active, small }) => (
  <article
    className={classNames(style.player, active && style.active)}
    style={variant}
  >
    <section className={classNames(style.message, small && style.small)}>
      {message}
    </section>

    <section className={style.hand}>{hand}</section>
    <section className={style.bets}>{bets}</section>
  </article>
)

export default Player
