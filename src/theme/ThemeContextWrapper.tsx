'use client';

import React, { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';

interface ThemeContextWrapperProps {
  children: ReactNode;
}

const ThemeContextWrapper = ({ children }: ThemeContextWrapperProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeContextWrapper;