import getShuffledDeck from './rules/getShuffledDeck'
const shuffledDeck = getShuffledDeck()

const testCase = ''
const testDeck = {
  autoStay: ['9', '5', '7', '7'],
  dealerBlackjack: ['9', '5', 'A', '7', 'K'],
  dealerBust: ['K', 'K', 'K', 'K', 'Q'],
  blackjack: ['A', 'K', '6'],
  blackjackWin: ['A', 'K', 'A', '2'],
  blackjackDraw: ['A', 'K', 'K', 'A'],
  blackjackAfterSplit: ['A', 'A', 'A', 'K', 'K', '9'],
  split: ['A', 'A'],
  das: ['8', '8', '6', '3', '2']
}

export default () =>
  testCase ? { deck: [...testDeck[testCase], ...shuffledDeck] } : undefined
