import React from "react"
import colors from "../styles/colors"
import style from "./ActionGroup.module.scss"
import Action from "./Action"

const COLORS = [
  colors["teal"],
  colors["orange"],
  colors["olive"],
  colors["maroon"],
  colors["blue"],
]

const ActionGroup = ({ actions }) => (
  <ul className={style.group}>
    {actions.map((action, index) => (
      <li key={index}>
        <Action color={COLORS[index]} {...action} />
      </li>
    ))}
  </ul>
)

export default ActionGroup
