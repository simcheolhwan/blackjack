import React from 'react'
import classNames from 'classnames'
import style from './Player.module.scss'
import Box from './Box'

const Player = ({ result, hand, bet, actions, isDealer, active }) => (
  <article className={classNames(style.player, active && style.active)}>
    {!isDealer && <section className={style.result}>{result}</section>}

    <section className={style.hand}>{hand}</section>

    {!isDealer && (
      <section className={style.bet}>
        <Box>{bet}</Box>
      </section>
    )}
  </article>
)

export default Player
