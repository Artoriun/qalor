import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';
import About from './components/About/About';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    // Scroll position restoration
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            behavior: 'instant' // Use instant for immediate restoration
          });
        });
      }
    };

    // Save scroll position before page unload
    window.addEventListener('beforeunload', saveScrollPosition);
    
    // Restore scroll position after page load
    if (document.readyState === 'complete') {
      restoreScrollPosition();
    } else {
      window.addEventListener('load', restoreScrollPosition);
    }

    // Initialize AOS immediately for faster page interaction
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
      disable: false, // Enable AOS to test just WorkProcess
    });

    // Refresh AOS once all assets are loaded for better accuracy
    const refreshAOS = () => {
      AOS.refresh();
    };

    if (document.readyState !== 'complete') {
      window.addEventListener('load', refreshAOS);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      window.removeEventListener('load', restoreScrollPosition);
      window.removeEventListener('load', refreshAOS);
    };
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <div style={{ 
          width: '100vw', 
          minHeight: '100vh',
          overflowX: 'hidden',
          margin: 0,
          padding: 0
        }}>
          <Navbar />
          <Hero />
          <Team />
          <About />
          <WorkProcess />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
