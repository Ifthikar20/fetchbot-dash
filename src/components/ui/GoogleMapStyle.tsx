'use client';

import React from 'react';
import { Box, useTheme } from '@mui/material';

const GoogleMapStyle = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='900' viewBox='0 0 1440 900'%3E%3Crect width='1440' height='900' fill='%23f3f1ec'/%3E%3Cpath d='M0,0 L1440,0 L1440,900 L0,900 Z' fill='%23f3f1ec'/%3E%3Cpath d='M430,180 L730,180 L730,280 L800,280 L800,340 L890,340 L890,450 L1100,450 L1100,600 L950,600 L950,720 L720,720 L720,600 L590,600 L590,450 L430,450 Z' fill='%23e8e7e1'/%3E%3Cpath d='M80,350 L270,350 L270,550 L80,550 Z' fill='%23e8e7e1'/%3E%3Cpath d='M930,80 L1200,80 L1200,250 L930,250 Z' fill='%23e8e7e1'/%3E%3Cpath d='M1000,750 L1300,750 L1300,850 L1000,850 Z' fill='%23e8e7e1'/%3E%3Cpath d='M200,650 L380,650 L380,800 L200,800 Z' fill='%23e8e7e1'/%3E%3Cpath d='M0,0 L1440,0 M0,100 L1440,100 M0,200 L1440,200 M0,300 L1440,300 M0,400 L1440,400 M0,500 L1440,500 M0,600 L1440,600 M0,700 L1440,700 M0,800 L1440,800 M0,900 L1440,900' stroke='%23e0dfd8' stroke-width='1'/%3E%3Cpath d='M0,0 L0,900 M100,0 L100,900 M200,0 L200,900 M300,0 L300,900 M400,0 L400,900 M500,0 L500,900 M600,0 L600,900 M700,0 L700,900 M800,0 L800,900 M900,0 L900,900 M1000,0 L1000,900 M1100,0 L1100,900 M1200,0 L1200,900 M1300,0 L1300,900 M1400,0 L1400,900' stroke='%23e0dfd8' stroke-width='1'/%3E%3Cpath d='M300,50 L300,900' stroke='%23dbdad2' stroke-width='8'/%3E%3Cpath d='M720,0 L720,850' stroke='%23dbdad2' stroke-width='8'/%3E%3Cpath d='M1100,50 L1100,900' stroke='%23dbdad2' stroke-width='8'/%3E%3Cpath d='M0,200 L1440,200' stroke='%23dbdad2' stroke-width='8'/%3E%3Cpath d='M0,500 L1440,500' stroke='%23dbdad2' stroke-width='8'/%3E%3Cpath d='M0,700 L1440,700' stroke='%23dbdad2' stroke-width='8'/%3E%3Cpath d='M450,230 L700,230 L700,470 L450,470 Z' fill='%23dbebd2'/%3E%3Cpath d='M100,400 L250,400 L250,520 L100,520 Z' fill='%23dbebd2'/%3E%3Cpath d='M800,600 L950,600 L950,700 L800,700 Z' fill='%23dbebd2'/%3E%3Cpath d='M100,100 L300,100 L300,180 L100,180 Z' fill='%23c8dfea'/%3E%3Cpath d='M950,300 L1300,300 L1300,430 L950,430 Z' fill='%23c8dfea'/%3E%3Cpath d='M200,700 L300,700 L300,850 L200,850 Z' fill='%23c8dfea'/%3E%3Ctext x='330' y='250' font-family='Arial' font-size='10' fill='%23808080'%3EMain St%3C/text%3E%3Ctext x='750' y='520' font-family='Arial' font-size='10' fill='%23808080'%3EPark Ave%3C/text%3E%3Ctext x='520' y='730' font-family='Arial' font-size='10' fill='%23808080'%3EOak Blvd%3C/text%3E%3Ctext x='170' y='450' font-family='Arial' font-size='10' fill='%23808080'%3EMaple Park%3C/text%3E%3Ctext x='500' y='350' font-family='Arial' font-size='10' fill='%23808080'%3ECentral Park%3C/text%3E%3Ctext x='850' y='650' font-family='Arial' font-size='10' fill='%23808080'%3EWillow Park%3C/text%3E%3Ctext x='150' y='140' font-family='Arial' font-size='10' fill='%23808080'%3ESunset Lake%3C/text%3E%3Ctext x='1100' y='370' font-family='Arial' font-size='10' fill='%23808080'%3EEast River%3C/text%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }}
    />
  );
};

export default GoogleMapStyle;