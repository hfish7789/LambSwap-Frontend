import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber[20],
      ...(mode === 'dark' && {
        main: '#34F14B',
      }),
    },
    secondary: {
      ...(mode === 'dark' && {
        main: '#4C6DD1',
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: '#000000',
        paper: '#000000',
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#FFFFFF',
            secondary: '#7E8B74',
          }),
    },
  },
});
// ** Declare Theme Provider
const MaterialThemeProvider = ({ children }) => {

    const darkTheme = createTheme(getDesignTokens('dark'));
    return (
        <ThemeProvider theme={darkTheme}>
            {children}
        </ThemeProvider>
    );
};

export default MaterialThemeProvider;
