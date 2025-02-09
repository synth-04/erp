// src/components/CustomerList.js

import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { getCustomers, deleteCustomer } from '../services/customerservice';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CustomerList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Nuova firma di useQuery con oggetto
  const { data: customers = [], isLoading, error } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
  });

  const mutationDelete = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      enqueueSnackbar('Cliente eliminato con successo', { variant: 'success' });
    },
    onError: () => {
      enqueueSnackbar('Errore durante l\'eliminazione del cliente', { variant: 'error' });
    },
  });

  const [selectedCustomer, setSelectedCustomer] = React.useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

  // Naviga alla pagina di modifica quando viene cliccata una riga
  const handleRowClick = (params) => {
    navigate(`/customers/edit/${params.row.id}`);
  };

  const handleDeleteClick = (customer) => {
    setSelectedCustomer(customer);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    mutationDelete.mutate(selectedCustomer.id);
    setDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setSelectedCustomer(null);
  };

  // Definizione delle colonne includendo tutti i campi desiderati
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'phone', headerName: 'Telefono', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'website', headerName: 'Sito Web', flex: 1 },
    { field: 'cf', headerName: 'Codice Fiscale', flex: 1 },
    { field: 'piva', headerName: 'Partita IVA', flex: 1 },
    { field: 'address', headerName: 'Indirizzo', flex: 1 },
    {
      field: 'actions',
      headerName: 'Azioni',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteClick(params.row);
          }}
        >
          Elimina
        </Button>
      ),
    },
  ];

  if (isLoading) {
    return <Typography>Caricamento...</Typography>;
  }

  if (error) {
    return <Typography>Errore nel caricamento dei clienti.</Typography>;
  }

  return (
    <Box sx={{ height: 500, width: '100%', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista Clienti
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => navigate('/customers/new')}>
        Aggiungi Cliente
      </Button>
      <DataGrid
        getRowId={(row) => row.id}  // usa id come identificatore
        rows={customers}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        onRowClick={handleRowClick}
      />
      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Conferma Eliminazione</DialogTitle>
        <DialogContent>
          <Typography>
            Sei sicuro di voler eliminare il cliente {selectedCustomer ? selectedCustomer.name : ''}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Annulla</Button>
          <Button onClick={handleDeleteConfirm} color="error">Elimina</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CustomerList;
