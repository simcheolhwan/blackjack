import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../redux/actions'

const NewGame = ({ reset }) => (
  <article>
    <h1>새로 시작하시겠습니까?</h1>

    <button disabled={!reset} onClick={reset}>
      YES
    </button>

    {!reset && (
      <p>
        게임 중이 아니고, 적어도 한 번의 게임을 플레이한 후 사용하실 수
        있습니다.
      </p>
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
