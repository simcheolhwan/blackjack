import React from 'react'
import { CAPITAL } from '../constants'

const HELP = [
  '딜러의 차례가 되면 아래의 화살표 버튼으로 딜러의 카드를 뽑으십시오.',
  `칩을 모두 잃었을 때 칩 상자를 클릭하면, 칩 ${CAPITAL}을 더 얻습니다.`,
  '4개의 덱을 사용하며, 게임을 새로 시작할 때마다 덱을 섞습니다.',
  '인슈어런스와 스플릿 후 스플릿은 허용되지 않습니다.'
]

const LINK = [
  { href: 'https://instagram.com/simcheolhwan', label: '제작: 심철환' },
  { href: 'https://github.com/s10n/blackjack', label: '소스코드 보기' }
]

const Help = () => (
  <article style={style}>
    <header style={style.header}>
      <h1 style={style.title}>BLACKJACK</h1>
    </header>

    <ul style={style.description}>
      {HELP.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>

    <footer style={style.footer}>
      {LINK.map(({ href, label }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={style.a}
          key={label}
        >
          {label} ↗︎
        </a>
      ))}
    </footer>
  </article>
)

const style = {
  fontSize: 10,
  fontWeight: 'normal',
  lineHeight: 1.5,
  textAlign: 'left',

  title: { fontSize: '2em' },
  footer: { textAlign: 'right', marginTop: 5 },
  a: { textDecoration: 'none', marginLeft: 5 }
}

export default Help
