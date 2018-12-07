const DECKS = {
  hasAce: ['A'], // A로 시작
  split: ['A', 'A'], // 스플릿으로 시작
  das: [8, 6, 8, 3, 2], // [SP, D] 스플릿 후 더블
  autoStay: [9, 7, 5, 7], // [H] 21이므로 자동으로 멈춰야 함
  dealerBust: ['K', 'K', 'K', '6', 'Q'], // [S] 딜러가 버스트되면서 플레이어가 이겨야 함
  dealerBlackjack: [9, 'A', 5, 7, 'K'], // [H] 서로 21이지만 딜러가 이겨야 함
  blackjack: ['A', 6, 'K'], // [] 블랙잭으로 즉시 이겨야 함
  blackjackWin: ['A', 'A', 'K', 2], // [] 블랙잭이지만 딜러가 1장 뽑은 후 이겨야 함
  blackjackDraw: ['A', 'K', 'K', 'A'], // [] 블랙잭이지만 비겨야 함
  blackjackAfterSplit: ['A', 'A', 'A', 'K', 'K', 9], // [SP, H, H] 스플릿 후 모두 블랙잭
  dealerBustAfterBlackjackAfterSplit: ['A', 'J', 'A', 9, 'A', 'Q', 3, 10] // [SP, H, H, H] 두 번째 플레이어가 블랙잭으로 이겨야 함
}

const CASE = ''
export default () => DECKS[CASE] || []
