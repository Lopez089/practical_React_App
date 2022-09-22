import React from 'react'
import { main } from '../../interface/index'

export const Main: React.FC<main> = ({ children }) => {
  return (
    <main role='main'>
      {children}
    </main>
  )
}
