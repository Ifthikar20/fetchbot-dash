'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import MainLayout from '@/components/layouts/MainLayout';
import MainCard from '@/components/ui/MainCard';
import ThemeProvider from '@/theme/ThemeProvider';

const Dashboard = () => {
  return (
    <ThemeProvider>
      <MainLayout>
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Welcome Card */}
          <Box sx={{ width: '100%' }}>
            <MainCard>
              <Typography variant="h3" sx={{ mb: 2 }}>
                Welcome to Fetchbot Dashboard
              </Typography>
              <Typography variant="body1">
                This is your clean dashboard interface. You can customize this area to display your most important metrics and information.
              </Typography>
            </MainCard>
          </Box>
          
          {/* Two-column layout for desktop, stacked for mobile */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3
          }}>
            {/* Status Card */}
            <Box sx={{ flex: 1 }}>
              <MainCard title="System Status">
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    All systems operational
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last updated: {new Date().toLocaleString()}
                  </Typography>
                </Box>
              </MainCard>
            </Box>
            
            {/* Quick Actions Card */}
            <Box sx={{ flex: 1 }}>
              <MainCard title="Quick Actions">
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">
                    Use this space for common actions and shortcuts.
                  </Typography>
                </Box>
              </MainCard>
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Dashboard;