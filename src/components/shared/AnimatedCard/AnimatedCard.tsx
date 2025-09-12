//src/components/shared/AnimatedCard/AnimatedCard.tsx

import React from 'react';
import { Paper } from '@mui/material';
import { motion, type Variants } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  className?: string;
  sx?: any;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const hoverVariants: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  tap: { scale: 0.98 }
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  delay = 0,
  hoverEffect = true,
  glowEffect = false,
  className,
  sx,
  variants = defaultVariants
}) => {
  const cardSx = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: { xs: 3, md: 4 },
    boxShadow: glowEffect
      ? '0 8px 32px rgba(100, 255, 218, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    '&:hover': hoverEffect
      ? {
          borderColor: 'rgba(100, 255, 218, 0.3)',
          boxShadow: glowEffect
            ? '0 16px 48px rgba(100, 255, 218, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            : '0 16px 48px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }
      : {},
    ...sx
  };

  const modifiedVariants: Variants = {
    ...variants,
    visible: {
      ...(variants.visible as any),
      transition: {
        ...(variants.visible as any)?.transition,
        duration: 0.6,
        delay,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      variants={modifiedVariants}
      {...(hoverEffect ? { whileHover: 'hover', whileTap: 'tap' } : {})}
      className={className}
    >
      <motion.div variants={hoverEffect ? (hoverVariants as Variants) : {}}>
        <Paper sx={cardSx} elevation={0}>
          {children}
        </Paper>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
