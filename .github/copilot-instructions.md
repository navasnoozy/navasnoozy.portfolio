# AI Coding Assistant Instructions

This document provides essential knowledge for AI agents working with this portfolio project codebase.

## Project Overview

- Modern React portfolio website built with TypeScript, Vite, and Material-UI
- Features animated backgrounds, interactive components, and responsive design
- Uses Framer Motion for animations and TailwindCSS for styling

## Architecture & Structure

### Key Directories

- `src/components/` - React components organized by feature/section
  - `AnimatedBackground/` - Dynamic background animations and icon rendering
  - `homepage/` - Landing page components with hero section
  - `skills/` - Skills showcase with progress bars and statistics
- `src/pages/` - Route-based page components
- `src/assets/icons/` - Tech stack and skill icons
- `src/layouts/` - Layout wrapper with shared navigation

### Component Patterns

1. **Component Organization**

   - Feature-based directory structure (e.g., `homepage/`, `skills/`)
   - Component files paired with their type definitions and animations
   - Example: See `src/components/AnimatedBackground/IconRenderer.tsx`

2. **Type Safety**

   - TypeScript interfaces for component props
   - Strict type checking enabled
   - Example:

   ```typescript
   interface HeroSectionProps {
     currentText: string;
     currentWordIndex: number;
     words: string[];
     prefixes: string[];
     onResumeClick: () => void;
     onProjectsClick: () => void;
   }
   ```

3. **Animation Patterns**
   - Framer Motion for component animations
   - Animation configs separated into dedicated files (e.g., `homePageAnimations.ts`)
   - Common variants shared across related components

## Development Workflow

### Setup & Installation

```bash
npm install  # Install dependencies
npm run dev  # Start development server
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript build first)
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build

### Tech Stack

- React 19 with TypeScript
- Vite for build tooling
- Material-UI & TailwindCSS for styling
- Framer Motion for animations
- React Router for navigation

## Key Integration Points

1. **Routing**: Defined in `src/Router.tsx` using react-router-dom
2. **Styling**:
   - Material-UI components with custom themes
   - TailwindCSS for utility classes
   - Emotion for styled components
3. **Animation System**:
   - Framer Motion for component animations
   - Particle system for background effects

## Common Tasks

- Adding new pages: Create component in `src/pages/` and add route in `Router.tsx`
- Adding new skills: Update `skillsData.ts` and add icon to `src/assets/icons/`
- Creating new animations: Add variants to respective animation files
- Styling components: Use combination of MUI's `sx` prop and TailwindCSS classes
