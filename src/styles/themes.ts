import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ee7700',
    },
    error: {
      main: red.A400,
    },
  },
});

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#77bc1f',
    },
    error: {
      main: red.A400,
    },
  },
});