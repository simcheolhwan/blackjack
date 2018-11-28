import getDefaultValue from './getDefaultValue'

export default hand => {
  const sum = hand.reduce((sum, card) => sum + getDefaultValue(card), 0)
  const hasAce = hand.includes('A')
  return hasAce && sum + 10 <= 21 ? [sum, sum + 10] : [sum]
}
