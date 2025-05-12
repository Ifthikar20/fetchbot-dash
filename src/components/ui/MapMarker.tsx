'use client';

import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface MapMarkerProps {
  color?: string;
  size?: number;
  pulse?: boolean;
  sx?: SxProps<Theme>;
}

const MarkerPin = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'markerColor' && prop !== 'markerSize' && prop !== 'pulse'
})<{ markerColor: string; markerSize: number; pulse: boolean }>(
  ({ markerColor, markerSize, pulse, theme }) => ({
    position: 'absolute',
    width: markerSize,
    height: markerSize,
    backgroundColor: markerColor,
    borderRadius: '50% 50% 50% 0',
    transform: 'rotate(-45deg)',
    left: '50%',
    top: '50%',
    margin: `-${markerSize}px 0 0 -${markerSize / 2}px`,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
    '&:after': {
      content: '""',
      width: markerSize / 2,
      height: markerSize / 2,
      margin: markerSize / 4,
      background: 'white',
      position: 'absolute',
      borderRadius: '50%'
    },
    ...(pulse && {
      '&:before': {
        content: '""',
        width: markerSize * 3,
        height: markerSize * 3,
        backgroundColor: markerColor,
        opacity: 0.4,
        borderRadius: '50%',
        position: 'absolute',
        animation: 'pulse 2s ease-out infinite',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        zIndex: -1
      },
      '@keyframes pulse': {
        '0%': {
          transform: 'translate(-50%, -50%) rotate(45deg) scale(0.1)',
          opacity: 0
        },
        '50%': {
          opacity: 0.3
        },
        '100%': {
          transform: 'translate(-50%, -50%) rotate(45deg) scale(1)',
          opacity: 0
        }
      }
    })
  })
);

const MapMarker = ({ 
  color = '#1E88E5', 
  size = 24,
  pulse = false,
  sx = {}
}: MapMarkerProps) => {
  return (
    <Box sx={{ position: 'relative', width: size * 3, height: size * 3, ...sx }}>
      <MarkerPin markerColor={color} markerSize={size} pulse={pulse} />
    </Box>
  );
};

export default MapMarker;