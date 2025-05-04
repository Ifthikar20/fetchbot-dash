'use client';

import React, { useState, ReactNode } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import Header from '../navigation/Header';
import Sidebar from '../navigation/Sidebar';

// Constant values
const drawerWidth = 280;

// Styling for the main content
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }),
  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
    padding: theme.spacing(2)
  }
}));

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useTheme();
  
  // State for managing drawer open/close
  const [drawerOpen, setDrawerOpen] = useState(true);
  
  // Toggle drawer
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Header component */}
      <Header drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      
      {/* Sidebar component */}
      <Sidebar drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
      
      {/* Main content */}
      <Main open={drawerOpen}>
        <Box sx={{ pt: 7.5, px: { xs: 2, sm: 3 } }}>
          {children}
        </Box>
      </Main>
    </Box>
  );
};

export default MainLayout;