// src/components/skills/SkillProgressBar.tsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillProgressBarProps {
  level: number;
  color: string;
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ level, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        height: '6px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '3px',
        overflow: 'hidden',
      }}
    >
      {/* Background glow effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(90deg, ${color}20 0%, transparent 100%)`,
          opacity: 0.5,
        }}
      />

      {/* Progress fill */}
      <motion.div
        style={{
          height: '100%',
          background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
          borderRadius: '3px',
          position: 'relative',
          overflow: 'hidden',
        }}
        initial={{ width: '0%' }}
        animate={isInView ? { width: `${level}%` } : { width: '0%' }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
          delay: 0.2,
        }}
      >
        {/* Shine effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          }}
          animate={{
            left: ['100%', '-100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Pulse effect for high-level skills */}
      {level >= 85 && (
        <motion.div
          style={{
            position: 'absolute',
            top: '-1px',
            left: 0,
            right: 0,
            bottom: '-1px',
            borderRadius: '4px',
            border: `1px solid ${color}80`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </Box>
  );
};

export default SkillProgressBar;