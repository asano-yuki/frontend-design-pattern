import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ThemeContext from './context/ThemeContext'
import App from './App'

describe('Provider Test', () => {
  test('show theme name', async () => {
    render(
      <ThemeContext.Provider value={{ theme: 'default', setTheme: jest.fn() }}>
        <App />
      </ThemeContext.Provider>
    )
    const elem = await screen.findByTestId('theme')
    expect(elem.textContent).toBe('theme: default')
  })
})