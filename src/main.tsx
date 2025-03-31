import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import theme from './theme/theme'; // Import the custom theme
import App from './App.tsx';
import '@mantine/core/styles.css'; // Import Mantine core styles
import './index.css'; // Keep your global styles if needed

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto"> {/* Wrap App with MantineProvider */}
      <App />
    </MantineProvider>
  </StrictMode>,
);
