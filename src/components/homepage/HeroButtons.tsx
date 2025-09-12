// src/components/homepage/HeroButtons.tsx

import React from 'react';
import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Download from '@mui/icons-material/Download';
import Work from '@mui/icons-material/Work';
import { buttonVariants, itemVariants } from './homePageAnimations';


interface HeroButtonsProps {
  onResumeClick: () => void;
  onProjectsClick: () => void;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ onResumeClick, onProjectsClick }) => {
  return (
    <motion.div variants={itemVariants}>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' },
        }}
      >
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            variant="contained"
            size="large"
            startIcon={<Download />}
            onClick={onResumeClick}
            sx={{
              px: 4,
              py: 2,
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 600,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #64ffda 0%, #06b6d4 100%)',
              color: '#000',
              border: 'none',
              boxShadow: '0 8px 25px rgba(100, 255, 218, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #4dd5b8 0%, #0891b2 100%)',
                boxShadow: '0 12px 35px rgba(100, 255, 218, 0.4)',
              },
              fontFamily: '"Inter", "Roboto", sans-serif',
            }}
          >
            Check My Resume
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            variant="outlined"
            size="large"
            startIcon={<Work />}
            onClick={onProjectsClick}
            sx={{
              px: 4,
              py: 2,
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 600,
              borderRadius: '12px',
              border: '2px solid rgba(100, 255, 218, 0.3)',
              color: '#64ffda',
              background: 'rgba(100, 255, 218, 0.05)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                border: '2px solid rgba(100, 255, 218, 0.6)',
                background: 'rgba(100, 255, 218, 0.1)',
                color: '#ffffff',
              },
              fontFamily: '"Inter", "Roboto", sans-serif',
            }}
          >
            View My Work
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HeroButtons;
