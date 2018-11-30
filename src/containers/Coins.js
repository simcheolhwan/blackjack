import React from 'react'
import { connect } from 'react-redux'
import Box from '../components/Box'

const Coins = ({ coins }) => <Box title="보유">{String(coins)}만원</Box>
export default connect(({ coins }) => ({ coins }))(Coins)
