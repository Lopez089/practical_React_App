import React from 'react'
import { main } from '../../interface/index'
import { Container } from '../container/container'
import { Box } from '@chakra-ui/react'

export const Main: React.FC<main> = ({ children }) => {
  return (
    <Box
      as='main'
      role='main'
      h='90vh'
    >
      <Container>
        {children}
      </Container>
    </Box>
  )
}
