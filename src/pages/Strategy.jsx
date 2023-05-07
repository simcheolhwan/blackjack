import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import s from "../rules/strategy"
import * as settingsActions from "../actions/settings"
import PlayerHand from "../components/PlayerHand"
import style from "./Strategy.module.scss"

const renderColumns = (hand, hard = false) => {
  return [2, 3, 4, 5, 6, 7, 8, 9, 10, "A"].map((dealer) => {
    if (!hand) return <td key={dealer}>{dealer}</td>

    const [action0, action1 = ""] = s({ hand, dealer: [dealer] }, hard)
    const action = action0 + action1.toLowerCase()
    return (
      <td className={style[action.toLowerCase()]} key={dealer}>
        {action}
      </td>
    )
  })
}

const Strategy = ({ actions }) => (
  <article className={style.article}>
    <table className={style.table}>
      <tbody>
        <tr className={style.dealer}>
          <td />
          {renderColumns()}
        </tr>
        <tr>
          <th>17–20</th>
          {renderColumns([10, 7])}
        </tr>
        <tr>
          <th>16</th>
          {renderColumns([10, 6])}
        </tr>
        <tr>
          <th>15</th>
          {renderColumns([10, 5])}
        </tr>
        <tr>
          <th>14</th>
          {renderColumns([8, 6])}
        </tr>
        <tr>
          <th>13</th>
          {renderColumns([8, 5])}
        </tr>
        <tr>
          <th>12</th>
          {renderColumns([8, 4])}
        </tr>
        <tr>
          <th>11</th>
          {renderColumns([6, 5])}
        </tr>
        <tr>
          <th>10</th>
          {renderColumns([6, 4])}
        </tr>
        <tr>
          <th>9</th>
          {renderColumns([6, 3])}
        </tr>
        <tr>
          <th>5–8</th>
          {renderColumns([5, 3])}
        </tr>
        <tr className={style.dealer}>
          <td />
          {renderColumns()}
        </tr>
        <tr>
          <th>
            <PlayerHand>A,9</PlayerHand>
          </th>
          {renderColumns(["A", 9], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>A,8</PlayerHand>
          </th>
          {renderColumns(["A", 8], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>A,7</PlayerHand>
          </th>
          {renderColumns(["A", 7], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>A,6</PlayerHand>
          </th>
          {renderColumns(["A", 6], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>A,4–A,5</PlayerHand>
          </th>
          {renderColumns(["A", 5], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>A,2–A,3</PlayerHand>
          </th>
          {renderColumns(["A", 3], false)}
        </tr>
        <tr className={style.dealer}>
          <td />
          {renderColumns()}
        </tr>
        <tr>
          <th>
            <PlayerHand>A,A</PlayerHand>
          </th>
          {renderColumns(["A", "A"], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>10,10</PlayerHand>
          </th>
          {renderColumns([10, 10], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>9,9</PlayerHand>
          </th>
          {renderColumns([9, 9], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>8,8</PlayerHand>
          </th>
          {renderColumns([8, 8], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>7,7</PlayerHand>
          </th>
          {renderColumns([7, 7], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>6,6</PlayerHand>
          </th>
          {renderColumns([6, 6], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>5,5</PlayerHand>
          </th>
          {renderColumns([5, 5], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>4,4</PlayerHand>
          </th>
          {renderColumns([4, 4], false)}
        </tr>
        <tr>
          <th>
            <PlayerHand>2,2–3,3</PlayerHand>
          </th>
          {renderColumns([3, 3], false)}
        </tr>
      </tbody>
    </table>

    <footer>
      {actions.map(({ onClick, label }, index) => (
        <p key={index}>
          <button onClick={onClick}>{label}</button>
        </p>
      ))}
    </footer>
  </article>
)

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(settingsActions, dispatch),
  ({ settings }, { toggleAuto }) => ({
    actions: [
      { label: "진행", name: "action" },
      { label: "시작", name: "start" },
    ].map(({ label, name }) => ({
      label: `자동 ${label} ${settings.auto[name] ? "끄기" : "켜기"}`,
      onClick: () => toggleAuto(name),
    })),
  })
)(Strategy)
