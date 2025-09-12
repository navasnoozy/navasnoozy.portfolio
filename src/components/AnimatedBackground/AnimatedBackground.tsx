// src/components/AnimatedBackground/AnimatedBackground.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useIconInstances } from './useIconInstances';
import IconRenderer from './IconRenderer';
import { gradientVariants, gradientTransition, getIconAnimation } from './animations';

const AnimatedBackground: React.FC = () => {
  const iconInstances = useIconInstances(70);

  return (
    <motion.div
      className="fixed inset-0 z-[10] overflow-hidden"
      initial={false}
      style={{
        background: 'transparent',
        backgroundSize: '400% 400%',
      }}
      variants={gradientVariants}
      animate="animate"
      transition={gradientTransition}
    >
      <div className="absolute inset-0">
        {iconInstances.map(({ id, top, left, size, opacity, blur, duration, delay, IconComponent }) => (
          <motion.div
            key={id}
            className="absolute"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              filter: `blur(${blur}px)`,
              transform: `scale(${typeof window !== 'undefined' && window.innerWidth < 768 ? 0.7 : 1})`,
            }}
            initial={{ y: 0, rotate: 0, x: 0 }}
            animate={getIconAnimation(duration, delay)}
          >
            <IconRenderer
              IconComponent={IconComponent}
              style={{ width: '100%', height: '100%', fill: 'currentColor', color: 'white' }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedBackground;
