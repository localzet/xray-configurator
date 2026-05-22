import '@mantine/core/styles.css';
import './styles.css';

import { MantineProvider, createTheme } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './ui/App';

const theme = createTheme({
  primaryColor: 'cyan',
  primaryShade: 8,
  cursorType: 'pointer',
  defaultRadius: 'md',
  fontFamily: 'Inter, Montserrat, Arial, sans-serif',
  fontFamilyMonospace: 'Fira Code, Consolas, monospace',
  headings: {
    fontFamily: 'Inter, Montserrat, Arial, sans-serif',
    fontWeight: '700',
  },
  colors: {
    dark: ['#c9d1d9', '#b1bac4', '#8b949e', '#6e7681', '#484f58', '#30363d', '#21262d', '#161b22', '#0d1117', '#010409'],
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
