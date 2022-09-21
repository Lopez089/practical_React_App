import React from 'react'
import { it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { App } from '../App'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

it('shout tobe click about to about and about click home go to home', async () => {
  render(<BrowserRouter><App /></BrowserRouter >)
  const user = userEvent.setup()
  expect(await screen.findByText('home'))

  await user.click(screen.getByText('about'))
  expect(screen.getByText('you are on the about page'))

  await user.click(screen.getByText('home'))
  expect(screen.getByText('home'))
})
