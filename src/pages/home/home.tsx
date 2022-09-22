import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      home
      <Link to="/about">about</Link>
      <Link to='/config'>config</Link>
    </>
  )
}
