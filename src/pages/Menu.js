import React, { Component } from 'react'
import classNames from 'classnames'
import style from './Menu.module.scss'
import Rules from './Rules'
import Strategy from './Strategy'
import Trips from './Trips'
import Games from './Games'
import Leave from './Leave'

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
    const button = <Leave onLeave={this.close} />
    const menu = [
      { name: 'Rules', render: () => <Rules /> },
      { name: 'Strategy', render: () => <Strategy /> },
      { name: 'Games', render: () => <Games /> },
      { name: 'Trips', render: () => <Trips button={button} /> }
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

            <button className={style.close} onClick={this.close}>
              Close
            </button>
          </div>
        ) : (
          table
        )}
      </>
    )
  }
}

export default Menu
