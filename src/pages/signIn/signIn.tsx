import React from 'react'
import { Nav, Main, FormSingIn } from '../../components/index'
import imgHead from '../../assets/imgHead.png'
import { Box, Image, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface layoutAuth {
  children: React.ReactNode[]
  img: React.ReactElement
}

export const LayoutAuth = ({ children, img }: layoutAuth) => {
  return (
    <Box
      display='grid'
      gridTemplateColumns='1fr 1fr'
      h='100%'
    >
      <Flex
        justifyContent='center'
        flexDirection='column'
      >
        {children}
      </Flex>
      <Flex
        justifyContent='center'
        alignItems='center'
      >
        {img}
      </Flex>
    </Box>
  )
}

const handleSignIn = () => {
  console.log('a')

  return 'asf'
}

export const SignIn = () => {
  return (
    <Box
      h='100vh'
    >
      <Nav />
      <Main>
        <LayoutAuth
          img={<Image src={imgHead} alt="imgHead" />}
        >
          <Text color='gray.600' fontSize='3xl'>WELCOME BACK!</Text>
          <Flex>
            <Text
              fontSize='sm'
              color='gray.600'
            >
              Don´t have a account.
            </Text>
            <Text fontSize='sm' color='#FD8369'>
              <Link
                to="/signUp"
              >
                &nbsp; Sign up
              </Link>
            </Text>
          </Flex>
          <FormSingIn handleSingIn={handleSignIn} />
        </LayoutAuth>
      </Main>
    </Box>
  )
}
