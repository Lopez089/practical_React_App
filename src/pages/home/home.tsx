import React from 'react'
import { Link } from 'react-router-dom'
import { CoreNote } from '../../components/index'

export const Home = () => {
  return (
    <>
      home
      <Link to="/about">about</Link>
      <Link to='/config'>config</Link>
      <div>
        <CoreNote />
      </div>
    </>
  )
}
