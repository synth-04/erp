// src/App.js

import React from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './theme'
import Navbar from './components/Navbar';

function App() {
    return (
        <ThemeProvider theme={myTheme}>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                
                {/* Rotte protette */}
                <Route path="/customers" element={
                    <ProtectedRoute>
                        <CustomerList />
                    </ProtectedRoute>
                } />
                <Route path="/customers/new" element={
                    <ProtectedRoute>
                        <CustomerForm />
                    </ProtectedRoute>
                } />
                <Route path="/customers/edit/:id" element={
                    <ProtectedRoute>
                        <CustomerForm />
                    </ProtectedRoute>
                } />
                {/* Aggiungi altre rotte se necessario */}
            </Routes>
        </ThemeProvider>
    );
}

export default App;

