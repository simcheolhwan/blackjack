import React from 'react'
import { DECK, SEED } from '../constants'
import style from './Rules.module.scss'

const RULES = [
  [
    '규칙',
    [
      `${DECK}개의 덱을 사용합니다.`,
      `게임을 새로 시작할 때마다 덱을 섞습니다.`,
      '인슈어런스와 스플릿 후 스플릿은 허용되지 않습니다.'
    ]
  ],
  [
    '게임 방법',
    [
      '게임이 시작되기 전에 베팅 영역을 누르면 베팅을 한꺼번에 취소합니다.',
      '딜러의 차례가 되면 맨 아래의 화살표 버튼으로 딜러의 카드를 뽑으십시오.',
      `칩을 모두 잃었을 때 칩 상자를 누르면 ${SEED}을 새로 빌립니다.`,
      '칩이 충분할 때 빚 영역을 누르면 빚을 갚을 수 있습니다.',
      '이 게임은 오프라인에서도 동작합니다!'
    ]
  ]
]

const LINKS = [
  { href: 'https://instagram.com/simcheolhwan', label: '제작: 심철환' },
  { href: 'https://github.com/s10n/blackjack', label: '소스코드 보기' }
]

const anchorAttrs = { target: '_blank', rel: 'noopener noreferrer' }

const Rules = ({ close }) => (
  <main className={style.rules}>
    <section>
      {RULES.map(([title, list]) => (
        <article className={style.article} key={title}>
          <h1 className={style.title}>{title}</h1>
          <ul className={style.description}>
            {list.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </article>
      ))}
      {close}
    </section>

    <footer className={style.author}>
      {LINKS.map(({ href, label }) => (
        <a href={href} className={style.a} {...anchorAttrs} key={label}>
          {label}
        </a>
      ))}
    </footer>
  </main>
)

export default Rules
