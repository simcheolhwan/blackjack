import React from 'react'
import { connect } from 'react-redux'
import getResult from '../rules/getResult'

const Result = ({ result }) => (result ? <p>{result}</p> : null)

export default connect(({ players }, { playerKey }) => {
  const result = getResult(players, playerKey)
  return { result }
})(Result)
