import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<QueryClientProvider client={queryClient}>
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </QueryClientProvider>
);
