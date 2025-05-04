'use client';

import React, { createContext, useState, useMemo, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Define theme context type
interface ThemeContextType {
  themeMode: 'light' | 'dark';
  toggleThemeMode: () => void;
}

// Create theme context
export const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'light',
  toggleThemeMode: () => {}
});

// Theme provider props
interface ThemeProviderProps {
  children: ReactNode;
}

// Create theme provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  
  // Get saved theme from localStorage on component mount
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
      if (savedTheme) {
        setThemeMode(savedTheme);
      } else {
        // Check system preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setThemeMode(prefersDarkMode ? 'dark' : 'light');
      }
    }
  }, []);

  // Toggle theme mode function
  const toggleThemeMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  // Create theme with current mode
  const themeConfig = useMemo(() => theme(themeMode), [themeMode]);

  // Create context value
  const contextValue = useMemo(
    () => ({
      themeMode,
      toggleThemeMode
    }),
    [themeMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={themeConfig}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;