import React from 'react'
import Line from './Line'

const Chart = ({ max, children }) => (
  <ul>
    {children.map((n, i) => (
      <li key={i}>
        <Line number={n} max={max} index={children.length - i} />
      </li>
    ))}
  </ul>
)

export default Chart
