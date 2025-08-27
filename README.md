# Qalor Website

A modern, responsive React website for Qalor - energy experts specializing in heating networks and sustainable energy solutions.

## 🚀 Overview

Qalor is a professional consulting company focused on energy efficiency, heating networks, and sustainable energy solutions. This website showcases their expertise, team, and project portfolio with a modern, interactive design.

## ✨ Features

### 🎨 Interactive Design
- **Smooth scroll animations** powered by AOS (Animate On Scroll)
- **Responsive design** optimized for desktop, tablet, and mobile
- **Modern gradient styling** with consistent orange branding
- **Interactive hover effects** and click animations
- **Particle background effects** for enhanced visual appeal

### 🧭 Navigation & UX
- **Fixed navigation bar** with smooth scroll-to-section functionality
- **Mobile hamburger menu** with animated transitions
- **Orange dot hover effects** with click swelling animations
- **Scroll position restoration** for seamless navigation experience

### 📱 Component Sections

#### Hero Section
- **Full-screen gradient background** with hero image
- **Interactive "Wat wij doen" button** with white dot animations
- **Responsive typography** adapting to screen sizes
- **Call-to-action buttons** with smooth scroll navigation

#### About Section (Qalor)
- **Company introduction** with professional layout
- **Feature highlights** with checkmark icons
- **Responsive image gallery** showcasing company culture
- **Mobile-optimized content** with adaptive spacing

#### Work Process Section
- **Step-by-step process visualization** with numbered circles
- **Progressive gradient colors** from reddish-orange to light orange
- **Interactive process cards** with hover effects
- **Detailed workflow descriptions** for client understanding

#### Projects Portfolio
- **Infinite carousel slider** showcasing completed projects
- **Auto-advancing slides** with manual navigation controls
- **Project details** including location, scope, and descriptions
- **Responsive card layout** with professional imagery

#### Team Section
- **Interactive team carousel** featuring key personnel
- **Auto-sliding presentation** with navigation arrows and dots
- **Professional team member cards** with photos and expertise
- **Background image overlays** with blur effects
- **Individual expertise descriptions** for each team member
- **CV download functionality** for team members

#### Contact Section
- **Animated floating team images** with staggered timing
- **Professional contact form** with validation
- **Optimized animation delays** (100ms, 200ms, 300ms intervals)
- **Particle background effects** for visual enhancement

## 🛠️ Technical Stack

### Core Technologies
- **React 19.1.1** - Latest React with modern hooks and features
- **Vite 7.1.2** - Lightning-fast build tool and development server
- **React Router DOM 7.8.2** - Client-side routing

### Styling & Animation
- **CSS-in-JS** - Inline styles for component-scoped styling
- **AOS 2.3.4** - Animate On Scroll library for scroll animations
- **Custom CSS animations** - Hover effects, transitions, and interactions
- **Responsive design** - Mobile-first approach with breakpoint optimizations

### PDF Integration
- **@react-pdf-viewer/core** - PDF viewing capabilities
- **@react-pdf-viewer/default-layout** - Pre-built PDF viewer layout
- **react-pdf** - React PDF component library
- **pdfjs-dist** - PDF.js for client-side PDF rendering

### Development Tools
- **ESLint** - Code linting with React-specific rules
- **Vite Dev Server** - Hot Module Replacement (HMR) for development
- **Legacy Peer Deps** - Compatibility handling for package dependencies

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd qalor-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Access the website**
- Local: `http://localhost:5173/`
- Network: `http://[your-ip]:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Network Access

The development server is configured with `--host` flag for network access:
- Accessible from other devices on the same network
- Useful for testing on mobile devices
- Enables sharing with clients for feedback

## 📁 Project Structure

```
qalor-website/
├── public/                    # Static assets
│   ├── documents/            # PDF documents for team CVs
│   ├── pdfjs/               # PDF.js worker files
│   └── vite.svg             # Vite logo
├── src/
│   ├── components/          # React components
│   │   ├── About/          # Company information section
│   │   ├── Contact/        # Contact form and information
│   │   ├── Footer/         # Website footer
│   │   ├── Hero/           # Landing section with CTA
│   │   ├── Navbar/         # Navigation bar component
│   │   ├── PDFViewer/      # PDF viewing component
│   │   ├── Particles/      # Particle background effects
│   │   ├── Preloader/      # Loading screen component
│   │   ├── Projects/       # Project portfolio carousel
│   │   ├── Team/           # Team member showcase
│   │   └── WorkProcess/    # Process visualization
│   ├── assets/             # Organized asset imports
│   │   ├── documents/      # Document assets
│   │   └── images/         # Images categorized by usage
│   │       ├── figures/    # Logo and decorative images
│   │       ├── hero/       # Hero section images
│   │       ├── projects/   # Project showcase images
│   │       ├── team/       # Team member photos
│   │       └── workprocess/# Process visualization images
│   ├── App.jsx             # Main application component
│   ├── main.jsx           # Application entry point
│   ├── index.css          # Global styles and fonts
│   ├── aos-custom.css     # Custom AOS animations
│   ├── aos-override.css   # AOS library overrides
│   └── pdf-viewer-override.css # PDF viewer customizations
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🎯 Key Features & Functionality

### Animation System
- **AOS Integration**: Scroll-triggered animations with optimized performance
- **Custom Animations**: Hover effects, click feedback, and transitions
- **Mobile Optimizations**: Reduced animations for better mobile performance
- **Timing Control**: Carefully tuned animation delays and durations

### Responsive Design
- **Mobile-First Approach**: Optimized for screens ≤768px
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts
- **Image Optimization**: Responsive images with proper aspect ratios
- **Touch-Friendly**: Large click targets and mobile-optimized interactions

### Performance Optimizations
- **Code Splitting**: Component-based architecture for efficient loading
- **Image Loading**: Optimized image formats and lazy loading strategies
- **Scroll Restoration**: Session-based scroll position memory
- **Efficient Re-renders**: Optimized React hooks and state management

## 🔧 Configuration & Customization

### Color Scheme
- Primary Orange: `#ff6b35`
- Light Orange: `#FF6B6B`
- Reddish Orange: `#D32F2F`
- Background: `#f8f9fa`
- Text: `#333333`

### Typography
- Primary Font: Inter (Google Fonts)
- Fallback: System fonts (Apple/Windows/Linux)
- Responsive font sizes with mobile optimizations

### Animation Timings
- Default duration: 600ms
- Hover transitions: 300ms
- Click feedback: 200ms
- AOS offset: 100px

## 🚀 Deployment

### Build Process
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Deployment Options
- **Static Hosting**: Vercel, Netlify, GitHub Pages
- **CDN**: CloudFront, CloudFlare
- **Traditional Hosting**: Apache, Nginx

### Environment Configuration
- Development: `npm run dev`
- Production: `npm run build && npm run preview`
- Linting: `npm run lint`

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Legacy Support**: IE11+ (with polyfills)

## 🔒 Security Considerations

- **Input Validation**: Contact form with proper sanitization
- **XSS Prevention**: React's built-in XSS protection
- **Secure Assets**: All images and assets served over HTTPS
- **Dependency Management**: Regular security audits with `npm audit`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is proprietary software developed for Qalor. All rights reserved.

## 📞 Support & Contact

For technical support or questions about this website:
- **Company**: Qalor - Energy Experts
- **Specialization**: Heating networks and sustainable energy solutions
- **Website**: Contact through the website's contact form

---

**Built with ❤️ using React + Vite for optimal performance and developer experience.**
