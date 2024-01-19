import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from '@emotion/react';
import { DefaultTheme } from './shared/themes';
import { CssBaseline } from '@mui/material';



function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
