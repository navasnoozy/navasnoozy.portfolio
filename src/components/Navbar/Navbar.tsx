// src/components/Navbar/Navbar.tsx
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  // { label: 'Services', path: '/services' },
  { label: 'Articles', path: '/articles' },
  // { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'transparent',
          backdropFilter: 'none',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <Box
              sx={{
                my: 2,
                mx: 'auto',
                maxWidth: '1200px',
                borderRadius: '16px',
                backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
                background: isScrolled 
                  ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)' 
                  : 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(20, 20, 30, 0.3) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: isScrolled 
                  ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                  : '0 4px 16px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: 3, md: 4 },
                py: 2,
              }}
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink 
                  to="/" 
                  style={{ textDecoration: 'none' }}
                  onClick={handleNavClick}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: '"Inter", "Roboto", sans-serif',
                    }}
                  >
                    Portfolio
                  </Typography>
                </NavLink>
              </motion.div>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <NavLink
                        to={item.path}
                        style={({ isActive }) => ({
                          textDecoration: 'none',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: 500,
                          position: 'relative',
                          overflow: 'hidden',
                          color: isActive ? '#64ffda' : 'rgba(255, 255, 255, 0.8)',
                          background: isActive 
                            ? 'rgba(100, 255, 218, 0.1)' 
                            : 'transparent',
                          border: isActive 
                            ? '1px solid rgba(100, 255, 218, 0.3)' 
                            : '1px solid transparent',
                          transition: 'all 0.3s ease',
                          fontFamily: '"Inter", "Roboto", sans-serif',
                          display: 'block',
                        })}
                        onMouseEnter={(e) => {
                          if (location.pathname !== item.path) {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (location.pathname !== item.path) {
                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </motion.div>
              )}
            </Box>
          </motion.div>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
          {/* Animated background */}
          <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(100, 255, 218, 0.3)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </Box>

          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Typography
                variant="h6"
                sx={{
                  background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                Menu
              </Typography>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Navigation Items */}
            <List sx={{ pt: 2 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <ListItem disablePadding sx={{ px: 2, mb: 1 }}>
                    <ListItemButton
                      component={NavLink}
                      to={item.path}
                      onClick={handleNavClick}
                      sx={{
                        borderRadius: '12px',
                        py: 2,
                        px: 3,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        },
                        '&.active': {
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          borderLeft: '4px solid #64ffda',
                          '& .MuiListItemText-primary': {
                            color: '#64ffda',
                            fontWeight: 600,
                          },
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: '16px',
                          fontWeight: location.pathname === item.path ? 600 : 400,
                          color: location.pathname === item.path ? '#64ffda' : 'rgba(255, 255, 255, 0.9)',
                          fontFamily: '"Inter", "Roboto", sans-serif',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              ))}
            </List>

            {/* Bottom decoration */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 32,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <motion.div
                style={{
                  width: '60px',
                  height: '4px',
                  borderRadius: '2px',
                  background: 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)',
                }}
                animate={{
                  width: [60, 80, 60],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer to prevent content overlap */}
      <Box sx={{ height: { xs: '80px', md: '96px' } }} />
    </>
  );
};

export default Navbar;