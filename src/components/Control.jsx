import React from "react"
import style from "./Control.module.scss"

const Control = ({ onClick, children }) =>
  onClick ? (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  ) : null

export default Control
