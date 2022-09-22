import React from 'react'
import { Container } from '../index'
import logo from '../../assets/logo.png'
import { Image, Box } from '@chakra-ui/react'

export const Nav = () => {
  return (
    <Box
      role='nav'
      p='1.5rem'
    >
      <Container>
        <Image
          src={logo}
          alt="logo"
          w='120px'
        />
      </Container>
    </Box>
  )
}
