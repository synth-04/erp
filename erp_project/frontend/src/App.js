// src/App.js

import React from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
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
            <Route path="/customers/new" element={<CustomerForm />} />
            <Route path="/customers/edit/:id" element={<CustomerForm />} />
        {/* Aggiungi altre rotte se necessario */}
      </Routes>
        </ThemeProvider>
    );
}

export default App;

