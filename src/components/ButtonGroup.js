import React from 'react'
import colors from '../styles/colors'
import style from './ButtonGroup.module.scss'
import Button from './Button'

const COLORS = [
  colors['teal'],
  colors['orange'],
  colors['olive'],
  colors['maroon'],
  colors['blue']
]

const ButtonGroup = ({ buttons }) => (
  <ul className={style.group}>
    {buttons.map((button, index) => (
      <li key={index}>
        <Button color={COLORS[index]} {...button} />
      </li>
    ))}
  </ul>
)

export default ButtonGroup
