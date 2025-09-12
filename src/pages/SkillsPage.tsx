// src/pages/SkillsPage.tsx

// src/pages/SkillsPage.tsx
import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import SkillsHero from '../components/skills/SkillsHero';
import SkillsGrid from '../components/skills/SkillsGrid';
import SkillsStats from '../components/skills/SkillsStats';
import FloatingParticles from '../components/homepage/FloatingParticles';

const SkillsPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 4 },
      }}
    >
      <FloatingParticles />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SkillsHero />
          <SkillsStats />
          <SkillsGrid />
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsPage;