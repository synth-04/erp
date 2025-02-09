// src/components/CustomerForm.js

import React, { useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createCustomer, updateCustomer } from '../services/customerservice';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Il nome è obbligatorio'),
  phone: yup.string().required('Il telefono è obbligatorio'),
  email: yup.string().email('Email non valida').required('L\'email è obbligatoria'),
  website: yup.string().nullable(),
  cf: yup.string().nullable(),
  piva: yup.string().nullable(),
  address: yup.string().nullable(),
});

const CustomerForm = () => {
  const { id } = useParams();
  console.log('Parametro id:', id); // Debug
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { data: customerData, isLoading } = useQuery({
    queryKey: ['customer', id],
    queryFn: async () => {
      if (id) {
        const response = await axios.get(`http://127.0.0.1:8000/api/customers/${id}/`);
        console.log('Dati ricevuti dal server:', response.data); // Debug
        return response.data;
      }
      return null;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (customerData) {
      console.log("Popolamento form con:", customerData);
      reset(customerData);
    }
  }, [customerData, reset]);

  const mutation = useMutation({
    mutationFn: (data) => {
      if (id) {
        return updateCustomer(id, data);
      } else {
        return createCustomer(data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      enqueueSnackbar(id ? 'Cliente aggiornato con successo' : 'Cliente creato con successo', { variant: 'success' });
      navigate('/customers');
    },
    onError: () => {
      enqueueSnackbar('Errore durante il salvataggio del cliente', { variant: 'error' });
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  if (id && isLoading) {
    return <Typography>Caricamento dati...</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {id ? 'Modifica Cliente' : 'Aggiungi Cliente'}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ''}
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
          label="Sito Web"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('website')}
          error={!!errors.website}
          helperText={errors.website ? errors.website.message : ''}
        />
        <TextField
          label="Codice Fiscale"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('cf')}
          error={!!errors.cf}
          helperText={errors.cf ? errors.cf.message : ''}
        />
        <TextField
          label="Partita IVA"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('piva')}
          error={!!errors.piva}
          helperText={errors.piva ? errors.piva.message : ''}
        />
        <TextField
          label="Indirizzo"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('address')}
          error={!!errors.address}
          helperText={errors.address ? errors.address.message : ''}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={() => navigate('/customers')}>
            Annulla
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {id ? 'Aggiorna' : 'Crea'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CustomerForm;