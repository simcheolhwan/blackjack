import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../actions/trip'
import style from './Leave.module.scss'

const Leave = ({ noTrips, onClick }) =>
  onClick || noTrips ? (
    <article className={style.article}>
      <h1>Leave casino?</h1>
      {noTrips && <p className={style.description}>History will be saved</p>}
      <button disabled={!onClick} onClick={onClick}>
        Leave
      </button>
      {!onClick && <p className={style.help}>게임 중이 아닐 때 가능합니다.</p>}
    </article>
  ) : null

export default connect(
  state => state,
  dispatch => bindActionCreators(action, dispatch),
  ({ turn, history: { trips, games } }, { enter, leave }, { onLeave }) => {
    const onClick = () => {
      leave()
      onLeave && onLeave()
    }

    return {
      noTrips: !trips.length,
      onClick: !Number.isInteger(turn) ? onClick : undefined
    }
  }
)(Leave)
