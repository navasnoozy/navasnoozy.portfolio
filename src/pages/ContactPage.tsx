// src/pages/ContactPage.tsx
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Container, IconButton, Fab } from '@mui/material';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  LocationOn,
  KeyboardArrowUp,
  WhatsApp,
  Email,
  Phone,
  Schedule,
  TrendingUp,
  Speed,
  Security
} from '@mui/icons-material';
import { AnimatedSection, SectionTitle } from '../components/shared';
import { ContactForm, ContactInfo } from '../components/contact';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../components/shared/sharedAnimations';

const ContactPage: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { 
      icon: <Speed />, 
      label: 'Response Time', 
      value: '< 2h', 
      color: '#64ffda',
      description: 'Average response time'
    },
    { 
      icon: <TrendingUp />, 
      label: 'Success Rate', 
      value: '99%', 
      color: '#10b981',
      description: 'Project completion rate'
    },
    { 
      icon: <Security />, 
      label: 'Confidentiality', 
      value: '100%', 
      color: '#a855f7',
      description: 'NDA compliance'
    },
  ];

  const quickActions = [
    {
      icon: <WhatsApp />,
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210?text=Hi%20Navas%2C%20I%27d%20like%20to%20discuss%20a%20project',
      color: '#25D366',
      description: 'Quick chat'
    },
    {
      icon: <Email />,
      label: 'Email',
      href: 'mailto:hello@navasck.dev?subject=Project%20Inquiry',
      color: '#64ffda',
      description: 'Detailed inquiry'
    },
    {
      icon: <Schedule />,
      label: 'Schedule',
      href: 'https://calendly.com/navasck',
      color: '#06b6d4',
      description: 'Book a call'
    }
  ];

  return (
    <>
      {/* Hero Section with Parallax */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div
          style={{ y: backgroundY, opacity: heroOpacity }}
          className="hero-background"
        >
          <AnimatedSection
            variants={staggerContainer}
            py={{ xs: 8, md: 15 }}
            minHeight="70vh"
            background="linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)"
            fullWidth
          >
            <Container maxWidth="xl">
              {/* Animated Background Elements */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                  opacity: 0.4
                }}
              >
                {/* Floating geometric shapes */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: `${20 + i * 10}px`,
                      height: `${20 + i * 10}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 15, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.5,
                    }}
                  >
                    {i % 4 === 0 && (
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          border: `2px solid ${
                            i % 3 === 0
                              ? 'rgba(100, 255, 218, 0.3)'
                              : i % 3 === 1
                              ? 'rgba(168, 85, 247, 0.3)'
                              : 'rgba(6, 182, 212, 0.3)'
                          }`,
                        }}
                      />
                    )}
                    {i % 4 === 1 && (
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(45deg, ${
                            i % 3 === 0
                              ? 'rgba(100, 255, 218, 0.2)'
                              : i % 3 === 1
                              ? 'rgba(168, 85, 247, 0.2)'
                              : 'rgba(6, 182, 212, 0.2)'
                          }, transparent)`,
                          borderRadius: '4px',
                        }}
                      />
                    )}
                    {i % 4 === 2 && (
                      <Box
                        sx={{
                          width: '100%',
                          height: '2px',
                          background: `${
                            i % 3 === 0
                              ? 'rgba(100, 255, 218, 0.4)'
                              : i % 3 === 1
                              ? 'rgba(168, 85, 247, 0.4)'
                              : 'rgba(6, 182, 212, 0.4)'
                          }`,
                          borderRadius: '1px',
                        }}
                      />
                    )}
                    {i % 4 === 3 && (
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          border: `2px solid ${
                            i % 3 === 0
                              ? 'rgba(100, 255, 218, 0.3)'
                              : i % 3 === 1
                              ? 'rgba(168, 85, 247, 0.3)'
                              : 'rgba(6, 182, 212, 0.3)'
                          }`,
                          borderRadius: '4px',
                          transform: 'rotate(45deg)',
                        }}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Large gradient orbs */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`orb-${i}`}
                    style={{
                      position: 'absolute',
                      width: `${150 + i * 50}px`,
                      height: `${150 + i * 50}px`,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${
                        i % 3 === 0
                          ? 'rgba(100, 255, 218, 0.1)'
                          : i % 3 === 1
                          ? 'rgba(168, 85, 247, 0.08)'
                          : 'rgba(6, 182, 212, 0.06)'
                      } 0%, transparent 70%)`,
                      top: `${(i * 20) % 100}%`,
                      left: `${(i * 25) % 100}%`,
                      filter: 'blur(60px)',
                    }}
                    animate={{
                      x: [0, 60, -40, 0],
                      y: [0, -40, 60, 0],
                      scale: [1, 1.3, 0.8, 1],
                    }}
                    transition={{
                      duration: 25 + i * 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </Box>

              {/* Main Hero Content */}
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                >
                  <SectionTitle
                    title="Let's Create Something Amazing Together"
                    subtitle="Ready to transform your ideas into reality? I'm here to help you build innovative digital solutions that make a difference. Let's start the conversation and explore the possibilities."
                    centerAlign={true}
                    titleSize="large"
                  />
                </motion.div>

                {/* Stats Section */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  style={{ marginTop: '48px' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: { xs: 2, md: 4 },
                      flexWrap: 'wrap',
                      mb: 6,
                    }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index}
                        whileHover={{ 
                          scale: 1.1, 
                          rotateY: 10,
                          boxShadow: `0 20px 40px ${stat.color}30`
                        }}
                        style={{ perspective: '1000px' }}
                      >
                        <Box
                          sx={{
                            textAlign: 'center',
                            p: { xs: 3, md: 4 },
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                            backdropFilter: 'blur(20px)',
                            border: `2px solid ${stat.color}30`,
                            minWidth: { xs: 140, md: 180 },
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '-100%',
                              width: '100%',
                              height: '100%',
                              background: `linear-gradient(90deg, transparent, ${stat.color}20, transparent)`,
                              transition: 'left 0.6s ease',
                            },
                            '&:hover::before': {
                              left: '100%',
                            }
                          }}
                        >
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '16px',
                              background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}10 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mx: 'auto',
                              mb: 2,
                              color: stat.color,
                              border: `2px solid ${stat.color}40`,
                            }}
                          >
                            {stat.icon}
                          </Box>
                          <Typography
                            sx={{
                              fontSize: { xs: '1.8rem', md: '2.2rem' },
                              fontWeight: 900,
                              color: stat.color,
                              lineHeight: 1,
                              mb: 0.5,
                              fontFamily: '"Anton", system-ui, sans-serif',
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { xs: '0.9rem', md: '1rem' },
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: 1,
                              mb: 0.5,
                            }}
                          >
                            {stat.label}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '0.8rem',
                              color: 'rgba(255, 255, 255, 0.5)',
                            }}
                          >
                            {stat.description}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>

                {/* Quick Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 2,
                      flexWrap: 'wrap',
                    }}
                  >
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Box
                          component="a"
                          href={action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            px: { xs: 3, md: 4 },
                            py: 2,
                            borderRadius: '16px',
                            background: `linear-gradient(135deg, ${action.color}20 0%, ${action.color}10 100%)`,
                            border: `2px solid ${action.color}40`,
                            color: action.color,
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: `0 10px 30px ${action.color}30`,
                              borderColor: `${action.color}60`,
                            }
                          }}
                        >
                          {action.icon}
                          <Box>
                            <Box sx={{ fontWeight: 700 }}>{action.label}</Box>
                            <Box sx={{ fontSize: '0.8rem', opacity: 0.8 }}>
                              {action.description}
                            </Box>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Box>
            </Container>
          </AnimatedSection>
        </motion.div>
      </Box>

      {/* Main Contact Section */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 6, md: 12 }}
        delay={0.2}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6, lg: 8 }}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <ContactForm />
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <ContactInfo />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </AnimatedSection>

      {/* Interactive Map Section */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 8, md: 10 }}
        delay={0.4}
        background="linear-gradient(135deg, rgba(100, 255, 218, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%)"
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                position: 'relative',
                height: { xs: 350, md: 450 },
                borderRadius: '24px',
                overflow: 'hidden',
                border: '2px solid rgba(100, 255, 218, 0.2)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                backdropFilter: 'blur(30px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Animated Background Grid */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                  animation: 'gridMove 20s linear infinite',
                  opacity: 0.3,
                }}
              />

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '4px',
                    height: '4px',
                    background: i % 2 === 0 ? '#64ffda' : '#a855f7',
                    borderRadius: '50%',
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 15}%`,
                    boxShadow: `0 0 20px ${i % 2 === 0 ? '#64ffda' : '#a855f7'}`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Central Location Marker */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  zIndex: 2,
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #64ffda 0%, #06b6d4 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      boxShadow: '0 10px 40px rgba(100, 255, 218, 0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
                      border: '3px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <LocationOn
                      sx={{
                        fontSize: 40,
                        color: '#000',
                      }}
                    />
                  </Box>
                </motion.div>

                <Typography
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Kozhikode
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    fontWeight: 600,
                  }}
                >
                  Kerala, India
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    px: 3,
                    py: 1,
                    borderRadius: '20px',
                    background: 'rgba(100, 255, 218, 0.1)',
                    border: '1px solid rgba(100, 255, 218, 0.3)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      color: '#64ffda',
                      fontWeight: 600,
                    }}
                  >
                    Available Worldwide (Remote)
                  </Typography>
                </Box>
              </Box>

              {/* Corner Decorations */}
              {[
                { top: 20, left: 20, rotate: 0 },
                { top: 20, right: 20, rotate: 90 },
                { bottom: 20, left: 20, rotate: 270 },
                { bottom: 20, right: 20, rotate: 180 },
              ].map((corner, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    ...corner,
                    width: '40px',
                    height: '40px',
                  }}
                  animate={{
                    rotate: [corner.rotate, corner.rotate + 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.5,
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      border: '2px solid rgba(100, 255, 218, 0.4)',
                      borderRadius: '8px',
                      borderRight: '2px solid transparent',
                      borderBottom: '2px solid transparent',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000,
            }}
          >
            <Fab
              onClick={scrollToTop}
              sx={{
                background: 'linear-gradient(135deg, #64ffda 0%, #06b6d4 100%)',
                color: '#000',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4fd1c7 0%, #0891b2 100%)',
                  boxShadow: '0 8px 25px rgba(100, 255, 218, 0.4)',
                }
              }}
            >
              <KeyboardArrowUp />
            </Fab>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        style={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 1000,
        }}
      >
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        >
          <IconButton
            component="a"
            href="https://wa.me/919876543210?text=Hi%20Navas%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 64,
              height: 64,
              backgroundColor: '#25D366',
              color: 'white',
              boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
              '&:hover': {
                backgroundColor: '#20ba5a',
                boxShadow: '0 12px 35px rgba(37, 211, 102, 0.6)',
                transform: 'scale(1.1)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: -4,
                borderRadius: '50%',
                border: '2px solid #25D366',
                animation: 'whatsappPulse 2s infinite',
              }
            }}
          >
            <WhatsApp sx={{ fontSize: 28 }} />
          </IconButton>
        </motion.div>
      </motion.div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes whatsappPulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;