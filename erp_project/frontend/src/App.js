// src/App.js

import React from 'react';
import CustomerList from './components/CustomerList';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './theme'
import Navbar from './components/Navbar';

function App() {
    return (
        <ThemeProvider theme={myTheme}>
            <Navbar />
            <CustomerList />
        </ThemeProvider>
    );
}

export default App;

