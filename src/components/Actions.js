import React from 'react'
import Button from './Button'

const Actions = ({ actions }) => (
  <section>
    {actions.map(
      (action, index) => action && <Button {...action} key={index} />
    )}
  </section>
)

export default Actions
