'use client';

import React from 'react';
import { Box, Tooltip, Typography, Paper, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import StarIcon from '@mui/icons-material/Star';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const GoogleMapOverlay = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      {/* Search bar (top left) */}
      <Paper
        elevation={2}
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '400px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '8px',
          px: 2,
          pointerEvents: 'auto',
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', flex: 1 }}
        >
          Search Google Maps
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Google voice search">
            <Box
              component="img"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEyIDE1YzEuNjYgMCAzLTEuMzEgMy0yLjk3VjcuOTVhMi45OCAyLjk4IDAgMCAwLTMtMi45NyA2NC4yNCA2NC4yNCAwIDAgMC0zIDIuOTd2NC4wNmMwIDEuNjQgMS4zNCAyLjk3IDMgMi45N3oiIGZpbGw9IiM0Mjg1RjQiLz48cGF0aCBkPSJNMTEgMTguOTVoMlYyMmgtMnpNOCAxNWMtLjU1IDAtMS0uNDUtMS0xVjhBMyAzIDAgMCAxIDggNnYxMWEzNCAzNCAwIDAgMS0xLTJoMXptOCAwYy0uNTUgMC0xLS40NS0xLTFWOGEzIDMgMCAwIDEgMS0ydjExYTIzIDIzIDAgMCAxLTEtMmgxeiIgZmlsbD0iIzQyODVGNCIvPjwvZz48L3N2Zz4="
              alt="Voice Search"
              sx={{ width: 24, height: 24, mr: 1 }}
            />
          </Tooltip>
        </Box>
      </Paper>
      
      {/* Zoom controls (bottom right) */}
      <Paper
        elevation={2}
        sx={{
          position: 'absolute',
          bottom: '120px',
          right: '20px',
          borderRadius: '8px',
          overflow: 'hidden',
          pointerEvents: 'auto'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 1, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
            <AddIcon sx={{ color: 'text.secondary' }} />
          </Box>
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
            <RemoveIcon sx={{ color: 'text.secondary' }} />
          </Box>
        </Box>
      </Paper>
      
      {/* My Location button (bottom right) */}
      <Tooltip title="Your location">
        <Paper
          elevation={2}
          sx={{
            position: 'absolute',
            bottom: '180px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto'
          }}
        >
          <MyLocationIcon sx={{ color: theme.palette.primary.main }} />
        </Paper>
      </Tooltip>
      
      {/* Street View (bottom right) */}
      <Tooltip title="Drag Pegman onto the map to open Street View">
        <Paper
          elevation={2}
          sx={{
            position: 'absolute',
            bottom: '60px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto'
          }}
        >
          <Box
            component="img"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDEwYy43MyAwIDEuMzMtLjYgMS4zMy0xLjMzUzEwLjczIDcuMzMgMTAgNy4zM3MtMS4zMy42LTEuMzMgMS4zNC42IDEuMzMgMS4zMyAxLjMzem0wLTVjMi4wNDYgMCAzLjcgMS42NTQgMy43IDMuN2E0IDQgMCAwIDEtLjc0IDIuMTdMOS45OSAxOSA3LjAzIDExLjA0QTMuOTk5IDMuOTk5IDAgMCAxIDYuMyA4LjdDNi4zIDYuNjU0IDcuOTU0IDUgMTAgNXptMC0yYy0zLjE0IDAtNS43IDIuNTYtNS43IDUuN3MxLjU2IDYuMTcgNS43IDEzLjNjNC4xNC03LjEzIDUuNy0xMC4xNyA1LjctMTMuM1MxMy4xNCAzIDEwIDN6IiBmaWxsPSIjMTc3NUU2Ii8+PC9zdmc+"
            alt="Street View Pegman"
            sx={{ width: 24, height: 24 }}
          />
        </Paper>
      </Tooltip>
      
      {/* Layers button (bottom right) */}
      <Tooltip title="Map details">
        <Paper
          elevation={2}
          sx={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto'
          }}
        >
          <Box
            component="img"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI0IDEyYzAtNi42MjctNS4zNzMtMTItMTItMTJTMCA1LjM3MyAwIDEyIDUuMzczIDI0IDEyIDI0czEyLTUuMzczIDEyLTEyem0tMTAgNS43NDl2Mi4yNTFoLTR2LTIuMjUxSDd2LTMuNzVoMjAuNDkxYzAgMCAuMDAxLjAxNi4wMDEuMDI3IDAgMi4wMTgtLjgyMyAzLjg0My0yLjE0NSA1LjE2NUgyMXYtMS40NDJoLTd6bS0xMC0xMC41aC00VjVoNHYyLjI0OWgzbDUuNjY0IDUuNzUxSDEwdi0yLjI1MUg0di0zLjVoNHYtMXptMTMuNSA1LjYyN2EyLjg3NSAyLjg3NSAwIDEgMSAwLTUuNzUgMi44NzUgMi44NzUgMCAwIDEgMCA1Ljc1em0tMTAuODk0LTRhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyeiIgZmlsbD0iIzVGNjM2OCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
            alt="Map Details"
            sx={{ width: 24, height: 24 }}
          />
        </Paper>
      </Tooltip>
      
      {/* Copyright info (bottom left) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '5px',
          left: '5px',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '10px' }}>
          Map data ©2025 Google
        </Typography>
      </Box>
      
      {/* Google logo (bottom left) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '20px'
        }}
      >
        <Box
          component="img"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMyIgdmlld0JveD0iMCAwIDgwIDIzIj48cGF0aCBmaWxsPSIjNTg1QzYxIiBkPSJNMTAuNSA1LjhjLjYgMCAxLS4xIDEuNC0uMy4zLS4xLjYtLjQuOC0uNnMuNC0uNi41LS45Yy4xLS4zLjItLjcuMi0xLjEgMC0uNC0uMS0uOC0uMi0xLjJzLS4zLS43LS41LS45LS41LS41LS44LS42Yy0uMy0uMi0uNy0uMi0xLjItLjJzLTEgLjEtMS40LjNjLS4zLjEtLjYuNC0uOC42cy0uNC42LS41LjljLS4xLjMtLjIuNy0uMiAxLjFzLjEuOC4yIDEuMi4zLjcuNS45LjUuNS44LjZjLjUuMi44LjIgMS4yLjJtMTMuNyAzYzAgLjUtLjEuOS0uMiAxLjNzLS40LjctLjYgMS0uNi41LTEgLjYtLjguMi0xLjIuMi0uOS0uMS0xLjItLjNjLS4zLS4yLS43LS40LS45LS43cy0uNC0uNy0uNS0xLjFjLS4xLS40LS4yLS45LS4yLTEuNCAwLS41LjEtLjkuMi0xLjMuMS0uNC4zLS43LjYtMXMuNi0uNSAxLS42LjgtLjIgMS4yLS4yLjkuMSAxLjIuMy40LjMuNy42LjUuNy42IDEuMS4zLjkuMy0xLjRNNTIuNyAxOC41SDUwVjYuOWgyLjdWMTguNXpNNTEuMyA1LjVjLS40IDAtLjgtLjEtMS4xLS40LS4zLS4zLS40LS42LS40LTEuMSAwLS40LjEtLjguNC0xLjEuMy0uMyA3LS40IDEuMS0uNHMuOC4xIDEuMS40Yy4zLjMuNC42LjQgMS4xIDAgLjQtLjEuOC0uNCAxLjEtLjMuMy0uNi40LTEuMS40TTI0LjIgMTkuMWMtLjUgMC0uOS0uMS0xLjItLjMtLjQtLjItLjYtLjUtLjktLjgtLjItLjQtLjQtLjctLjUtMS4ycy0uMi0uOS0uMi0xLjRWOWgzdjUuOWMwIC41LjEuOS4zIDEuMS4yLjMuNS40IDEgLjRsMS4yLS4yYy4zLS4xLjUtLjMuNy0uNGgxYy0uMi41LS42IDEtMS4yIDEuMy0uNS4zLTEuMi42LTIuMi42TTUuOSAxNy43Yy0uNy0uNS0xLjMtMS4yLTEuNy0yLS40LS45LS42LTEuOC0uNi0zIDAtMS4xLjItMi4xLjYtM3MxLTEuNSAxLjctMmMuNy0uNSAxLjYtLjcgMi42LS43czEuOS4yIDIuNi43IDEuMyAxLjIgMS43IDIgLjYgMS45LjYgMyAyIDIuMS0uNiAzLTEgMS41LTEuNyAyYy0uNy41LTEuNi43LTIuNi43cy0xLjktLjItMi42LS43bS40LTcuMWMtLjQtLjgtMS4xLTEuMi0yLTEuMi0uOSAwLTEuNi40LTIgMS4yLS40LjgtLjYgMS44LS42IDMgMCAxLjMuMiAyLjIuNiAzIC40LjggMS4xIDEuMiAyIDEuMi45IDAgMS42LS40IDItMS4yLjQtLjguNi0xLjguNi0zcy0uMi0yLjItLjYtM00zNi4yIDEzLjdjMC0uNC0uMS0uOC0uMi0xLjFzLS4zLS42LS41LS45LS41LS40LS44LS41Yy0uMy0uMS0uNi0uMi0xLS4yLS40IDAtLjcuMS0xIC4ycy0uNi4zLS44LjUtLjQuNS0uNS45LS4yLjgtLjIgMS4xYzAgLjQuMS43LjIgMXMuMy42LjUuOC41LjQuOC41LjYuMiAxIC4yYy40IDAgLjctLjEgMS0uMnMuNi0uMy44LS41LjQtLjUuNS0uOC4yLS42LjItMW0tNS4yLTJjLjItLjMuNC0uNi43LS45LjMtLjMuNi0uNSAxLS43cy45LS4zIDEuNC0uMy45IDAgMS4zLjNjLjQuMS43LjQgMSAuN3MuNS42LjcuOS4zLjcuNCAxLjJsLTYuNSAyLjZjLjEuNC4zLjcuNS45LjIuMy41LjUuOS42LjMuMS43LjIgMS4xLjIuNSAwIC45LS4xIDEuMy0uMi40LS4yLjgtLjQuOS0uOGguMi45Yy0uMS4zLS4zLjYtLjYuOHMtLjYuNC0uOS42Yy0uMy4xLS43LjMtMS4xLjMtLjQuMS0uOC4xLTEuMSAwLS45IDAtMS42LS4yLTIuMi0uNS0uNi0uMy0xLjEtLjgtMS41LTEuMy0uMy0uNi0uNi0xLjItLjctMS45cy0uMi0xLjUgMC0yLjNNNDAgOS40djIuMWwuMi0uM2MuMi0uMy40LS42LjctLjguMy0uMy43LS40IDEuMS0uNmguMXYzaC0uNWMtLjUgMC0uOS4xLTEuMi4zczAsLjItLjMuNC0uMS40LS4xLjZ2NC41aC0yLjdWOS40SDQwek03MC4xIDE4LjVoLTIuOFY5LjRoMi43djEuMmMuMi0uNC41LS43LjgtMXMuNy0uNCAxLjEtLjRoLjFsMSAyLjYtLjktLjFjLS4yIDAtLjQgMC0uNi4xLS4yIDAtLjQuMS0uNi4yLS4xLjEtLjMuMi0uNC40LS4xLjItLjEuNC0uMi43LS4xLjMtLjEuNi0uMS45LS4xLjQtLjEuOC0uMSAxLjN2M00zMy42IDE2LjJjLS41LjgtMS40IDEuNC0yLjggMS40LTEuNCAwLTIuNC0uNS0yLjgtMS40SDI3YzAgLjMuMi43LjQuOS4zLjMuNi41IDEgLjcuNC4yLjguMiAxLjMuMy41IDAgLjkuMSAxLjQuMS41IDAgLjktLjEgMS4zLS4xLjQtLjEuOC0uMiAxLjItLjMuNC0uMi43LS40IDEtLjcuMy0uMy40LS43LjUtMS4xaDFjLS4yIDEuNC0uNyAyLjQtMS43IDNzLTIuMy45LTMuOS45Yy0uOSAwLTEuNy0uMS0yLjQtLjQtLjctLjMtMS4zLS42LTEuOC0xLjEtLjUtLjUtLjktMS4xLTEuMS0xLjhzLS4zLTEuNS0uMy0yLjQgMS0xLjcuMy0yLjQuMy0xLjIuOC0xLjhjLjUtLjYgMS4xLTEgMS44LTEuMy43LS4zIDEuNS0uNSAyLjQtLjUuOSAwIDEuNy4yIDIuNC41LjcuMyAxLjMuNyAxLjggMS4yLjUuNS45IDEuMSAxLjEgMS44LjIuNy4zIDEuNC4zIDIuMmwtLjEuM2gtOC45YzAgLjQuMS44LjIgMS4xLjEuNC4zLjcuNSAxcy41LjUuOC42Yy4zLjEuNi4yIDEgLjJzLjctLjEgMS0uMmMuMy0uMS41LS4yLjctLjQuMi0uMi4zLS4zLjQtLjVsLjEtLjN6bS01LjMtMy43aDYuMmMwLS40LS4xLS43LS4yLTEtLjEtLjMtLjMtLjYtLjUtLjgtLjItLjItLjUtLjQtLjgtLjVzLS43LS4yLTEuMS0uMmMtLjQgMC0uNy4xLTEuMS4ycy0uNi4zLS44LjVjLS4yLjItLjQuNS0uNS44LS4xLjMtLjIuNi0uMiAxTTYyIDlWNi43aDIuN3YyLjVoMi40djIuM2gtMi40djQuMWMwIC42LjEgMSAuMyAxLjJzLjYuMiAxLjEuMmw3LjEtLjNoLjd2Mi4yaC0xLjJjLS44IDAtMS40IDAtMS45LS4xLS41LjEtLjktLjMtMS4yLS41LS4zLS4yLS41LS42LS42LTFzLS4yLS45LS4yLTEuNXYtNC4zSDU5di0yLjNIODAnLz48L3N2Zz4="
          alt="Google"
          sx={{ height: 18 }}
        />
      </Box>
    </Box>
  );
};

export default GoogleMapOverlay;