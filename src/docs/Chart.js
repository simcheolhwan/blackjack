import React from 'react'
import Line from './Line'

const Chart = ({ max, children }) =>
  children.map((line, i) => (
    <Line {...line} max={max} index={children.length - i} key={i} />
  ))

export default Chart
