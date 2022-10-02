import React from 'react'
import { it, describe, beforeEach, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignIn } from '../pages/index'
import { MemoryRouter } from 'react-router-dom'
import { FormSingIn } from '../components/index'
import { userEvents } from '@testing-library/user-event'
import '@testing-library/jest-dom'

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
  it('should to labe username', () => {
    render(<FormSingIn />)
    screen.getByLabelText('Username')
  })

  it('should to placeolder daniel123@gmail.com', () => {
    render(<FormSingIn />)
    screen.getByPlaceholderText('daniel123@gmail.com')
  })

  it('should to labe Password', () => {
    render(<FormSingIn />)
    screen.getByLabelText('Password')
  })

  it('should to placeolder password', () => {
    render(<FormSingIn />)
    screen.getByPlaceholderText('password')
  })

  it.skip('Should click user to button signIn run function signIn', () => {
    const handleSingIn = vi.fn()

    // render(<FormSingIn submit={handleSingIn} />)

    const user = userEvents.setup()
    const element = screen.getByText('SignIn')
    user.click(element)

    expect(handleSingIn).toBeCalled()
  })

  it('should show text or continue with', () => {
    render(<FormSingIn />)

    screen.getByText('or continue with')
  })

  it.todo('should click to signin rrss to run funcion ', () => {

  })

  it.todo('should click to show pasword and passowd to show and vice versa', () => {

  })
})
