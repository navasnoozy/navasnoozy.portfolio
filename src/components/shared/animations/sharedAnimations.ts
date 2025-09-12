// src/components/shared/animations/sharedAnimations.ts
import { type Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export const fadeInLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export const fadeInRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const slideInFromBottom: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } 
  }
};

export const hoverScale: Variants = {
  hover: { 
    scale: 1.05, 
    y: -5,
    transition: { duration: 0.3, ease: 'easeInOut' } 
  },
  tap: { scale: 0.95 }
};

export const rotateIn: Variants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { 
    rotate: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
};

export const bounceIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      damping: 15, 
      stiffness: 200,
      duration: 0.8
    } 
  }
};

export const floatingAnimation: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};