import React from 'react'
import { it, describe, beforeEach, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignIn } from '../pages/index'
import '@testing-library/jest-dom'

describe('page signIn', () => {
  beforeEach(() => {
    render(<SignIn />)
  })

  it('should render to nav', () => {
    screen.getByRole('nav')
  })

  it('should render to main', () => {
    screen.getByRole('main')
  })
})

describe('compoent main page signIn', () => {
  beforeEach(() => {
    render(<SignIn />)
  })
  it('should show text WELCOME BACK!', () => {
    screen.getByText('WELCOME BACK!')
  })

  it('should show text Don´t have a account.', () => {
    screen.getByText('Don´t have a account.')
  })

  it('should show text Sing up con una enlace a la pagina singup', () => {
    const element = screen.getByText('Sign up')
    expect(element).toHaveAttribute('href', '/signUp')
  })

  it('should show component form-signIn', () => {
    screen.getByRole('form-signIn')
  })

  it('should show img', () => {
    screen.getByAltText('imgHead')
  })
})
