import React from 'react'
import { DECKS } from '../rules/constants'
import style from './Rules.module.scss'
import Inspector from './Inspector'

const RULES = [
  ['규칙', [`${DECKS}개의 덱을 사용합니다.`]],
  [
    '게임 방법',
    ['게임이 시작되기 전에 베팅 영역을 누르면 베팅을 한꺼번에 취소합니다.']
  ],
  [
    '게임 안내',
    [
      '아이폰의 사파리 혹은 안드로이드의 크롬 브라우저에서 공유하기 버튼을 누르고 홈 화면에 추가하시면 앱처럼 즐길 수 있습니다.',
      '홈 화면에 추가를 여러 번 할 수 있습니다. 하나의 앱은 각각 별개의 게임 기록을 가지게 됩니다.',
      '이 게임은 오프라인에서도 동작합니다!'
    ]
  ]
]

const LINKS = [
  { href: 'https://instagram.com/simcheolhwan', label: '제작: 심철환' },
  { href: 'https://github.com/s10n/blackjack', label: '소스코드 보기' }
]

const anchorAttrs = { target: '_blank', rel: 'noopener noreferrer' }

const Rules = () => (
  <Inspector>
    {({ increase }) => (
      <main className={style.rules} onClick={increase}>
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
        </section>

        <footer className={style.author}>
          {LINKS.map(({ href, label }) => (
            <a href={href} className={style.a} {...anchorAttrs} key={label}>
              {label}
            </a>
          ))}
        </footer>
      </main>
    )}
  </Inspector>
)

export default Rules
