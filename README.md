# Behavior Exchange Exercise

An interactive web application designed to help partners strengthen their relationship through positive behavior identification and commitment.

## Overview

This app guides two partners through a structured exercise where they:
1. Take turns guessing behaviors that would make each other happy
2. Collect 5 correct guesses for each partner
3. Select one behavior each to commit to doing regularly

Built with React, Vite, and TailwindCSS for a clean, modern, and responsive user experience.

## Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript** - No TypeScript, pure JS implementation

## Project Structure

```
src/
├── components/
│   ├── Button.jsx           # Reusable button with variants
│   ├── Input.jsx            # Styled input component
│   └── ScreenContainer.jsx  # Layout wrapper
├── screens/
│   ├── Intro.jsx            # Welcome screen
│   ├── PartnerNames.jsx     # Partner name input
│   ├── GuessRound.jsx       # Guessing interface (reused for both partners)
│   ├── FinalLists.jsx       # Review and selection screen
│   └── Commitments.jsx      # Final commitment summary
├── App.jsx                  # Main app with state management
├── main.jsx                 # Entry point
└── index.css                # Tailwind imports and global styles
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the App

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Features

- Clean, minimal UI with smooth transitions
- Step-by-step guided workflow
- Real-time feedback and progress tracking
- Fully responsive design
- No database required - all state managed in React
- Beautiful gradient backgrounds and modern styling

## How It Works

1. **Introduction**: Brief overview of the exercise
2. **Names**: Both partners enter their names
3. **Partner A Guessing**: Partner A guesses behaviors for Partner B
4. **Partner B Guessing**: Partner B guesses behaviors for Partner A
5. **Review Lists**: Both partners see their complete lists
6. **Select Commitments**: Each partner chooses one behavior to commit to
7. **Summary**: Final screen showing both commitments with option to restart

## Design Principles

- Soft, welcoming color palette (gradients from blue to lavender)
- Ample whitespace for clarity
- Clear visual hierarchy
- Smooth hover effects and transitions
- Accessible and easy to use
- Mobile-friendly responsive design
