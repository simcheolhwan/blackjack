import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../redux/actions'
import style from './NewGame.module.scss'

const NewGame = ({ reset }) => (
  <article className={style.article}>
    <h1>새로 시작하시겠습니까?</h1>
    <button disabled={!reset} onClick={reset}>
      YES
    </button>

    {!reset && (
      <ul style={style.decription}>
        <li>게임 중이 아니고, 기록이 하나라도 있을 때 가능합니다.</li>
        <li>지난 게임의 기록을 아래 목록에서 확인할 수 있습니다.</li>
      </ul>
    )}
  </article>
)

export default connect(
  state => state,
  dispatch => bindActionCreators(action, dispatch),
  ({ game, history }, { enter, leave }, { onReset }) => {
    const reset = () => {
      leave()
      enter()
      onReset()
    }

    return {
      reset: !game.isPlaying && !!history.length ? reset : undefined
    }
  }
)(NewGame)
