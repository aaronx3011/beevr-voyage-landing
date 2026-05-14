# Bee VR Voyage

## Overview

**Bee VR Voyage** is an innovative platform specializing in **Artificial Intelligence (AI)** and **Virtual Reality (VR)** to create immersive, interactive experiences. Our mission is to bridge imagination with reality by developing cutting-edge solutions that transform how people learn, engage, and connect emotionally through technology.

## Features

### Core Capabilities
- **AI Conversational Systems**: Intelligent assistants with emotional tone recognition and real-time voice interaction
- **VR Ecosystems**: 360° immersive environments for culture, tourism, and education
- **Smart Museography**: Interactive museum systems that make visitors active participants
- **EdTech Innovation**: Gamified learning experiences in virtual worlds

### Key Projects
1. **Fly Bee Real** - Neuroeducation & gamification APK for exploring the microcosm of bees
2. **Jessica: Sports Assistant** - AI-powered football analytics assistant with real-time data access
3. **Optimum Spine** - Interactive educational tool for spinal health and wellness
4. **Music Box Tingilingi** - Sound creation and gaming fusion experience
5. **Project Orion** - Interactive audio equipment catalog with visual exploration

## Technology Stack

### Frontend
- **React 19** - Modern React framework
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed, accessible components
- **Motion** - Smooth animations and transitions
- **Lucide React** - Beautifully simple open-source icons

### Backend & Services
- **Google GenAI SDK** - AI model integration
- **Express.js** - Web server framework
- **dotenv** - Environment variable management

### Development Tools
- **ESBuild** - Fast JavaScript bundler
- **Autoprefixer** - CSS vendor prefixing
- **class-variance-authority** - Type-safe variant utilities
- **tailwind-merge** - Smart Tailwind class merging
- **tw-animate-css** - Animation utilities for Tailwind

## Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-repo/bee-vr-voyage.git
cd bee-vr-voyage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your actual API keys and configuration
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Project Structure

```
bee-vr-voyage/
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles and Tailwind configuration
│   └── assets/              # Static assets (images, logos)
│       ├── hero_logo.png    # Main logo
│       └── images/          # Project showcase images
├── components/
│   ├── ui/                  # UI components (button, card, etc.)
│   └── Logo.tsx             # Brand logo component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static files served at root
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
├── .env.example             # Environment variable template
└── README.md                # This file
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready optimized bundle
- `npm run preview` - Preview the production build locally
- `npm run clean` - Remove the dist directory
- `npm run lint` - Run TypeScript type checking

## Environment Variables

Required environment variables:

```bash
# Gemini AI API key (required for AI functionality)
GEMINI_API_KEY="your_api_key_here"

# Application URL (used for self-referential links and callbacks)
APP_URL="https://your-app-url.com"
```

## Deployment

### Production Build

To create a production build:

```bash
npm run build
```

This will generate optimized static files in the `dist/` directory.

### Serving the Application

The production build can be served using any static file server or hosting platform that supports modern web applications, including:
- Vercel
- Netlify
- Firebase Hosting
- AWS S3 + CloudFront
- Google Cloud Run (as configured in AI Studio)

### Deployment with AI Studio

This application is configured for deployment on **Google AI Studio**:

1. The app is automatically deployed when changes are pushed to the main branch
2. Environment variables are managed through AI Studio's Secrets panel
3. The production URL is automatically injected via the `APP_URL` environment variable
4. HMR (Hot Module Replacement) is disabled in production for stability

## Configuration

### Vite Configuration

The project uses Vite with custom configuration:
- **Port**: 3000 (configurable)
- **Host**: 0.0.0.0 (accessible from network)
- **Path Aliases**: `@/*` maps to project root for cleaner imports
- **Environment Variables**: Automatically loaded and injected at runtime

### TypeScript Configuration

- Target: ES2022
- Module System: ESNext
- JSX: React JSX
- Strict Type Checking: Enabled
- Path Aliases: Configured via `tsconfig.json`

## Styling

The project uses **Tailwind CSS v4** with custom configuration:

### Key Features
- **Dark Mode**: Enforced via HTML class (`.dark`)
- **Custom Theme**: OKLCH color space for better color perception
- **Geometric Backgrounds**: Custom radial gradients for visual appeal
- **Animation System**: Motion library integration with Tailwind
- **Typography**: Geist Variable font family

### CSS Variables
All colors and design tokens are defined as CSS variables in `src/index.css`:
```css
:root {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.7 0.2 60); /* Amber accent */
  --border: oklch(1 0 0 / 10%);
  /* ... additional variables */
}
```

## Components

### Custom UI Components
All components follow the shadcn/ui design system:
- **Button**: Primary action component with multiple variants
- **Card**: Content container with header support
- **Badge**: Small status indicators
- **Accordion**: Collapsible content sections
- **Input**: Form input fields
- **Logo & HeroLogo**: Brand identity components

### Component Structure
```
components/
├── ui/                      # UI primitives
│   ├── button.tsx           # Button component
│   ├── card.tsx             # Card component
│   ├── badge.tsx            # Badge component
│   ├── accordion.tsx        # Accordion component
│   ├── input.tsx            # Input component
│   └── skeleton.tsx         # Loading skeleton
└── Logo.tsx                 # Brand logo
```

## Architecture

### Component-Based Design
The application follows a **component-based architecture** with:
- Reusable UI components in `components/ui/`
- Domain-specific components in `src/App.tsx`
- Layout components (Navbar, Footer)
- Section components (Hero, Features, Portfolio, FAQ)

### State Management
- Local component state using React hooks (`useState`, `useEffect`)
- Context API for global state when needed
- No external state management library currently used

### Routing
- Hash-based navigation with anchor links
- Smooth scrolling to sections via `#id` fragments
- Mobile-responsive navigation menu

## Performance Optimization

- **Code Splitting**: Automatic via Vite
- **Image Optimization**: Next-gen formats and responsive sizing
- **Lazy Loading**: Components load on demand
- **CSS-in-JS**: Minimal runtime overhead with Tailwind
- **Tree Shaking**: Dead code elimination via ES modules

## Browser Support

The application targets modern browsers with:
- Full support for evergreen browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement approach
- Responsive design from mobile to desktop

## Accessibility

- Semantic HTML structure
- ARIA attributes where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly markup

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write TypeScript with proper type annotations
- Add JSDoc comments for complex components
- Ensure mobile responsiveness
- Test across different browsers

## License

This project is licensed under the **Apache 2.0 License**.

See [LICENSE](LICENSE) for more details.

## Contact

For inquiries and collaborations:

- **Phone**: +1 786.277.1100
- **Email**: beetechscorp@gmail.com
- **Location**: USA, Miami
- **Website**: [Bee VR Voyage](https://bee-vr-voyage.com)

## Roadmap

Future enhancements include:
- Multi-language support for global markets
- Enhanced analytics and user tracking
- AR (Augmented Reality) integration
- Web3 and blockchain-based digital ownership
- AI personalization engines
- Enterprise-grade deployment options

---

© 2026 Bee VR Voyage. Elevating data to stories.
