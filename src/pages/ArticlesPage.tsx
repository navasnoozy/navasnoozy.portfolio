//src/pages/ArticlesPage.tsx

// src/pages/ArticlesPage.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  AutoStories, 
  TrendingUp, 
  Create,
  RssFeed
} from '@mui/icons-material';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle';
import { fadeInUp } from '../components/shared/sharedAnimations';
import ArticlesGrid from '../components/articles/ArticlesGrid';
import GradientText from '../components/shared/GradientText';

const ArticlesPage: React.FC = () => {
  const handleSubscribe = () => {
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription');
  };

  const handleWriteTogether = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 8, md: 12 }}
        minHeight="50vh"
        background="linear-gradient(135deg, rgba(100, 255, 218, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%)"
      >
        <Box sx={{ position: 'relative' }}>
          {/* Animated Background Elements */}
          <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {/* Floating Books */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`book-${i}`}
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  rotate: [-5, 5, -5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              >
                <AutoStories
                  sx={{
                    fontSize: `${30 + i * 10}px`,
                    color: `rgba(100, 255, 218, ${0.1 + i * 0.05})`,
                  }}
                />
              </motion.div>
            ))}

            {/* Animated Gradient Orbs */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                style={{
                  position: 'absolute',
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, rgba(100, 255, 218, ${0.2 - i * 0.03}) 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                  top: `${20 + i * 20}%`,
                  left: `${10 + i * 25}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 1.5,
                }}
              />
            ))}
          </Box>

          {/* Hero Content */}
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ mb: 3 }}>
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  style={{ display: 'inline-block' }}
                >
                  <Create 
                    sx={{ 
                      fontSize: { xs: '3rem', md: '4rem' },
                      color: '#64ffda',
                      filter: 'drop-shadow(0 0 20px rgba(100, 255, 218, 0.5))'
                    }} 
                  />
                </motion.div>
              </Box>

              <GradientText
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  fontFamily: '"Anton", system-ui, sans-serif',
                  textTransform: 'uppercase',
                  mb: 3
                }}
                animate
              >
                Thoughts & Insights
              </GradientText>

              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: { xs: '1.1rem', md: '1.4rem' },
                  maxWidth: 800,
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.6
                }}
              >
                Exploring technology, design, and everything in between. 
                Join me as I share my journey, discoveries, and lessons learned 
                in the ever-evolving world of software development.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<RssFeed />}
                    onClick={handleSubscribe}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #64ffda 0%, #06b6d4 100%)',
                      color: '#000',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px rgba(100, 255, 218, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #4dd5b8 0%, #0891b2 100%)',
                        boxShadow: '0 12px 35px rgba(100, 255, 218, 0.4)',
                      }
                    }}
                  >
                    Subscribe to Newsletter
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<TrendingUp />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      border: '2px solid rgba(100, 255, 218, 0.3)',
                      color: '#64ffda',
                      borderRadius: '12px',
                      '&:hover': {
                        border: '2px solid rgba(100, 255, 218, 0.6)',
                        background: 'rgba(100, 255, 218, 0.1)',
                      }
                    }}
                  >
                    Popular Articles
                  </Button>
                </motion.div>
              </Box>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: { xs: 3, md: 6 },
                  mt: 6,
                  flexWrap: 'wrap',
                }}
              >
                {[
                  { label: 'Articles', value: '50+', color: '#64ffda' },
                  { label: 'Topics', value: '6', color: '#a855f7' },
                  { label: 'Platforms', value: '4', color: '#06b6d4' },
                  { label: 'Readers', value: '10K+', color: '#10b981' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          fontSize: { xs: '1.8rem', md: '2.5rem' },
                          fontWeight: 900,
                          color: stat.color,
                          lineHeight: 1,
                          mb: 0.5,
                          textShadow: `0 0 20px ${stat.color}40`
                        }}
                      >
                        {stat.value}
                      </Box>
                      <Box
                        sx={{
                          fontSize: '0.9rem',
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                        }}
                      >
                        {stat.label}
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </AnimatedSection>

      {/* Articles Grid Section */}
      <AnimatedSection variants={fadeInUp} py={{ xs: 6, md: 10 }} delay={0.3}>
        <ArticlesGrid />
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 8, md: 10 }}
        delay={0.5}
        background="linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)"
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
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Background Pattern */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                opacity: 0.1,
                pointerEvents: 'none'
              }}
            >
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    rgba(100, 255, 218, 0.1) 10px,
                    rgba(100, 255, 218, 0.1) 20px
                  )`,
                  backgroundSize: '200% 200%'
                }}
              />
            </Box>

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{ display: 'inline-block', marginBottom: '16px' }}
              >
                <Create
                  sx={{
                    fontSize: '3rem',
                    color: '#64ffda',
                    filter: 'drop-shadow(0 0 30px rgba(100, 255, 218, 0.6))'
                  }}
                />
              </motion.div>

              <Box
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
                Want to Write Together?
              </Box>
              
              <Box
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                I'm always excited to collaborate on technical articles, tutorials, 
                and thought pieces. Let's share knowledge and inspire the dev community together!
              </Box>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Box
                  component="button"
                  onClick={handleWriteTogether}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #64ffda 0%, #06b6d4 100%)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(100, 255, 218, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 35px rgba(100, 255, 218, 0.4)',
                    },
                  }}
                >
                  Let's Collaborate
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </AnimatedSection>
    </>
  );
};

export default ArticlesPage;