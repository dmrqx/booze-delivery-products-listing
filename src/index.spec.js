import { screen } from '@testing-library/react'

describe('index.js', () => {
  test('app renders without crashing', () => {
    require('./index')

    const homeText = screen.getByText(/receba sua bebida favorita/i)

    expect(homeText).toBeInTheDocument()
  })
})
