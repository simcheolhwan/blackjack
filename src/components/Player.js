import React from 'react'
import style from './Player.module.scss'
import Box from './Box'

const Player = ({ result, hand, bet, actions, isDealer }) => (
  <article className={style.player}>
    {!isDealer && <section className={style.result}>{result}</section>}

    <section className={style.hand}>{hand}</section>

    {!isDealer && (
      <section className={style.bet}>
        <Box>{bet}</Box>
      </section>
    )}

    {!isDealer && <section className={style.actions}>{actions}</section>}
  </article>
)

export default Player
