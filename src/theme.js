// theme.js or theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
   xs: 0,
      sm: 600,
      md: 768, // change from 900 to 768 or any lower number
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
