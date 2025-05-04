'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Divider
} from '@mui/material';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Navigation menu items
import menuItems, { MenuItem } from './menuItems';

// Styled drawer header
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2.5),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  minHeight: '64px'
}));

interface SidebarProps {
  drawerOpen: boolean;
  handleDrawerToggle: () => void;
  drawerWidth: number;
}

const Sidebar = ({ drawerOpen, handleDrawerToggle, drawerWidth }: SidebarProps) => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  
  // State to track which menu is expanded
  const [openCollapseId, setOpenCollapseId] = useState<string | null>(null);

  // Toggle collapse menu
  const handleCollapseToggle = (id: string) => {
    setOpenCollapseId(openCollapseId === id ? null : id);
  };

  // Check if menu item is active
  const isActive = (url?: string) => url ? pathname === url : false;

  // Navigate to page
  const handleNavigate = (url?: string) => {
    if (url) {
      router.push(url);
    }
  };

  // Render menu items
  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => {
      // For collapse menu items
      if (item.type === 'collapse') {
        return (
          <React.Fragment key={item.id}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => handleCollapseToggle(item.id)}
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  py: 0.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: 'center',
                    color: theme.palette.text.primary
                  }}
                >
                  {item.icon && <item.icon />}
                </ListItemIcon>
                <ListItemText 
                  primary={item.title} 
                  sx={{ opacity: drawerOpen ? 1 : 0 }} 
                />
                {openCollapseId === item.id ? 
                  <ExpandMoreIcon fontSize="small" /> : 
                  <ChevronRightIcon fontSize="small" />}
              </ListItemButton>
            </ListItem>
            <Collapse 
              in={openCollapseId === item.id} 
              timeout="auto" 
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.children && renderMenuItems(item.children)}
              </List>
            </Collapse>
          </React.Fragment>
        );
      }
      
      // For individual menu items
      if (item.type === 'item') {
        return (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => handleNavigate(item.url)}
              sx={{
                minHeight: 48,
                px: 2.5,
                py: 0.5,
                ...(isActive(item.url) && {
                  bgcolor: theme.palette.primary.light,
                  borderRadius: '10px',
                  '&:hover': {
                    bgcolor: theme.palette.primary.light
                  }
                })
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 2,
                  justifyContent: 'center',
                  color: isActive(item.url) 
                    ? theme.palette.primary.main 
                    : theme.palette.text.primary
                }}
              >
                {item.icon && <item.icon />}
              </ListItemIcon>
              <ListItemText 
                primary={item.title} 
                sx={{ 
                  opacity: drawerOpen ? 1 : 0,
                  color: isActive(item.url) 
                    ? theme.palette.primary.main 
                    : theme.palette.text.primary
                }} 
              />
            </ListItemButton>
          </ListItem>
        );
      }
      
      // For group menu items
      if (item.type === 'group' && drawerOpen) {
        return (
          <React.Fragment key={item.id}>
            <ListItem sx={{ pt: 2, pb: 1 }}>
              <Typography
                variant="subtitle2"
                color={theme.palette.text.secondary}
                sx={{ fontWeight: 500 }}
              >
                {item.title}
              </Typography>
            </ListItem>
            {item.children && renderMenuItems(item.children)}
          </React.Fragment>
        );
      }
      
      return null;
    });
  };

  const drawerContent = (
    <>
      <DrawerHeader>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: 2
          }}
        >
          <Typography variant="h5" color={theme.palette.primary.main} sx={{ fontWeight: 600 }}>
            FETCHBOT DASH
          </Typography>
        </Box>
      </DrawerHeader>
      <Divider />
      <Box
        sx={{
          height: 'calc(100vh - 64px)',
          padding: '10px',
          overflowY: 'auto'
        }}
      >
        <List sx={{ pt: 1 }}>{renderMenuItems(menuItems)}</List>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="navigation"
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: `1px solid ${theme.palette.divider}`,
            bgcolor: theme.palette.background.paper
          }
        }}
      >
        {drawerContent}
      </Drawer>
      
      {/* Desktop drawer */}
      <Drawer
        variant="persistent"
        open={drawerOpen}
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: `1px solid ${theme.palette.divider}`,
            bgcolor: theme.palette.background.paper
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;