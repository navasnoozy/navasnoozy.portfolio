// src/layouts/Layout.tsx
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import AnimatedBackground from '../components/AnimatedBackground/AnimatedBackground';
import NetworkBackground from '../components/Background/NetworkBackground';

const Layout = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background layers */}
      <AnimatedBackground />
      <NetworkBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <Box 
        component="main" 
        sx={{ 
          position: 'relative',
          zIndex: 10,
          minHeight: 'calc(100vh - 96px)',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;