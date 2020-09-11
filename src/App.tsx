import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/theme/default';

import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
