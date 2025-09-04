import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const Team = lazy(() => import('./components/Team/Team'));
const About = lazy(() => import('./components/About/About'));
const WorkProcess = lazy(() => import('./components/WorkProcess/WorkProcess'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    // Try to load from localStorage
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
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
          <Suspense fallback={<div style={{textAlign:'center',padding:'4rem'}}>Laden...</div>}>
            <header>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            <main>
              <section id="hero">
                <Hero darkMode={darkMode} />
              </section>
              {/* Defer Team section loading until visible */}
              <DeferredTeam darkMode={darkMode} />
              <section id="qalor">
                <About darkMode={darkMode} />
              </section>
              <section id="how-it-works">
                <WorkProcess darkMode={darkMode} />
              </section>
              <section id="projects">
                <Projects />
              </section>
              {/* <section id="contact">
                <Contact />
              </section> */}
            </main>
            <footer>
              <Footer />
            </footer>
          </Suspense>
        </div>
      </Router>
    </React.StrictMode>
  );
}

// DeferredTeam: loads Team only when scrolled into view
function DeferredTeam({ darkMode }) {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={ref} style={{ minHeight: '400px', width: '100%' }}>
      {show ? <Team darkMode={darkMode} /> : <div style={{textAlign:'center',padding:'4rem'}}>Laden...</div>}
    </section>
  );
}

export default App;
