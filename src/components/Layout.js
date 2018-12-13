import React from 'react'
import FixedHeader from './FixedHeader'

const Layout = ({ header, children }) => (
  <>
    <FixedHeader>{header}</FixedHeader>
    {children}
  </>
)

export default Layout
