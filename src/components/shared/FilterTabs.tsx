// src/components/shared/FilterTabs.tsx
import React from 'react';
import { Box, Tab, Tabs, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import type { SvgIconComponent } from '@mui/icons-material';

export interface FilterCategory {
  value: string;
  label: string;
  icon?: SvgIconComponent;
  count?: number;
  gradient?: string;
}

interface FilterTabsProps {
  categories: FilterCategory[];
  selectedCategory: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  showCounts?: boolean;
  variant?: 'default' | 'chips';
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  categories,
  selectedCategory,
  onChange,
  showCounts = false,
  variant = 'default'
}) => {
  if (variant === 'chips') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
        {categories.map((category) => (
          <motion.div
            key={category.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Chip
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {category.icon && <category.icon sx={{ fontSize: '1rem' }} />}
                  <span>{category.label}</span>
                  {showCounts && category.count !== undefined && (
                    <Box
                      component="span"
                      sx={{
                        ml: 0.5,
                        px: 1,
                        py: 0.25,
                        background: 'rgba(100, 255, 218, 0.2)',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}
                    >
                      {category.count}
                    </Box>
                  )}
                </Box>
              }
              onClick={() => onChange({} as React.SyntheticEvent, category.value)}
              sx={{
                background: selectedCategory === category.value
                  ? category.gradient || 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)'
                  : 'transparent',
                color: selectedCategory === category.value ? '#000' : 'rgba(255, 255, 255, 0.8)',
                border: selectedCategory === category.value
                  ? 'none'
                  : '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: selectedCategory === category.value
                    ? category.gradient || 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)'
                    : 'rgba(100, 255, 218, 0.1)',
                  borderColor: 'rgba(100, 255, 218, 0.3)',
                  transform: 'translateY(-2px)'
                }
              }}
            />
          </motion.div>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 1,
          overflowX: 'auto',
          maxWidth: '100%'
        }}
      >
        <Tabs
          value={selectedCategory}
          onChange={onChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(90deg, #64ffda 0%, #a855f7 100%)',
              height: 3,
              borderRadius: 2
            },
            '& .MuiTab-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: { xs: '0.9rem', md: '1rem' },
              minHeight: 48,
              '&.Mui-selected': {
                color: '#64ffda'
              },
              '&:hover': {
                color: 'rgba(255, 255, 255, 0.9)'
              }
            }
          }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Tab
                key={category.value}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {Icon && <Icon sx={{ fontSize: '1.2rem' }} />}
                    <span>{category.label}</span>
                    {showCounts && category.count !== undefined && (
                      <Box
                        sx={{
                          ml: 1,
                          px: 1.5,
                          py: 0.5,
                          background: 'rgba(100, 255, 218, 0.1)',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: '#64ffda'
                        }}
                      >
                        {category.count}
                      </Box>
                    )}
                  </Box>
                }
                value={category.value}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default FilterTabs;