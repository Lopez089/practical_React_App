import React from 'react'
import { it, expect, describe } from 'vitest'
import { screen, render } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { App } from '../App'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('routers', () => {
  it('shout tobe click about to about and about click home go to home', async () => {
    render(<BrowserRouter><App /></BrowserRouter >)
    const user = userEvent.setup()
    expect(await screen.findByText('home'))

    await user.click(screen.getByText('about'))
    expect(screen.getByText('you are on the about page'))

    await user.click(screen.getByText('home'))
    expect(screen.getByText('home'))
  })

  it('should go a path that no match and redirect to the no match page', async () => {
    render(
      <MemoryRouter initialEntries={['/hola']}>
        < App />
      </MemoryRouter >
    )
    expect(await screen.findByText('no match'))
  })

  it('should tobe click link config go to page config and click to home to go page home', async () => {
    render(<BrowserRouter><App /></BrowserRouter>)
    const user = userEvent.setup()

    await user.click(screen.getByText('config'))
    screen.getByText('you config to app')

    await user.click(screen.getByText('home'))
    screen.getByText('home')
  })

  it('shold go patch SignIn to go page SignIn', () => {
    render(
      <MemoryRouter initialEntries={['/signIn']}>
        <App />
      </MemoryRouter>
    )

    screen.getByText('SignIn')
  })

  it('shold go patch signUp to go page signUp', () => {
    render(
      <MemoryRouter initialEntries={['/signUp']}>
        <App />
      </MemoryRouter>
    )

    screen.getByText('SignUp')
  })
})
