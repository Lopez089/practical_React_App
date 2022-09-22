import React from 'react'

interface main {
  children: React.ReactElement
}

export const Main: React.FC<main> = ({ children }) => {
  return (
    <main role='main'>
      {children}
    </main>
  )
}
