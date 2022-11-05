import { useState, ReactNode } from 'react'
import ThemeContext, { Theme } from '../context/ThemeContext'

interface ThemeProvider {
  children?: ReactNode
}

const ThemeProvider = ({ children }: ThemeProvider) => {
  const [theme, setTheme] = useState<Theme>('default')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider