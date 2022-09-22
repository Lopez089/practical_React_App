import React from 'react'
import { Nav, Main, FormSingIn } from '../../components/index'
import imgHead from '../../assets/imgHead.png'
export const SignIn = () => {
  return (
    <>
      <Nav />
      <Main>
        <p>SignIn</p>
        <p>WELCOME BACK!</p>
        <p>Don´t have a account.</p>
        <a href="/signUp">Sign up</a>
        <FormSingIn />
        <img src={imgHead} alt="imgHead" />
      </Main>
    </>
  )
}
