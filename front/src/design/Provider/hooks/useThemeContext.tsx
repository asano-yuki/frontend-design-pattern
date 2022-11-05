import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useThemeContext has to be used within ThemeProvider')
  return context
}

export default useThemeContext