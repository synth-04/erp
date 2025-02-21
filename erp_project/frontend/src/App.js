// src/App.js

import React from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './theme'
import Navbar from './components/Navbar';

function App() {

    const isAuthenticated = !!localStorage.getItem('accessToken');

    return (
        <ThemeProvider theme={myTheme}>
            <Navbar />
            <Routes>

                {/* Rotte pubbliche */}
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />

                {/* Rotta di default: se autenticato, vai a dashboard, altrimenti reindirizza a /login */}
                <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />

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

                {/* Per ogni altra rotta non definita, reindirizza a "/" */}
                <Route path="*" element={<Navigate to="/" />} />
                
                {/* Aggiungi altre rotte se necessario */}
            </Routes>
        </ThemeProvider>
    );
}

export default App;

