import React from 'react'
import { connect } from 'react-redux'
import getResult, { getReturn } from '../rules/getResult'

const Result = ({ result, prize }) => {
  const color = prize ? 'green' : 'red'
  const description = prize ? prize + ' 획득' : ''

  return (
    result && (
      <>
        <p style={{ color, fontSize: '200%', fontWeight: 'bold' }}>{result}</p>
        <p>{description}</p>
      </>
    )
  )
}

export default connect(({ players }, { playerKey }) => ({
  result: getResult(players, playerKey),
  prize: getReturn(players, playerKey)
}))(Result)
