import React from 'react'
import { connect } from 'react-redux'
import { UNIT } from '../rules/constants'
import Wager from '../components/Wager'
import Finite from '../components/Finite'

export default connect(({ bank, player }) => ({
  small: bank * UNIT > 9999,
  children: <Finite>{bank * UNIT}</Finite>
}))(Wager)
