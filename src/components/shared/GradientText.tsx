
// src/components/shared/GradientText.tsx
import React from 'react';
import { Typography, type TypographyProps } from '@mui/material';
import { motion } from 'framer-motion';

interface GradientTextProps extends Omit<TypographyProps, 'children'> {
  children: React.ReactNode;
  gradient?: string;
  animate?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'linear-gradient(135deg, #64ffda 0%, #a855f7 50%, #06b6d4 100%)',
  animate = false,
  sx,
  ...props
}) => {
  const textSx = {
    background: gradient,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: animate ? '200% 200%' : 'auto',
    ...sx
  };

  if (animate) {
    return (
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ display: 'inline-block' }}
      >
        <Typography sx={textSx} {...props}>
          {children}
        </Typography>
      </motion.div>
    );
  }

  return (
    <Typography sx={textSx} {...props}>
      {children}
    </Typography>
  );
};

export default GradientText;