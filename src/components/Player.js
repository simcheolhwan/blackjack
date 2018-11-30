import React from 'react'
import classNames from 'classnames'
import style from './Player.module.scss'

const Player = ({ result, hand, bet, actions, isDealer, active, small }) => (
  <article className={classNames(style.player, active && style.active)}>
    {!isDealer && (
      <section className={classNames(style.result, small && style.small)}>
        {result}
      </section>
    )}

    <section className={style.hand}>{hand}</section>
    {!isDealer && <section className={style.bet}>{bet}</section>}
  </article>
)

export default Player
