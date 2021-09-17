import React, { useState } from 'react'

/* Fonte */
import 'fontsource-roboto'

/* Routing */
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterConfig } from './routing/RouterConfig'

/* Css padrão */
import './App.css'

/* Provider responsavel por gerenciar os temas em toda a aplicação */
import { ThemeProvider } from '@mui/material/styles'
/* Temas customizados */
import { dark, light } from './styles/themes'

import { styled } from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './components/Header'

const Container = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  boxSizing: 'border-box',
  overflow: 'hidden'
}))

const BackgroundDiv = styled('div')(() => ({
  width: '100%',
  height: '100%'
}))

function App(): JSX.Element {
  const [darkState, setDarkState] = useState<boolean>(false)

  const handleThemeChange = () => setDarkState(!darkState)

  return (
    <Container>
      <ThemeProvider theme={darkState ? dark : light}>
        <Router>
          <CssBaseline />

          <Header changeTheme={handleThemeChange} darkState={darkState} />

          <BackgroundDiv>
            <RouterConfig />
          </BackgroundDiv>
        </Router>
      </ThemeProvider>
    </Container>
  )
}

export default App
