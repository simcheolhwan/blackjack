import s from '../rules/strategy'
import p from '../rules/player'

export default ({ player, dealer, bank, turn }) => {
  // 자금이 부족할 때 스플릿을 할 수 없으므로, 하드 토탈로 계산한 전략을 가져와 합한다.
  const strategy = compact([
    // 아래 빈 반환을 빈 어레이로 대체하지 않으면, A를 스플릿할 때 아래 에러가 발생한다.
    // Uncaught TypeError: Invalid attempt to spread non-iterable instance
    ...(s({ hand: player[turn]['hand'], dealer }) || []),
    ...s({ hand: player[turn]['hand'], dealer }, true)
  ])

  const { can } = p({ player, bank, turn })
  return Object.values(can).some(Boolean)
    ? (can[strategy[0]] ? strategy[0] : strategy[1]) || 'H' // Surrender
    : undefined
}

/* utils */
const compact = array =>
  array.reduce(
    (acc, cur) => (cur === acc[acc.length - 1] ? acc : [...acc, cur]),
    []
  )
