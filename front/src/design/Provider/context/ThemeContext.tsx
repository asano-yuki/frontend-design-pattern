import { createContext, Dispatch, SetStateAction } from 'react'

export type Theme = 'default' | 'dark'

export interface ThemeContext {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

const ThemeContext = createContext<ThemeContext | null>(null)

export default ThemeContext