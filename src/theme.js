import { createTheme } from '@mui/material/styles';
import { indigo, green } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: green['A400'],
    },
  },
});

console.log(theme);
