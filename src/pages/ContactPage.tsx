// src/pages/ContactPage.tsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle';
import ContactForm from '../components/contact/ContactForm';
import NeuralNetworkAnimation from '../components/contact/NeuralNetworkAnimation';
import { AnimatedCard } from '../components/shared';
import { fadeInUp, fadeInLeft, fadeInRight } from '../components/shared/sharedAnimations';
import { Rocket, Speed, CheckCircle } from '@mui/icons-material';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section with Title */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 8, md: 12 }}
        minHeight="30vh"
      >
        <SectionTitle
          title="Let's Connect"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you!"
          centerAlign={true}
        />

        {/* Quick Promise Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Grid container spacing={3} sx={{ mt: 2, maxWidth: 800, mx: 'auto' }}>
            {[
              {
                icon: <Speed />,
                title: 'Quick Response',
                description: 'Usually within 24 hours',
                color: '#64ffda'
              },
              {
                icon: <Rocket />,
                title: 'Ready to Start',
                description: 'Available for new projects',
                color: '#a855f7'
              },
              {
                icon: <CheckCircle />,
                title: '100% Reliable',
                description: 'Committed to your success',
                color: '#06b6d4'
              }
            ].map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 4 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 2,
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '12px',
                      border: `1px solid ${item.color}20`,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 1.5,
                        borderRadius: '12px',
                        background: `${item.color}15`,
                        color: item.color,
                        mb: 2
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: 'white',
                        mb: 0.5,
                        fontSize: '1rem'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.85rem'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </AnimatedSection>

      {/* Main Contact Section with Form and Neural Network */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 6, md: 10 }}
        delay={0.3}
        background="linear-gradient(135deg, rgba(100, 255, 218, 0.02) 0%, rgba(168, 85, 247, 0.02) 100%)"
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </Grid>

          {/* Neural Network Animation */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AnimatedCard delay={0.3}>
                <Box sx={{ py: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Connecting Ideas
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textAlign: 'center',
                      mb: 3,
                      fontSize: '0.95rem'
                    }}
                  >
                    Like a neural network, great projects emerge from meaningful connections
                  </Typography>
                  <NeuralNetworkAnimation />
                </Box>
              </AnimatedCard>
            </motion.div>
          </Grid>
        </Grid>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 6, md: 8 }}
        delay={0.5}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: 'center',
              p: { xs: 4, md: 6 },
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(100, 255, 218, 0.2)',
              backdropFilter: 'blur(20px)',
              maxWidth: 800,
              mx: 'auto',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated background gradient */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, transparent 50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Let's Build Something Amazing
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  mb: 1,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Whether it's a web application, mobile app, or creative project,
                I'm here to help bring your vision to life.
              </Typography>
              
              {/* Animated status indicator */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  mt: 3,
                  px: 3,
                  py: 1.5,
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '30px'
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#10b981',
                    animation: 'pulse 2s infinite'
                  }}
                />
                <Typography
                  sx={{
                    color: '#10b981',
                    fontWeight: 600
                  }}
                >
                  Currently accepting new projects
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </AnimatedSection>

      {/* Pulse Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 15px #10b981;
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 30px #10b981;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;