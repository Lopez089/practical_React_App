import React from 'react'
import { it, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignIn } from '../pages/index'

describe('page signIn', () => {
  beforeEach(() => {
    render(<SignIn />)
  })

  it('should render to nav', () => {
    screen.getByRole('nav')
  })

  it.todo('should render to main', () => {
    screen.getByRole('main')
  })
})
