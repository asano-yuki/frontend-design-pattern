import useThemeContext from './hooks/useThemeContext'

const App = () => {
  const { theme, setTheme } = useThemeContext()

  return (
    <>
      <h1>Provider Pattern</h1>
      <p>theme: {theme}</p>
      <button onClick={() => setTheme('default')}>change default</button>
      <button onClick={() => setTheme('dark')}>change dark</button>
    </>
  )
}

export default App