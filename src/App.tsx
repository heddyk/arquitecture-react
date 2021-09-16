import React, { useState } from 'react';

/* Fonte */
import 'fontsource-roboto'

/* Routing */
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterConfig } from './routing/RouterConfig'

/* Css padrão */
import './App.css';

/* Provider responsavel por gerenciar os temas em toda a aplicação */
import { ThemeProvider } from '@material-ui/core/styles';
/* Temas customizados */
import { dark, light } from './styles/themes';

import { Button } from '@material-ui/core';

import { styled } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline';

const BackgroundDiv = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: theme.palette.background.default
}))

function App(): JSX.Element {
  const [darkState, setDarkState] = useState<boolean>(false)

  const handleThemeChange = () => setDarkState(!darkState)

  return (
    <>
      <ThemeProvider theme={darkState ? dark : light}>
        <CssBaseline />

        <BackgroundDiv>
          <h1>Hello</h1>

          <Button onClick={handleThemeChange}>
            Trocar tema
          </Button>

          <Router>
            <RouterConfig />
          </Router>
        </BackgroundDiv>

      </ThemeProvider>
    </>
  );
}

export default App;
