// src/components/skills/AnimatedCounter.tsx
import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  isInView: boolean;
  delay?: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  isInView,
  delay = 0,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTimer = setTimeout(() => {
      const startTime = Date.now();
      const startCount = 0;
      
      const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(startCount + (target - startCount) * easeOut);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      animateCount();
    }, delay);

    return () => clearTimeout(startTimer);
  }, [isInView, target, delay, duration]);

  return <>{count}{suffix}</>;
};

export default AnimatedCounter;