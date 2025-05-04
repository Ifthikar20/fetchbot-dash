'use client';

import React, { ReactNode, forwardRef } from 'react';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

interface MainCardProps {
  border?: boolean;
  boxShadow?: boolean;
  children: ReactNode;
  content?: boolean;
  contentSX?: object;
  darkTitle?: boolean;
  divider?: boolean;
  elevation?: number;
  secondary?: ReactNode;
  shadow?: string;
  sx?: object;
  title?: ReactNode | string;
}

const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
  (
    {
      border = true,
      boxShadow = true,
      children,
      content = true,
      contentSX = {},
      darkTitle,
      divider = true,
      elevation = 1,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref
  ) => {
    return (
      <Card
        elevation={elevation}
        ref={ref}
        {...others}
        sx={{
          position: 'relative',
          border: border ? '1px solid' : 'none',
          borderColor: (theme) => theme.palette.divider,
          borderRadius: 2,
          boxShadow: boxShadow ? shadow || '0px 2px 8px rgba(0, 0, 0, 0.06)' : 'none',
          ...sx
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader 
            sx={{ 
              p: 2.5,
              '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' } 
            }} 
            title={<Typography variant="h5">{title}</Typography>} 
            action={secondary} 
          />
        )}
        {darkTitle && title && (
          <CardHeader 
            sx={{ 
              p: 2.5,
              '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' } 
            }} 
            title={<Typography variant="h4">{title}</Typography>} 
            action={secondary} 
          />
        )}

        {/* content & divider */}
        {title && divider && <Divider />}

        {/* card content */}
        {content && <CardContent sx={{ p: 2.5, ...contentSX }}>{children}</CardContent>}
        {!content && children}
      </Card>
    );
  }
);

MainCard.displayName = 'MainCard';

export default MainCard;