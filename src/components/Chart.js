import React from 'react'
import Line from './Line'

const Chart = ({ max, children }) => (
  <ul>
    {children.map((line, i) => (
      <li key={i}>
        <Line {...line} max={max} index={children.length - i} />
      </li>
    ))}
  </ul>
)

export default Chart
