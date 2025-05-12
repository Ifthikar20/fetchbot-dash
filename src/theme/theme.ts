import { createTheme } from '@mui/material/styles';

// Define theme settings
const theme = (mode: 'light' | 'dark') => {
  const colors = {
    primary: {
      light: '#E3F2FD',
      main: '#1E88E5', // Blue
      dark: '#0D47A1',
      200: '#90CAF9',
      800: '#0D47A1'
    },
    secondary: {
      light: '#FFF3E0',
      main: '#FF9800', // Orange
      dark: '#EF6C00',
      200: '#FFCC80',
      800: '#EF6C00'
    },
    success: {
      light: '#B9F6CA',
      main: '#00E676',
      dark: '#00C853'
    },
    error: {
      light: '#EF9A9A',
      main: '#F44336',
      dark: '#C62828'
    },
    warning: {
      light: '#FFF8E1',
      main: '#FFB74D',
      dark: '#F57F17'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      900: '#212121'
    }
  };

  return createTheme({
    palette: {
      mode,
      primary: {
        light: colors.primary.light,
        main: colors.primary.main,
        dark: colors.primary.dark
      },
      secondary: {
        light: colors.secondary.light,
        main: colors.secondary.main,
        dark: colors.secondary.dark
      },
      error: {
        light: colors.error.light,
        main: colors.error.main,
        dark: colors.error.dark
      },
      warning: {
        light: colors.warning.light,
        main: colors.warning.main,
        dark: colors.warning.dark
      },
      success: {
        light: colors.success.light,
        main: colors.success.main,
        dark: colors.success.dark
      },
      grey: colors.grey,
      background: {
        default: mode === 'dark' ? '#1a223f' : '#f4f5fa',
        paper: mode === 'dark' ? '#111936' : '#ffffff'
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#2f3542',
        secondary: mode === 'dark' ? '#adb5bd' : '#6c757d'
      }
    },
    typography: {
      fontFamily: "'Geist', sans-serif",
      h1: {
        fontWeight: 600,
        fontSize: '2.5rem',
        lineHeight: 1.21
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.27
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.33
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4
      },
      h5: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.5
      },
      h6: {
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: 1.57
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: '12px'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: '12px'
          }
        }
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            padding: '24px'
          },
          title: {
            fontSize: '1.125rem'
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '24px'
          }
        }
      }
    }
  });
};

export default theme;