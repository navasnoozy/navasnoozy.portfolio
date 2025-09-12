// src/components/homepage/HeroSubtitle.tsx

import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { itemVariants } from './homePageAnimations';


const HeroSubtitle: React.FC = () => {
  return (
    <motion.div variants={itemVariants}>
      <Typography
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem', lg: '1.4rem' },
          color: 'rgba(255, 255, 255, 0.7)',
          mb: { xs: 4, md: 6 },
          maxWidth: '600px',
          lineHeight: 1.6,
          fontFamily: '"Inter", "Roboto", sans-serif',
        }}
      >
        Passionate about creating innovative solutions through code, compelling visual stories through
        video, and meaningful connections through technology. Let's build something amazing together.
      </Typography>
    </motion.div>
  );
};

export default HeroSubtitle;
