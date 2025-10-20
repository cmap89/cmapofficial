# AI Agent Instructions for CMAP Official Website

## Project Overview

This is a Next.js-based website for CMAP (music artist) featuring music playback, video content, and booking functionality. The project uses React 19 with modern features and follows a component-based architecture.

## Key Architecture Patterns

### Component Structure

- Root layout (`app/layout.jsx`) defines the base page structure with:
  - Navbar at top
  - Three-column layout with sidebars
  - Video section
  - Footer
- Components are organized in `app/components/` with corresponding CSS in `styles/`
- Media assets (images, music) are stored in `public/`

### Core Components

- `MusicPlayer.jsx`: Custom audio player with track management and controls
- `BookingCalendar.jsx`: Uses FullCalendar for event scheduling
- `Video.jsx`: Handles YouTube video embeds
- Each component has its own CSS file in `styles/`

## Development Workflow

### Setup and Running

```bash
npm install    # Install dependencies
npm run dev    # Start development server
npm run build  # Create production build
npm run start  # Start production server
```

### Key Dependencies

- Next.js 15.1.x for routing and SSR
- React 19.0.0
- FullCalendar components for booking functionality
- SASS for styling

## Conventions and Patterns

### Component Structure

- Use 'use client' directive for client-side components
- Props interface definitions at top of component files
- State management through React hooks (useState, useRef, useEffect)

### Asset Management

- Images: `public/Pics/`
- Music: `public/Music/`
- Logos: `public/Pics/CMAP_Logos_2022/`

### CSS Strategy

- Component-specific CSS files in `styles/`
- Global styles in `styles/globals.css`
- CSS class naming follows component names (e.g., `player` for MusicPlayer)

## Integration Points

- YouTube embeds in Video component
- FullCalendar for booking system
- Music streaming integration (Spotify links in track metadata)

When modifying this codebase, maintain the existing component structure and CSS organization. Reference existing components for patterns on state management and event handling.
