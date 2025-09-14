// src/components/shared/AnimatedSection.tsx
import { Box, Container } from '@mui/material';
import { motion, useInView, type Variants } from 'framer-motion';
import React, { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  containerProps?: any;  // can tighten later if needed
  fullWidth?: boolean;
  background?: string;  // <-- changed back from backgroundColor
  minHeight?: string | number;
  py?: number | { xs: number; md: number };
  delay?: number;
}

const defaultVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  variants = defaultVariants,
  className,
  containerProps,
  fullWidth = false,
  background,
  minHeight,
  py = { xs: 6, md: 10 },
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const modifiedVariants = delay > 0 ? {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any)?.transition,
        delay
      }
    }
  } : variants;

  return (
    <motion.div
      ref={ref}
      variants={modifiedVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      <Box
        sx={{
          py,
          background,   // <-- use background, works for gradients or colors
          minHeight,
          position: 'relative'
        }}
      >
        {fullWidth ? (
          children
        ) : (
          <Container maxWidth="xl" {...containerProps}>
            {children}
          </Container>
        )}
      </Box>
    </motion.div>
  );
};

export default AnimatedSection;
