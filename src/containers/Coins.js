import React from 'react'
import { connect } from 'react-redux'
import Box from '../components/Box'

const Coins = ({ coins }) => <Box>{String(coins)}</Box>
export default connect(({ coins }) => ({ coins }))(Coins)
