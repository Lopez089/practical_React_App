import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, NoMatch, Config, Login, SignIn } from '../pages/index'

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/about' element={<About />} />
      <Route path='/config' element={<Config />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}
