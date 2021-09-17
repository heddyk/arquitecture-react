import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ee7700'
    },
    error: {
      main: red.A400
    }
  }
})

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#77bc1f'
    },
    error: {
      main: red.A400
    }
  }
})
