// src/components/homepage/FloatingParticles.tsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const FloatingParticles: React.FC = () => {
  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            borderRadius: '50%',
            background: `rgba(100, 255, 218, ${Math.random() * 0.3 + 0.1})`,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{ 
            y: [0, -30, 0], 
            opacity: [0.2, 0.6, 0.2], 
            scale: [1, 1.2, 1] 
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </Box>
  );
};

export default FloatingParticles;
