//src/pages/HomePage.tsx

import { Box, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';




import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';

import { createProjectsHandler, createResumeHandler } from '../utils/navigationHandlers';

// Fonts: self-hosted via Fontsource
import '@fontsource/anton';
import '@fontsource/caveat/700.css';
import { useTypingEffect } from '../components/homepage/useTypingEffect';
import FloatingParticles from '../components/homepage/FloatingParticles';
import { containerVariants } from '../components/homepage/homePageAnimations';
import HeroSection from '../components/homepage/HeroSection';
import { ProfilePhoto } from '../components/shared';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const words = ['NAVAS CK', 'DEVELOPER', 'VIDEO EDITOR', 'SALESMAN', 'TECH ENTHUSIAST'];
  const prefixes = ['I am', 'I am a', 'I am a', 'I am a', 'I am a'];
  
  const { currentText, currentWordIndex } = useTypingEffect(words, {
    speed: 150,
    deleteSpeed: 100,
    pauseTime: 2000
  });

  const handleResumeClick = createResumeHandler();
  const handleProjectsClick = createProjectsHandler(navigate);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
      }}
    >
      <FloatingParticles />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 },
              minHeight: { xs: 'auto', md: '80vh' },
            }}
          >
            <HeroSection
              currentText={currentText}
              currentWordIndex={currentWordIndex}
              words={words}
              prefixes={prefixes}
              onResumeClick={handleResumeClick}
              onProjectsClick={handleProjectsClick}
            />

            <ProfilePhoto />
          </Box>
        </motion.div>

        <ScrollIndicator />
      </Container>
    </Box>
  );
};

export default HomePage;
