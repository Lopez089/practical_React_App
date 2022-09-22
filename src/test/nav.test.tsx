import React from 'react'
import { it, describe } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Nav } from '../components/index'

describe('component nav', () => {
  it('should render to logo', () => {
    render(<Nav />)
    screen.getByAltText('logo')
  })
})
