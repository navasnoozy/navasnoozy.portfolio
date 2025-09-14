// src/pages/ProjectsPage.tsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/shared/AnimatedSection';


import { fadeInUp } from '../components/shared/sharedAnimations';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import SectionTitle from '../components/shared/SectionTitle';

const ProjectsPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 8, md: 12 }}
        minHeight="40vh"
        background="linear-gradient(135deg, rgba(100, 255, 218, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%)"
      >
        <Box sx={{ position: 'relative' }}>
          {/* Floating Elements for Visual Interest */}
          <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                  borderRadius: '50%',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </Box>

          <SectionTitle
            title="My Projects"
            subtitle="Explore a collection of my work spanning web development, mobile applications, and creative media. Each project represents a unique challenge solved with innovative solutions and modern technologies."
            centerAlign={true}
          />

          {/* Animated Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 3, md: 6 },
                mt: 4,
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'Completed', value: '50+', color: '#64ffda' },
                { label: 'In Progress', value: '5', color: '#a855f7' },
                { label: 'Open Source', value: '12', color: '#06b6d4' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.1,
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
      </AnimatedSection>

      {/* Projects Grid Section */}
      <AnimatedSection variants={fadeInUp} py={{ xs: 6, md: 10 }} delay={0.3}>
        <ProjectsGrid />
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection
        variants={fadeInUp}
        py={{ xs: 6, md: 8 }}
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
            }}
          >
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
              Have a Project in Mind?
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
              I'm always excited to work on new challenges and bring innovative ideas to life. Let's collaborate and
              create something amazing together!
            </Box>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
              <Box
                component="button"
                onClick={() => (window.location.href = '/contact')}
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
                Let's Work Together
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </AnimatedSection>
    </>
  );
};

export default ProjectsPage;
