import React from 'react'
import { connect } from 'react-redux'
import getResult, { getReturn } from '../rules/getResult'

const Result = ({ result, color }) =>
  result ? (
    <p style={{ color, fontSize: '200%', fontWeight: 'bold' }}>{result}</p>
  ) : null

export default connect(({ players }, { playerKey }) => {
  const result = getResult(players, playerKey)
  const prize = getReturn(players, playerKey)
  const color = prize ? 'green' : 'red'
  return { result, color }
})(Result)
