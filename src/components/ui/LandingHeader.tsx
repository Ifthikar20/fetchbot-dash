'use client';

import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack
} from '@mui/material';

// Icons
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchIcon from '@mui/icons-material/Search';

// Theme Context
import { ThemeContext } from '@/theme/ThemeProvider';

interface LandingHeaderProps {
  transparent?: boolean;
}

const LandingHeader = ({ transparent = false }: LandingHeaderProps) => {
  const theme = useTheme();
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);
  const [openSignupDialog, setOpenSignupDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Scroll trigger for header background
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });

  // Handle dialog open/close
  const handleOpenSignupDialog = () => {
    setOpenSignupDialog(true);
  };

  const handleCloseSignupDialog = () => {
    setOpenSignupDialog(false);
  };

  // Handle signup form submit
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup with:', { name, email, password });
    handleCloseSignupDialog();
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrollTrigger ? 2 : 0}
        sx={{
          bgcolor: transparent && !scrollTrigger 
            ? 'transparent' 
            : theme.palette.background.paper,
          transition: 'all 0.3s ease',
          backdropFilter: scrollTrigger ? 'blur(10px)' : 'none',
          borderBottom: scrollTrigger ? `1px solid ${theme.palette.divider}` : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
              {/* Logo */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color={transparent && !scrollTrigger ? 'white' : theme.palette.text.primary}
                  sx={{ 
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    '& span': {
                      color: theme.palette.secondary.main
                    }
                  }}
                >
                  Fetch<span>bot</span>
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1 }} />

              {/* Navigation Links - center */}
              <Box sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                gap: 4, 
                mx: 4 
              }}>
                <Button 
                  color="inherit" 
                  sx={{ 
                    color: transparent && !scrollTrigger ? 'white' : theme.palette.text.primary
                  }}
                >
                  Jobs
                </Button>
                <Button 
                  color="inherit"
                  sx={{ 
                    color: transparent && !scrollTrigger ? 'white' : theme.palette.text.primary
                  }}
                >
                  Housing
                </Button>
                <Button 
                  color="inherit"
                  sx={{ 
                    color: transparent && !scrollTrigger ? 'white' : theme.palette.text.primary
                  }}
                >
                  Cafes
                </Button>
                <Button 
                  color="inherit"
                  sx={{ 
                    color: transparent && !scrollTrigger ? 'white' : theme.palette.text.primary
                  }}
                >
                  Explore
                </Button>
              </Box>

              {/* Right side actions */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Theme toggle button */}
                <IconButton
                  sx={{ 
                    color: transparent && !scrollTrigger ? 'white' : theme.palette.text.primary
                  }}
                  onClick={toggleThemeMode}
                >
                  {themeMode === 'dark' ? (
                    <LightModeOutlinedIcon fontSize="small" />
                  ) : (
                    <DarkModeOutlinedIcon fontSize="small" />
                  )}
                </IconButton>
                
                {/* Sign Up Button */}
                <Button 
                  variant="contained" 
                  color="secondary"
                  onClick={handleOpenSignupDialog}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: '50px',
                    color: 'white',
                    fontWeight: 600
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Signup Dialog */}
      <Dialog 
        open={openSignupDialog} 
        onClose={handleCloseSignupDialog}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center', pt: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Join Fetchbot
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Find jobs, housing, cafes and more in one place
          </Typography>
        </DialogTitle>
        <form onSubmit={handleSignupSubmit}>
          <DialogContent>
            <Stack spacing={3} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3, justifyContent: 'center' }}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              size="large"
              sx={{ borderRadius: '8px', py: 1.5 }}
            >
              Create Account
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default LandingHeader;