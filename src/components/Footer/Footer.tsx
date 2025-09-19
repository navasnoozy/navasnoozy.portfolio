// src/components/Footer/Footer.tsx
import React from 'react';
import { Box, Container, Typography, Link, Divider, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  YouTube,
  Instagram,
  WhatsApp,
  ArrowUpward
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import GradientText from '../shared/GradientText';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, external = false }) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    if (!external) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <Link
      href={href}
      onClick={!external ? handleClick : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      sx={{
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-block',
        position: 'relative',
        '&:hover': {
          color: '#64ffda',
          transform: 'translateX(5px)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -2,
          left: 0,
          width: 0,
          height: 1,
          background: '#64ffda',
          transition: 'width 0.3s ease',
        },
        '&:hover::after': {
          width: '100%',
        }
      }}
    >
      {children}
    </Link>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: '10px',
          background: 'rgba(100, 255, 218, 0.1)',
          border: '1px solid rgba(100, 255, 218, 0.2)',
          color: '#64ffda',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(100, 255, 218, 0.2)',
            boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
            transform: 'translateY(-2px)',
          }
        }}
      >
        {icon}
      </Link>
    </motion.div>
  );
};

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
        borderTop: '1px solid rgba(100, 255, 218, 0.1)',
        mt: 8,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          opacity: 0.3
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
            top: '50%',
            left: '-150px',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            top: '50%',
            right: '-150px',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Brand & About */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GradientText
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 900,
                    mb: 2,
                    fontFamily: '"Anton", system-ui, sans-serif',
                  }}
                >
                  NAVAS CK
                </GradientText>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 3,
                    lineHeight: 1.6,
                    fontSize: '0.95rem'
                  }}
                >
                  Full-Stack Developer & Video Editor crafting digital experiences 
                  with modern technologies. Let's build something amazing together!
                </Typography>
                
                {/* Availability Status */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 1,
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '20px'
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#10b981',
                      animation: 'pulse 2s infinite'
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#10b981',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}
                  >
                    Available for Freelance
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#64ffda',
                    fontWeight: 700,
                    mb: 2,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1
                  }}
                >
                  Navigation
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <FooterLink href="/about">About</FooterLink>
                  <FooterLink href="/skills">Skills</FooterLink>
                  <FooterLink href="/projects">Projects</FooterLink>
                  <FooterLink href="/resume">Resume</FooterLink>
                  <FooterLink href="/contact">Contact</FooterLink>
                </Box>
              </motion.div>
            </Grid>

            {/* Services */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#64ffda',
                    fontWeight: 700,
                    mb: 2,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1
                  }}
                >
                  Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                    Web Development
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                    Mobile Apps
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                    Video Editing
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                    UI/UX Design
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                    Consultation
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#64ffda',
                    fontWeight: 700,
                    mb: 2,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1
                  }}
                >
                  Get in Touch
                </Typography>
                
                {/* Contact Items */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Email sx={{ fontSize: 18, color: 'rgba(100, 255, 218, 0.6)' }} />
                    <Link
                      href="mailto:navasck@example.com"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        '&:hover': { color: '#64ffda' }
                      }}
                    >
                      navasck@example.com
                    </Link>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <WhatsApp sx={{ fontSize: 18, color: 'rgba(100, 255, 218, 0.6)' }} />
                    <Link
                      href="https://wa.me/911234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        '&:hover': { color: '#64ffda' }
                      }}
                    >
                      +91 123 456 7890
                    </Link>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <LocationOn sx={{ fontSize: 18, color: 'rgba(100, 255, 218, 0.6)' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      Kozhikode, Kerala, IN
                    </Typography>
                  </Box>
                </Box>

                {/* Social Links */}
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  <SocialIcon
                    icon={<GitHub sx={{ fontSize: 20 }} />}
                    href="https://github.com/navasck"
                    label="GitHub"
                  />
                  <SocialIcon
                    icon={<LinkedIn sx={{ fontSize: 20 }} />}
                    href="https://linkedin.com/in/navasck"
                    label="LinkedIn"
                  />
                  <SocialIcon
                    icon={<Twitter sx={{ fontSize: 20 }} />}
                    href="https://twitter.com/navasck"
                    label="Twitter"
                  />
                  <SocialIcon
                    icon={<YouTube sx={{ fontSize: 20 }} />}
                    href="https://youtube.com/@navasck"
                    label="YouTube"
                  />
                  <SocialIcon
                    icon={<Instagram sx={{ fontSize: 20 }} />}
                    href="https://instagram.com/navasck"
                    label="Instagram"
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: 'rgba(100, 255, 218, 0.1)' }} />

          {/* Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2
            }}
          >
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.9rem',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              © {currentYear} Navas CK. All rights reserved. Built with ❤️ and React
            </Typography>

            {/* Scroll to Top Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Box
                onClick={scrollToTop}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(100, 255, 218, 0.1)',
                  border: '1px solid rgba(100, 255, 218, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(100, 255, 218, 0.2)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 5px 20px rgba(100, 255, 218, 0.3)'
                  }
                }}
              >
                <ArrowUpward sx={{ color: '#64ffda', fontSize: 20 }} />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Pulse Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 10px #10b981;
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 20px #10b981;
          }
        }
      `}</style>
    </Box>
  );
};

export default Footer;