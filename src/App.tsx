import React from 'react'
import './App.css'
import { RoutesProvider } from './router/router'

export const App: React.FC = () => {
  return (
    <div className="App">
      <RoutesProvider />
    </div >
  )
}

export default App
