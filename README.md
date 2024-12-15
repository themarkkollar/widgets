# Greenspark Product Widgets

A React application that displays and manages eco-friendly product widgets. Each widget represents different environmental impacts like carbon offsetting, tree planting, and plastic bottle collection.

## Features

- Display multiple product widgets with different environmental impacts
- Toggle widget activation status
- Link/unlink widgets to public profile
- Customize widget colors (blue, green, beige, white, black)
- Responsive design for mobile and desktop
- Interactive UI components with hover effects
- Storybook integration for component documentation

## Tech Stack

- React 18
- TypeScript
- Vite
- SASS for styling
- Axios for API calls
- Storybook for component documentation

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Getting Started

1. Clone the repository: `git clone [repository-url]`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add your API URL: `VITE_APP_API_URL=your_api_url_here`
4. Start the development server: `npm run dev`

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for deployment

## Project Structure

```
src/
├── assets/ # Static assets (images, icons)
├── components/ # React components
├── services/ # API services
├── styles/ # Global styles and variables
├── types/ # TypeScript interfaces and types
├── App.tsx # Main application component
└── main.tsx # Application entry point
```

## Component Documentation

The project uses Storybook for component documentation. To view the component library:

1. Start Storybook: `npm run storybook`
2. Open `http://localhost:6006` in your browser
