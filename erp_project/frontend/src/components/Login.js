// src/components/Login.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', data);
      // Salva il token in localStorage (o in un context dedicato)
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      enqueueSnackbar('Login effettuato con successo', { variant: 'success' });
      navigate('/customers'); // o la dashboard aziendale
    } catch (error) {
      enqueueSnackbar('Errore durante il login', { variant: 'error' });
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('username')}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('password')}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Accedi
        </Button>
      </form>
    </Box>
  );
};

export default Login;
