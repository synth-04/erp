import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#1E3A5F', // Blu Navy - colore principale
    },
    secondary: {
      main: '#FFC857', // Giallo Ocra - accento per pulsanti e interazioni
    },
    background: {
      default: '#E5E5E5', // Grigio Chiaro - colore di sfondo principale
      paper: '#FFFFFF', // Bianco per le card e aree di contenuto
    },
    text: {
      primary: '#3A3A3A', // Grigio Scuro - colore per il testo principale
      secondary: '#5A5A5A', // Grigio leggermente più chiaro per il testo secondario
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#1E3A5F',
          color: '#FFFFFF',
          ':hover': {
            backgroundColor: '#162A45', // Colore più scuro per l'hover
          },
        },
        containedSecondary: {
          backgroundColor: '#FFC857',
          color: '#1E3A5F',
          ':hover': {
            backgroundColor: '#FFB626', // Colore più scuro di Giallo Ocra per l'hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#1E3A5F', // Blu Navy per la navbar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // Bianco per le card
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: 12,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          color: '#1E3A5F', // Blu Navy per i titoli principali
        },
        body1: {
          color: '#3A3A3A', // Grigio scuro per il testo principale
        },
        body2: {
          color: '#5A5A5A', // Grigio secondario per testo descrittivo o meno importante
        },
      },
    },
  },
});

export default myTheme;
