import React from 'react'
import { it, describe, beforeEach, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignIn } from '../pages/index'
import { MemoryRouter } from 'react-router-dom'
import { FormSingIn } from '../components/index'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const handleSingIn = vi.fn(() => 'a')

describe.skip('page signIn', () => {
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
    render(<MemoryRouter><SignIn /></MemoryRouter>)
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

describe('form signIn', () => {
  beforeEach(() => {
    render(<FormSingIn handleSingIn={handleSingIn} />)
  })
  it('should to labe username', () => {
    screen.getByLabelText('Username')
  })

  it('should to placeolder daniel123@gmail.com', () => {
    screen.getByPlaceholderText('daniel123@gmail.com')
  })

  it('should to labe Password', () => {
    screen.getByLabelText('Password')
  })

  it('should to placeolder password', () => {
    screen.getByPlaceholderText('password')
  })

  it('Should click user to button signIn run function signIn', () => {
    const user = userEvent.setup()
    const element = screen.getByText('SignIn')
    user.click(element)

    expect(handleSingIn).toHaveBeenCalledTimes(1)
  })

  it('should show text or continue with', () => {
    screen.getByText('or continue with')
  })

  it.todo('should click to signin rrss to run funcion ', () => {

  })

  it.todo('should click to show pasword and passowd to show and vice versa', () => {

  })
})
