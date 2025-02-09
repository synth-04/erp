// src/App.js

import React from 'react';
import CustomerList from './components/CustomerList';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './theme'
import Navbar from './components/Navbar';

function App() {
    return (
        <ThemeProvider theme={myTheme}>
            <Navbar />
            <Routes>
            <Route path="/customers" element={<CustomerList />} />
        {/* Aggiungi altre rotte se necessario */}
      </Routes>
            <CustomerList />
        </ThemeProvider>
    );
}

export default App;

