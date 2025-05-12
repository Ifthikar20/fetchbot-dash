'use client';

import React from 'react';
import { Box, useTheme } from '@mui/material';

const SimpleMap = () => {
  const theme = useTheme();
  
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1000 1000" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      {/* Background */}
      <rect width="1000" height="1000" fill="#f8f9fa" />
      
      {/* Grid lines */}
      <g stroke="#e9ecef" strokeWidth="1">
        {Array.from({ length: 20 }).map((_, i) => (
          <React.Fragment key={i}>
            <line x1="0" y1={i * 50} x2="1000" y2={i * 50} />
            <line x1={i * 50} y1="0" x2={i * 50} y2="1000" />
          </React.Fragment>
        ))}
      </g>
      
      {/* Main streets */}
      <g stroke="#ced4da" strokeWidth="6">
        <line x1="0" y1="250" x2="1000" y2="250" />
        <line x1="0" y1="600" x2="1000" y2="600" />
        <line x1="300" y1="0" x2="300" y2="1000" />
        <line x1="700" y1="0" x2="700" y2="1000" />
      </g>
      
      {/* Secondary streets */}
      <g stroke="#dee2e6" strokeWidth="3">
        <line x1="0" y1="400" x2="1000" y2="400" />
        <line x1="0" y1="800" x2="1000" y2="800" />
        <line x1="150" y1="0" x2="150" y2="1000" />
        <line x1="450" y1="0" x2="450" y2="1000" />
        <line x1="850" y1="0" x2="850" y2="1000" />
      </g>
      
      {/* City blocks */}
      <g fill="#e9ecef">
        <rect x="350" y="300" width="100" height="50" />
        <rect x="500" y="350" width="150" height="100" />
        <rect x="200" y="450" width="80" height="120" />
        <rect x="750" y="500" width="100" height="80" />
        <rect x="400" y="650" width="120" height="120" />
        <rect x="600" y="700" width="80" height="60" />
        <rect x="150" y="750" width="140" height="40" />
      </g>
      
      {/* Parks */}
      <g fill={theme.palette.primary.light + '50'}>
        <rect x="350" y="100" width="200" height="100" rx="10" />
        <rect x="650" y="300" width="150" height="150" rx="10" />
        <rect x="100" y="550" width="180" height="120" rx="10" />
      </g>
      
      {/* Water */}
      <g fill={theme.palette.primary.main + '30'}>
        <rect x="800" y="100" width="150" height="250" rx="5" />
        <rect x="50" y="200" width="120" height="200" rx="5" />
      </g>
      
      {/* Point markers */}
      <g fill={theme.palette.secondary.main}>
        <circle cx="400" cy="350" r="8" />
        <circle cx="650" cy="200" r="8" />
        <circle cx="300" cy="650" r="8" />
        <circle cx="750" cy="650" r="8" />
        <circle cx="500" cy="500" r="8" />
      </g>
      
      <g fill={theme.palette.primary.main}>
        <circle cx="550" cy="150" r="8" />
        <circle cx="250" cy="400" r="8" />
        <circle cx="450" cy="720" r="8" />
        <circle cx="720" cy="450" r="8" />
      </g>
      
      <g fill="#4CAF50">
        <circle cx="180" cy="300" r="8" />
        <circle cx="600" cy="420" r="8" />
        <circle cx="400" cy="550" r="8" />
        <circle cx="850" cy="750" r="8" />
      </g>
    </svg>
  );
};

export default SimpleMap;