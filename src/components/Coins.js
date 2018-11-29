import React from 'react'
import { connect } from 'react-redux'
const Coins = ({ coins }) => <p style={{ textAlign: 'center' }}>{coins}만원</p>
export default connect(({ coins }) => ({ coins }))(Coins)
