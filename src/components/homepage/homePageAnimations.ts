//src/components/homepage/homePageAnimations.ts
import { type Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const textVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
};

export const buttonVariants: Variants = {
  hover: { scale: 1.05, y: -2, transition: { duration: 0.2, ease: 'easeInOut' } },
  tap: { scale: 0.95 },
};

export const profileVariants: Variants = {
  hidden: { x: 100, opacity: 0, rotate: 10 },
  visible: { x: 0, opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.5 } },
  hover: { scale: 1.05, rotate: -2, transition: { duration: 0.3 } },
};

export const floatingVariants: Variants = {
  animate: { y: [-10, 10, -10], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
};
