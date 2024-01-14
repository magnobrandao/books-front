import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from '@emotion/react';
import { DefaultTheme } from './shared/themes';



function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
