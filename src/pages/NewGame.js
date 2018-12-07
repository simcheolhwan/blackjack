import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../actions/trip'
import style from './NewGame.module.scss'

const NewGame = ({ noTrips, reset }) =>
  reset || noTrips ? (
    <article className={style.article}>
      <h1>새로 시작하시겠습니까?</h1>

      {noTrips && (
        <p className={style.description}>
          현재 게임의 기록을 저장하여 목록에서 다시 볼 수 있습니다.
        </p>
      )}

      <button disabled={!reset} onClick={reset}>
        YES
      </button>

      {!reset && (
        <p className={style.description}>
          게임 중이 아니고, 기록이 하나라도 있을 때 가능합니다.
        </p>
      )}
    </article>
  ) : null

export default connect(
  state => state,
  dispatch => bindActionCreators(action, dispatch),
  ({ turn, history }, { enter, leave }, { onReset }) => {
    const reset = () => {
      leave()
      enter()
      onReset()
    }

    return {
      noTrips: !history.trips.length,
      reset: Number.isInteger(turn) && !!history.length ? reset : undefined
    }
  }
)(NewGame)
