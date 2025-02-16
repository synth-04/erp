// src/components/Register.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

// Schema di validazione con Yup
const schema = yup.object().shape({
  username: yup.string().required('Il username è obbligatorio'),
  email: yup.string().email('Email non valida').required('L\'email è obbligatoria'),
  password: yup.string().min(6, 'La password deve contenere almeno 6 caratteri').required('La password è obbligatoria'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Le password non corrispondono')
    .required('Conferma la password'),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data) => {
    try {
      // Puoi modificare l'endpoint in base alla tua configurazione del backend
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      enqueueSnackbar('Registrazione avvenuta con successo!', { variant: 'success' });
      navigate('/login'); // Dopo la registrazione, reindirizza al login
    } catch (error) {
      enqueueSnackbar('Errore durante la registrazione', { variant: 'error' });
      console.error(error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>Registrazione</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('username')}
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ''}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <TextField
          label="Conferma Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Registrati
        </Button>
      </form>
    </Box>
  );
};

export default Register;
