import React, { Component } from 'react'
import classNames from 'classnames'
import style from './Menu.module.scss'
import Rules from './Rules'
import Strategy from './Strategy'
import History from './History'

class Menu extends Component {
  state = { currentMenuIndex: null }

  renderMenuItem = ({ name }, index) => {
    const { currentMenuIndex } = this.state
    const isCurrent = index === currentMenuIndex

    const attrs = {
      className: classNames(style.item, isCurrent && style.active),
      onClick: () =>
        this.setState({ currentMenuIndex: isCurrent ? null : index })
    }

    return (
      <li {...attrs} key={name}>
        {name}
      </li>
    )
  }

  close = () => {
    this.setState({ currentMenuIndex: null })
  }

  render() {
    const { currentMenuIndex } = this.state
    const close = (
      <button className={style.close} onClick={this.close}>
        Close
      </button>
    )

    const menu = [
      { name: 'Rules', render: () => <Rules close={close} /> },
      { name: 'Strategy', render: () => <Strategy close={close} /> },
      { name: 'History', render: () => <History close={close} /> }
    ]

    const { render } = menu[currentMenuIndex] || {}

    return (
      <>
        <nav className={style.nav}>{menu.map(this.renderMenuItem)}</nav>
        {render && <div className={style.content}>{render()}</div>}
      </>
    )
  }
}

export default Menu
