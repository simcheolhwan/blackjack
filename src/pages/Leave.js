import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../actions/trip'
import style from './Leave.module.scss'

const Leave = ({ render, showDescription, onClick }) =>
  render ? (
    <article className={style.article}>
      <header>
        <h1>Leave casino?</h1>
        {showDescription && <p>History will be saved</p>}
      </header>

      <button className={style.button} disabled={!onClick} onClick={onClick}>
        Leave
      </button>

      {!onClick && <p className={style.help}>게임 중이 아닐 때 가능합니다.</p>}
    </article>
  ) : null

export default connect(
  state => state,
  dispatch => bindActionCreators(action, dispatch),
  ({ player, bank, turn, history }, { enter, leave }, { onLeave }) => {
    const { bets } = player[0]
    const inCasino = bank + bets || history.games.length
    const noTrips = !history.trips.length
    const isPlaying = Number.isInteger(turn)
    const onClick = !isPlaying
      ? () => {
          leave()
          onLeave && onLeave()
        }
      : undefined

    return {
      render: inCasino && (noTrips || onClick),
      showDescription: noTrips,
      onClick
    }
  }
)(Leave)
