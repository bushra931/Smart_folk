# Discover India's Living Traditions

## Overview
A React application for discovering and booking traditional Indian folk artists, artisans, and performers. Built with Vite, React, TypeScript, and Tailwind CSS with shadcn/ui components.

## Current State
- Imported from Lovable
- Frontend-only application (no backend)
- Running on port 5000

## Project Structure
- `src/` - Main source code
  - `components/` - React components including shadcn/ui
  - `pages/` - Page components (Index, Explore, ArtistProfile, Bookings, Profile)
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
- `public/` - Static assets

## Tech Stack
- React 18 with TypeScript
- Vite for build/dev
- Tailwind CSS for styling
- shadcn/ui component library
- TanStack React Query for data fetching
- React Router for navigation
- Framer Motion for animations

## Development
Run `npm run dev` to start the development server on port 5000.

## Recent Changes
- 2026-01-16: Migrated from Lovable to Replit
  - Updated Vite config to use port 5000
  - Added allowedHosts for Replit environment
