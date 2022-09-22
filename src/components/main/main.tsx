import React from 'react'
import { main } from '../../interface/index'
import { Container } from '../container/container'

export const Main: React.FC<main> = ({ children }) => {
  return (
    <main role='main'>
      <Container>
        {children}
      </Container>
    </main>
  )
}
