'use client';

import React from 'react';
import { Box, useTheme } from '@mui/material';
import GoogleMapStyle from './GoogleMapStyle';
import GoogleMapOverlay from './GoogleMapOverlay';

const GoogleMapBackground = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Base map */}
      <GoogleMapStyle />
      
      {/* Map markers */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Cafe marker - moved to right side */}
        <Box
          sx={{
            position: 'absolute',
            right: '15%',
            top: '20%',
            transform: 'translate(0, -100%)',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <svg width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 42 14 42C14 42 28 24.5 28 14C28 6.268 21.732 0 14 0Z" fill={theme.palette.secondary.main} />
              <path d="M14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7Z" fill="white" />
              <path d="M14.5 10.5H13.5V13.5H10.5V14.5H13.5V17.5H14.5V14.5H17.5V13.5H14.5V10.5Z" fill={theme.palette.secondary.main} />
            </svg>
          </Box>
        </Box>
        
        {/* Apartment marker - moved to right side */}
        <Box
          sx={{
            position: 'absolute',
            right: '15%',
            top: '50%',
            transform: 'translate(0, -100%)',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <svg width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 42 14 42C14 42 28 24.5 28 14C28 6.268 21.732 0 14 0Z" fill="#4CAF50" />
              <path d="M14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7Z" fill="white" />
              <path d="M17 11H11V17H17V11ZM13 16H12V15H13V16ZM13 14H12V13H13V14ZM13 12H12V11H13V12ZM15 16H14V15H15V16ZM15 14H14V13H15V14ZM15 12H14V11H15V12ZM16 16H16V15H16V16ZM16 14H16V13H16V14ZM16 12H16V11H16V12Z" fill="#4CAF50" />
            </svg>
          </Box>
        </Box>
        
        {/* Job marker - moved to right side bottom */}
        <Box
          sx={{
            position: 'absolute',
            right: '15%',
            top: '80%',
            transform: 'translate(0, -100%)',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <svg width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 42 14 42C14 42 28 24.5 28 14C28 6.268 21.732 0 14 0Z" fill={theme.palette.primary.main} />
              <path d="M14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7Z" fill="white" />
              <path d="M17.5 10.5H16.5V9.5C16.5 9.224 16.276 9 16 9H12C11.724 9 11.5 9.224 11.5 9.5V10.5H10.5C10.224 10.5 10 10.724 10 11V17.5C10 17.776 10.224 18 10.5 18H17.5C17.776 18 18 17.776 18 17.5V11C18 10.724 17.776 10.5 17.5 10.5ZM12.5 10.5V10H15.5V10.5V11.5H12.5V10.5Z" fill={theme.palette.primary.main} />
            </svg>
          </Box>
        </Box>
        
        {/* My location marker */}
        <Box
          sx={{
            position: 'absolute',
            left: '55%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="14" fill="#1A73E8" fillOpacity="0.2" />
              <circle cx="14" cy="14" r="8" fill="#1A73E8" />
              <circle cx="14" cy="14" r="4" fill="white" />
            </svg>
          </Box>
        </Box>
      </Box>
      
      {/* UI Overlays */}
      <GoogleMapOverlay />
    </Box>
  );
};

export default GoogleMapBackground;