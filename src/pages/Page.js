import React from 'react'
import style from './Page.module.scss'

const Page = ({ title, content }) => (
  <article>
    <h1 className={style.title}>{title}</h1>
    <p className={style.content}>{content}</p>
  </article>
)

export default Page
