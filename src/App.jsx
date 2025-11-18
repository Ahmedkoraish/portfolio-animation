import { ThemeProvider } from '@emotion/react'
import './App.css'
import Home from './page/Home'
import theme from './theme/theme.js'

function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
