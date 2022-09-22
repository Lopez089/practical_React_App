import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, NoMatch, Config, SignUp, SignIn } from '../pages/index'

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/about' element={<About />} />
      <Route path='/config' element={<Config />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}
