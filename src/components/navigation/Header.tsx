'use client';

import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Tooltip
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

// Theme Context
import { ThemeContext } from '@/theme/ThemeProvider';

interface HeaderProps {
  drawerOpen: boolean;
  handleDrawerToggle: () => void;
}

const Header = ({ drawerOpen, handleDrawerToggle }: HeaderProps) => {
  const theme = useTheme();
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.paper,
        transition: drawerOpen ? theme.transitions.create('width') : 'none',
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{ mr: 2, color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h5"
              noWrap
              component="div"
              color={theme.palette.text.primary}
              sx={{ fontWeight: 600 }}
            >
              Dashboard
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Header right section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Theme toggle button */}
            <Tooltip title={themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}>
              <IconButton
                sx={{ color: theme.palette.text.primary, mx: 1 }}
                onClick={toggleThemeMode}
              >
                {themeMode === 'dark' ? (
                  <LightModeOutlinedIcon fontSize="small" />
                ) : (
                  <DarkModeOutlinedIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
            
            {/* Notifications */}
            <Tooltip title="Notifications">
              <IconButton
                sx={{ color: theme.palette.text.primary, mx: 1 }}
              >
                <NotificationsOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            
            {/* User avatar */}
            <Tooltip title="Profile">
              <Avatar
                sx={{ 
                  width: 32, 
                  height: 32, 
                  ml: 1,
                  bgcolor: theme.palette.primary.main,
                  cursor: 'pointer'
                }}
              >
                A
              </Avatar>
            </Tooltip>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;