// src/components/contact/NeuralNetworkAnimation.tsx
import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  layer: number;
  connections: number[];
}

const NeuralNetworkAnimation: React.FC = () => {
  const nodes = useMemo(() => {
    const nodeList: Node[] = [];
    const layers = 4;
    const nodesPerLayer = [3, 5, 5, 3];
    const radius = 150;
    let nodeId = 0;

    // Create nodes in circular layers
    for (let layer = 0; layer < layers; layer++) {
      const layerRadius = radius * (0.3 + layer * 0.23);
      const nodeCount = nodesPerLayer[layer];
      
      for (let i = 0; i < nodeCount; i++) {
        const angle = (2 * Math.PI * i) / nodeCount + (layer * Math.PI / 8);
        const x = Math.cos(angle) * layerRadius;
        const y = Math.sin(angle) * layerRadius;
        
        // Create connections to next layer
        const connections: number[] = [];
        if (layer < layers - 1) {
          const nextLayerStart = nodeId + nodeCount;
          const nextLayerCount = nodesPerLayer[layer + 1];
          
          // Connect to 2-3 random nodes in next layer
          const connectionCount = Math.min(2 + Math.floor(Math.random() * 2), nextLayerCount);
          const availableNodes = Array.from({ length: nextLayerCount }, (_, i) => nextLayerStart + i);
          
          for (let j = 0; j < connectionCount; j++) {
            const randomIndex = Math.floor(Math.random() * availableNodes.length);
            connections.push(availableNodes[randomIndex]);
            availableNodes.splice(randomIndex, 1);
          }
        }
        
        nodeList.push({ id: nodeId++, x, y, layer, connections });
      }
    }
    
    return nodeList;
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 400,
      }}
    >
      {/* Rotating container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'relative',
          width: 400,
          height: 400,
        }}
      >
        {/* SVG for connections */}
        <svg
          width="400"
          height="400"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}
          viewBox="-200 -200 400 400"
        >
          {/* Draw connections */}
          {nodes.map((node) =>
            node.connections.map((targetId) => {
              const targetNode = nodes.find((n) => n.id === targetId);
              if (!targetNode) return null;
              
              return (
                <motion.line
                  key={`${node.id}-${targetId}`}
                  x1={node.x}
                  y1={node.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    pathLength: { duration: 2, ease: 'easeInOut' },
                    opacity: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: Math.random() * 2,
                    },
                  }}
                />
              );
            })
          )}
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64ffda" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(${node.x - 6}px, ${node.y - 6}px)`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: index * 0.05,
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${
                    node.layer === 0
                      ? '#64ffda'
                      : node.layer === 1
                      ? '#a855f7'
                      : node.layer === 2
                      ? '#06b6d4'
                      : '#10b981'
                  } 0%, transparent 70%)`,
                  border: `2px solid ${
                    node.layer === 0
                      ? '#64ffda'
                      : node.layer === 1
                      ? '#a855f7'
                      : node.layer === 2
                      ? '#06b6d4'
                      : '#10b981'
                  }`,
                  boxShadow: `0 0 20px ${
                    node.layer === 0
                      ? '#64ffda'
                      : node.layer === 1
                      ? '#a855f7'
                      : node.layer === 2
                      ? '#06b6d4'
                      : '#10b981'
                  }`,
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Central core */}
        <motion.div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #64ffda 0%, transparent 70%)',
              boxShadow: '0 0 40px #64ffda',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          border: '1px solid rgba(100, 255, 218, 0.2)',
          borderTop: '2px solid #64ffda',
          borderRight: '2px solid #a855f7',
        }}
      />

      {/* Static outer ring */}
      <Box
        sx={{
          position: 'absolute',
          width: 440,
          height: 440,
          borderRadius: '50%',
          border: '1px dashed rgba(100, 255, 218, 0.1)',
        }}
      />
    </Box>
  );
};

export default NeuralNetworkAnimation;