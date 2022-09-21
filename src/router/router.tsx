import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About } from '../pages/index'

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}></Route>
    </Routes>
  )
}
