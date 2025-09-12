// src/components/AnimatedBackground/IconRenderer.tsx
import React from 'react';
import type { IconType } from './icons';

interface IconRendererProps {
  IconComponent: IconType;
  style?: React.CSSProperties;
}

const IconRenderer: React.FC<IconRendererProps> = ({ IconComponent, style }) => {
  if (typeof IconComponent === 'string') {
    return <img src={IconComponent} alt="Tech icon" style={{ ...style, objectFit: 'contain' }} />;
  }
  const Component = IconComponent;
  return <Component style={style} />;
};

export default IconRenderer;
