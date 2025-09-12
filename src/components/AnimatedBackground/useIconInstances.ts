// src/components/AnimatedBackground/useIconInstances.ts
import { useEffect, useState } from 'react';
import { ALL_ICONS, type IconType } from './icons';

interface IconInstance {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
  IconComponent: IconType;
}

export const useIconInstances = (count: number = 20) => {
  const [iconInstances, setIconInstances] = useState<IconInstance[]>([]);

  useEffect(() => {
    const shuffled = [...ALL_ICONS].sort(() => Math.random() - 0.5).slice(0, count);
    const instances = shuffled.map((icon, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 16 + Math.random() * 32,
      opacity: 0.5 + Math.random() * 0.4,
      blur: Math.random() * 2,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
      IconComponent: icon.Component,
    }));
    setIconInstances(instances);
  }, [count]);

  return iconInstances;
};
