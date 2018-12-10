import s from '../rules/strategy'
import p from '../rules/player'

/*
 * Basic strategy 함수의 허점을 보완하는 셀렉터 함수
 * 허점 1. 자금이 부족할 때 스플릿을 할 수 없다. 하드 토탈로 전략을 다시 계산해야 한다.
 * 허점 2. 첫 두 장이 아닐 때 서렌더를 할 수 없다. 이땐 힛을 반환해야 한다.
 */

export default ({ player, dealer, bank, turn }) => {
  const { hand } = player[turn]
  const { can } = p({ player, bank, turn })
  const strategy = s({ hand, dealer })
  const strategies =
    {
      SP: [...strategy, ...s({ hand, dealer }, true)], // 1
      SU: [...strategy, 'H'] // 2
    }[strategy[0]] || strategy

  const isPlaying = Number.isInteger(turn)
  const isValid = isPlaying && player[turn] && Object.values(can).some(Boolean)
  return isValid ? findPossible(strategies, can) : undefined
}

/* utils */
export const findPossible = (strategies, can) => strategies.find(s => can[s])
