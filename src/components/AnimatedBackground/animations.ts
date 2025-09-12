// src/components/AnimatedBackground/animations.ts
export const gradientVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  },
};

export const gradientTransition = {
  duration: 35,
  repeat: Infinity,
  repeatType: 'loop' as const,
  ease: 'linear' as const,
};

export const getIconAnimation = (duration: number, delay: number) => ({
  y: [0, -20, 0],
  rotate: [0, 360],
  x: [-10, 10],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
  } as const,
});
