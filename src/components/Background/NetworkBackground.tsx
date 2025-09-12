//src/components/Background/NetworkBackground.tsx
import React, { useMemo, useCallback } from 'react';
import type { Engine, Container, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';

interface NetworkBackgroundProps {
  zIndex?: number;
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({ zIndex = -10 }) => {
  // initialize engine once
  useMemo(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // optional callback
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex:-10 ,
    },
    background: {
      color: {
        value: '#000000',
      },
    },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: '#888888',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: {
          enable: true,
          minimumValue: 0.3,
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        random: true,
        value: {
          min: 1,
          max: 4,
        },
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#888888',
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: false,
        },
        resize: {
          enable: true,
          delay: 0,
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.6,
          },
        },
      },
    },
  }), [zIndex]);

  return (
    <Particles
      id="network-background"
      particlesLoaded={particlesLoaded}
      options={options}
      className="pointer-events-none fixed top-0 left-0 w-full h-full"
    />
  );
};

export default NetworkBackground;
