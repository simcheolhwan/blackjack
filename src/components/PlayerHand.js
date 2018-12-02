import React, { Fragment } from 'react'
import style from './PlayerHand.module.scss'
import Card from './Card'

const PlayerHand = ({ children }) => {
  const renderItem = (v, index) => {
    const split = v.split(',')
    const cards = {
      1: (
        <div className={style.card}>
          <Card small>{v}</Card>
        </div>
      ),
      2: split.map((v, i) => (
        <div className={style.card} key={i}>
          <Card small>{v}</Card>
        </div>
      ))
    }

    return (
      <Fragment key={index}>
        {!!index && <span className={style.hyphen}>–</span>}
        {cards[split.length]}
      </Fragment>
    )
  }

  return (
    <div className={style.module}>{children.split('–').map(renderItem)}</div>
  )
}

export default PlayerHand
