//src/components/ScrollIndicator/ScrollIndicator.tsx

import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMore from '@mui/icons-material/ExpandMore';

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'rgba(255, 255, 255, 0.6)',
      }}
    >
      <Typography sx={{ fontSize: '0.9rem', mb: 1, fontFamily: '"Inter", "Roboto", sans-serif' }}>
        Scroll to explore
      </Typography>
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ExpandMore />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
