import React from 'react'
import { Box } from '@chakra-ui/react'
import { container } from '../../interface/index'

export const Container = ({ children }: container) => {
  return (
    <Box
      display='grid'
      gridTemplateColumns='1fr 960px 1fr'
      h='100%'
    >
      <Box
        gridArea='1/2'
      >
        {children}
      </Box>
    </Box >
  )
}
