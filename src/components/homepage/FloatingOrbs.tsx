//src/components/homepage/FloatingOrbs.tsx

import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs: React.FC = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'rgba(100, 255, 218, 0.6)',
            top: '50%',
            left: '50%',
            transformOrigin: `${120 + Math.random() * 80}px 0px`,
          }}
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ 
            duration: 8 + Math.random() * 4, 
            repeat: Infinity, 
            delay: i * 0.5, 
            ease: 'linear' 
          }}
        />
      ))}
    </>
  );
};

export default FloatingOrbs;
