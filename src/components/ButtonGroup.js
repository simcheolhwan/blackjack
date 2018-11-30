import React from 'react'
import Button from './Button'
import style from './ButtonGroup.module.scss'

const ButtonGroup = ({ buttons }) => (
  <ul className={style.group}>
    {buttons.map((button, index) => (
      <li key={index}>
        <Button {...button} />
      </li>
    ))}
  </ul>
)

export default ButtonGroup
