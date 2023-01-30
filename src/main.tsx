import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { CartContextProvider } from './contexts/CartContext';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <GlobalStyle />
          <App />
        </CartContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
