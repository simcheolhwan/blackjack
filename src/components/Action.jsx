import React from "react"
import classNames from "classnames"
import style from "./Action.module.scss"

const Action = ({ border, color, children, ...rest }) => {
  const attrs = {
    className: classNames(
      style.button,
      border && style.border,
      children > 9999 && style.small
    ),
    style: { color },
    ...rest,
  }

  return <button {...attrs}>{children}</button>
}

export default Action
