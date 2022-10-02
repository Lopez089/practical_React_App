import React from 'react'
import { Box, Input, Button, Text } from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiGoogleLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'

export const FormSingIn = () => {
  return (
    <Box
      as='section'
      role='form-signIn'
      p='2rem 6rem 2rem 0'
      color='gray.600'
    >
      <Box
        as='form'
        action=""
        display='grid'
        gap='1rem'
      >
        <Box display='grid' gap='.5rem'>
          <label htmlFor="username-input">Username</label>
          <Input
            id="username-input"
            type="text"
            name="username"
            placeholder="daniel123@gmail.com"
            focusBorderColor='#FD8369'
          />
        </Box>
        <Box display='grid' gap='.5rem'>
          <label htmlFor='password-input'>Password</label>
          <Input
            id='password-input'
            type="password"
            name="password"
            placeholder="password"
            focusBorderColor='#FD8369'
          />
        </Box>
        <Button
          bg='#FD8369'
          color='white'
          _hover={{ bg: '#e36346' }}
        >
          SignIn
        </Button>
        <Box
          display='grid'
          gridTemplateColumns='1fr 1fr 1fr'
          alignItems='center'
          gap='1rem'
          mt='2rem'
        >
          <Box as='hr' border='.5px  solid #FD8369' />
          <Text fontSize='sm'>or continue with</Text>
          <Box as='hr' border='.5px  solid #FD8369' />
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
        >

          <Button
            border='.5px  solid #FD8369'
            bg='none'
            _hover={{ bg: '#fdf5f4' }}
            py='1.5rem'
          >
            <IconContext.Provider value={{ color: '#4A5567', size: '1.5rem' }}>
              <FiGithub />
            </IconContext.Provider>
          </Button>
          <Button
            border='.5px  solid #FD8369'
            bg='none'
            _hover={{ bg: '#fdf5f4' }}
            py='1.5rem'
          >
            <IconContext.Provider value={{ color: '', size: '1.5rem' }}>
              <FiLinkedin />
            </IconContext.Provider>
          </Button>
          <Button
            border='.5px  solid #FD8369'
            bg='none'
            _hover={{ bg: '#fdf5f4' }}
            py='1.5rem'
          >
            <IconContext.Provider value={{ color: '', size: '1.5rem' }}>
              <RiGoogleLine />
            </IconContext.Provider>
          </Button>

        </Box>
      </Box>
    </ Box >
  )
}
