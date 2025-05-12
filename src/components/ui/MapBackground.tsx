'use client';

import React from 'react';
import { Box, useTheme } from '@mui/material';

interface MapBackgroundProps {
  opacity?: number;
}

const MapBackground: React.FC<MapBackgroundProps> = ({ opacity = 1 }) => {
  const theme = useTheme();
  
  // We're creating a styled map background here
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity,
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(200, 200, 200, 0.1) 40px,
            rgba(200, 200, 200, 0.1) 41px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(200, 200, 200, 0.1) 40px,
            rgba(200, 200, 200, 0.1) 41px
          )
        `,
        backgroundColor: '#f8f9fa',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '90%',
          height: '90%',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${theme.palette.primary.light}50 0%, transparent 5%),
            radial-gradient(circle at 50% 60%, ${theme.palette.secondary.light}50 0%, transparent 10%),
            radial-gradient(circle at 80% 40%, ${theme.palette.primary.light}50 0%, transparent 5%),
            radial-gradient(circle at 30% 70%, ${theme.palette.secondary.light}50 0%, transparent 8%),
            radial-gradient(circle at 70% 20%, ${theme.palette.primary.light}50 0%, transparent 7%)
          `,
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 25px,
              rgba(0, 120, 255, 0.03) 25px,
              rgba(0, 120, 255, 0.03) 50px
            ),
            repeating-linear-gradient(
              135deg,
              transparent,
              transparent 25px,
              rgba(255, 150, 0, 0.03) 25px,
              rgba(255, 150, 0, 0.03) 50px
            )
          `,
          zIndex: 0
        }
      }}
    >
      {/* Street lines */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: 0,
          width: '100%',
          height: '5px',
          backgroundColor: 'rgba(200, 200, 200, 0.5)',
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: 0,
          width: '100%',
          height: '8px',
          backgroundColor: 'rgba(200, 200, 200, 0.5)',
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '30%',
          width: '5px',
          height: '100%',
          backgroundColor: 'rgba(200, 200, 200, 0.5)',
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '70%',
          width: '8px',
          height: '100%',
          backgroundColor: 'rgba(200, 200, 200, 0.5)',
          zIndex: 1
        }}
      />

      {/* Map blocks */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            width: `${Math.random() * 80 + 20}px`,
            height: `${Math.random() * 80 + 20}px`,
            backgroundColor: 'rgba(200, 200, 200, 0.2)',
            zIndex: 1
          }}
        />
      ))}
    </Box>
  );
};

export default MapBackground;