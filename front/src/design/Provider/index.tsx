import ThemeProvider from './provider/ThemeProvider'
import App from './App'

const Provider = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default Provider