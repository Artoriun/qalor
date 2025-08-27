import React, { useState, useEffect } from 'react';
import Particles from '../Particles/Particles';
import heroImage from '../../assets/images/hero/hero.jpeg';
import './Hero.css';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isWatWijDoenClicked, setIsWatWijDoenClicked] = useState(false);

  // Check for mobile screen size and orientation
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsLandscape(window.innerHeight < window.innerWidth && window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('orientationchange', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('orientationchange', checkScreenSize);
    };
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleWatWijDoenClick = (e) => {
    // Add clicked class for animation
    e.target.classList.add('clicked');
    setIsWatWijDoenClicked(true);
    setTimeout(() => {
      e.target.classList.remove('clicked');
      setIsWatWijDoenClicked(false);
    }, 200);
    smoothScrollTo('qalor');
  };

  // Clear any lingering hover states on touch devices
  const handleTouchStart = () => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  return (
    <section className="hero" data-aos="fade-up" style={{ 
      paddingBottom: '80px',
      paddingLeft: '20px',
      paddingRight: '20px',
      width: '100%', 
      minHeight: isMobile ? 'calc(100vh - 100px)' : '60vh',
      height: 'auto',
      display: 'flex', 
      alignItems: 'center'
    }}>
      <div style={{ 
        maxWidth: '1600px', 
        margin: '0 auto', 
        width: '100%',
        background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
        borderRadius: '20px',
        padding: '60px 40px',
        position: 'relative'
      }}>
        <Particles />
        <div style={{
          display: isMobile ? 'flex' : 'grid',
          flexDirection: isMobile ? 'column' : 'row',
          gridTemplateColumns: isMobile ? 'none' : '1fr 1fr',
          gap: isMobile ? '3rem' : '5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Left side - Text content */}
          <div style={{ 
            textAlign: isMobile ? 'center' : 'left',
            order: isMobile ? 1 : 1,
            position: 'relative',
            zIndex: 3
          }}>
            <h1 style={{ 
              fontSize: isMobile ? '3rem' : '4rem', 
              marginBottom: '1rem', 
              color: '#fff',
              fontWeight: '700',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
              lineHeight: '1.2'
            }}>
              Welkom op de website van Qalor
            </h1>
            <h2 style={{ 
              fontSize: isMobile ? '1.6rem' : '2rem', 
              marginBottom: '2rem', 
              color: '#fff',
              fontWeight: '500',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
            }}>
              Energie deskundigen & warmtenetten
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <button 
                onClick={() => smoothScrollTo('contact')}
                style={{
                  padding: '0.5rem 1rem',
                  background: '#fff',
                  color: '#000',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
                  e.target.style.background = '#f0f0f0';
                  const arrow = e.target.querySelector('span span');
                  if (arrow) {
                    arrow.style.backgroundColor = '#ff6b35';
                    arrow.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  e.target.style.background = '#fff';
                  const arrow = e.target.querySelector('span span');
                  if (arrow) {
                    arrow.style.backgroundColor = '#ff6b35';
                    arrow.style.color = '#fff';
                  }
                }}
                onMouseDown={(e) => {
                  const arrow = e.target.querySelector('span span');
                  if (arrow) {
                    arrow.style.backgroundColor = '#ff6b35';
                    arrow.style.color = '#fff';
                  }
                }}
                onMouseUp={(e) => {
                  const arrow = e.target.querySelector('span span');
                  if (arrow) {
                    arrow.style.backgroundColor = '#ff6b35';
                    arrow.style.color = '#fff';
                  }
                }}
                onFocus={(e) => {
                  const arrow = e.target.querySelector('span span');
                  if (arrow) {
                    arrow.style.backgroundColor = '#ff6b35';
                    arrow.style.color = '#fff';
                  }
                }}
                onBlur={(e) => {
                  const arrow = e.target.querySelector('span span');
                  if (arrow) {
                    arrow.style.backgroundColor = '#ff6b35';
                    arrow.style.color = '#fff';
                  }
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Contact
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#ff6b35',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#fff'
                  }}>→</span>
                </span>
              </button>
              <button 
                onClick={handleWatWijDoenClick}
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => {
                  // Clear any hover states on touch end but don't interfere with click animation
                  setTimeout(() => e.target.blur(), 300);
                }}
                className="hero-wat-wij-doen-btn"
                style={{
                  padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
                  background: 'transparent',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                Wat wij doen
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div style={{ 
            width: isMobile ? '90%' : '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: isMobile ? '40px' : '0',
            order: isMobile ? 2 : 2,
            position: 'relative',
            zIndex: 3
          }}>
            <img 
              src={heroImage}
              alt="Energy efficiency" 
              data-aos="zoom-in"
              data-aos-delay="300"
              style={{ 
                width: '100%', 
                height: isMobile ? '300px' : '100%',
                minHeight: isMobile ? '300px' : '400px',
                objectFit: 'cover',
                objectPosition: 'right center',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
