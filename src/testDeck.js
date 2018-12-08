const DECKS = {
  /* 일반 */
  stay: [9, 7, 5, 7], // 자동으로 멈춤
  bust: ['K', 'K', 'K', '6', 'Q'], // 딜러가 버스트되고 플레이어 승리
  ace: ['A'], // A로 시작

  /* 블랙잭 */
  blackjack: ['A', 6, 'K'], // 즉시 승리
  blackjackWin: ['A', 'A', 'K', 2], // 딜러가 1장 드로우 후 승리
  blackjackDraw: ['A', 'K', 'K', 'A'], // 비김
  dealerBlackjack: [9, 'A', 5, 7, 'K'], // 딜러가 블랙잭으로 승리

  /* 스플릿 */
  split: [6, 5, 6], // 스플릿하며 시작
  splitAces: ['A', 2, 'A'], // A를 스플릿하며 시작
  das: [8, 6, 8, 3, 2], // 더블
  lucky: ['A', 'A', 'A', 'K', 'K', 9], // 모두 블랙잭
  blackjackAfterSplit: ['A', 'J', 'A', 9, 'A', 'Q', 3, 10] // 두 번째 핸드 블랙잭
}

const CASE = ''
export default () => DECKS[CASE] || []
