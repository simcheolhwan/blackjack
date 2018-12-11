import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as settingsActions from '../actions/settings'
import style from './Strategy.module.scss'
import PlayerHand from '../components/PlayerHand'

const Strategy = ({ actions }) => (
  <article className={style.article}>
    <table className={style.table}>
      <tbody>
        <tr className={style.dealer}>
          <td />
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>A</td>
        </tr>
        <tr>
          <th>17–20</th>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
        </tr>
        <tr>
          <th>16</th>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.su}>SU</td>
          <td className={style.su}>SU</td>
          <td className={style.su}>SU</td>
        </tr>
        <tr>
          <th>15</th>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.su}>SU</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>13–14</th>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>

        <tr>
          <th>12</th>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>11</th>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>10</th>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>9</th>
          <td className={style.h}>H</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>5–8</th>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr className={style.dealer}>
          <td />
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>A</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>A,8–A,9</PlayerHand>
          </th>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>A,7</PlayerHand>
          </th>
          <td className={style.s}>S</td>
          <td className={style.dh}>Ds</td>
          <td className={style.dh}>Ds</td>
          <td className={style.dh}>Ds</td>
          <td className={style.dh}>Ds</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>A,6</PlayerHand>
          </th>
          <td className={style.h}>H</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>A,4–A,5</PlayerHand>
          </th>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>A,2–A,3</PlayerHand>
          </th>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr className={style.dealer}>
          <td />
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>A</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>A,A</PlayerHand>
          </th>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>10,10</PlayerHand>
          </th>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>9,9</PlayerHand>
          </th>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.s}>S</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.s}>S</td>
          <td className={style.s}>S</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>8,8</PlayerHand>
          </th>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>7,7</PlayerHand>
          </th>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>6,6</PlayerHand>
          </th>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>5,5</PlayerHand>
          </th>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.dh}>Dh</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>4,4</PlayerHand>
          </th>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
        </tr>
        <tr>
          <th>
            <PlayerHand>2,2–3,3</PlayerHand>
          </th>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.sp}>SP</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
          <td className={style.h}>H</td>
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
  state => state,
  dispatch => bindActionCreators(settingsActions, dispatch),
  ({ settings }, { toggleAuto }) => ({
    actions: [
      { label: '진행', name: 'action' },
      { label: '시작', name: 'start' }
    ].map(({ label, name }) => ({
      label: `자동 ${label} ${settings.auto[name] ? '끄기' : '켜기'}`,
      onClick: () => toggleAuto(name)
    }))
  })
)(Strategy)
