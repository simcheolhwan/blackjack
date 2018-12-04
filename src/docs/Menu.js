import React, { Component } from 'react'
import classNames from 'classnames'
import style from './Menu.module.scss'
import NewGame from './NewGame'
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
    const { table } = this.props
    const { currentMenuIndex } = this.state

    const menu = [
      { name: 'Casino', render: () => <NewGame onReset={this.close} /> },
      { name: 'Rules', render: () => <Rules /> },
      { name: 'Strategy', render: () => <Strategy /> },
      { name: 'History', render: () => <History /> }
    ]

    const { render } = menu[currentMenuIndex] || {}

    return (
      <>
        <nav className={style.nav}>
          <ul className={style.menu}>{menu.map(this.renderMenuItem)}</ul>
        </nav>

        {Number.isInteger(currentMenuIndex) ? (
          <div className={style.content}>
            {render()}

            <button onClick={this.close}>Close</button>
          </div>
        ) : (
          table
        )}
      </>
    )
  }
}

export default Menu
