import React from 'react'
import Line from './Line'

const Chart = ({ max, children }) =>
  children.length ? (
    <ul>
      {children.slice(0, 100).map((n, i) => (
        <li key={i}>
          <Line number={n} max={max} index={children.length - i} />
        </li>
      ))}
    </ul>
  ) : null

export default Chart
