import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import qalorLogo from '../../assets/images/figures/qalor logo.png';

const navbarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  padding: '0.5rem 0',
};

const navbarInnerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '95%',
  margin: '0 auto',
  maxWidth: '1400px',
};

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="navbar-bg" style={navbarStyle} aria-label="Hoofdnavigatie">
      <div style={navbarInnerStyle}>
        {/* Logo on the left */}
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
          <img 
            src={qalorLogo} 
            alt="Qalor Logo" 
            loading="lazy" 
            tabIndex={0}
            role="link"
            aria-label="Scroll naar boven"
            style={{ 
              height: '48px', 
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              transform: 'scale(1)'
            }} 
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
            onClick={(e) => {
              e.target.style.transition = 'transform 0.15s ease';
              e.target.style.transform = 'scale(1.3)';
              setTimeout(() => {
                e.target.style.transition = 'transform 0.3s ease';
                e.target.style.transform = 'scale(1)';
              }, 150);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }} 
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }
            }}
          />
        </div>
        {/* Desktop Navigation Links */}
        <ul className="navbar-desktop-nav" role="menubar">
          <li role="none">
            <button 
              role="menuitem" 
              aria-label="Scroll naar Ons team" 
              tabIndex={0}
              onClick={(e) => {
                // Add clicked class for animation
                e.target.classList.add('clicked');
                setTimeout(() => {
                  e.target.classList.remove('clicked');
                  // On mobile, force remove any hover state after animation
                  if ('ontouchstart' in window) {
                    e.target.classList.add('no-hover');
                    setTimeout(() => {
                      e.target.classList.remove('no-hover');
                    }, 100);
                  }
                }, 200);
                smoothScrollTo('team');
              }}
              onTouchEnd={(e) => {
                // Blur to remove focus state on mobile
                setTimeout(() => {
                  e.target.blur();
                }, 50);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                // color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit', 
                fontFamily: 'inherit',
                outline: 'none'
              }}
            >
              Ons team
            </button>
          </li>
          <li role="none">
            <button 
              role="menuitem" 
              aria-label="Scroll naar Qalor" 
              tabIndex={0}
              onClick={(e) => {
                // Add clicked class for animation
                e.target.classList.add('clicked');
                setTimeout(() => {
                  e.target.classList.remove('clicked');
                  // On mobile, force remove any hover state after animation
                  if ('ontouchstart' in window) {
                    e.target.classList.add('no-hover');
                    setTimeout(() => {
                      e.target.classList.remove('no-hover');
                    }, 100);
                  }
                }, 200);
                smoothScrollTo('qalor');
              }}
              onTouchEnd={(e) => {
                // Blur to remove focus state on mobile
                setTimeout(() => {
                  e.target.blur();
                }, 50);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                // color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit', 
                fontFamily: 'inherit',
                outline: 'none'
              }}
            >
              Qalor
            </button>
          </li>
          <li role="none">
            <button 
              role="menuitem" 
              aria-label="Scroll naar Ons werkproces" 
              tabIndex={0}
              onClick={(e) => {
                // Add clicked class for animation
                e.target.classList.add('clicked');
                setTimeout(() => {
                  e.target.classList.remove('clicked');
                  // On mobile, force remove any hover state after animation
                  if ('ontouchstart' in window) {
                    e.target.classList.add('no-hover');
                    setTimeout(() => {
                      e.target.classList.remove('no-hover');
                    }, 100);
                  }
                }, 200);
                smoothScrollTo('how-it-works');
              }}
              onTouchEnd={(e) => {
                // Blur to remove focus state on mobile
                setTimeout(() => {
                  e.target.blur();
                }, 50);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                // color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit', 
                fontFamily: 'inherit',
                outline: 'none'
              }}
            >
              Ons werkproces
            </button>
          </li>
          <li role="none">
            <button 
              role="menuitem" 
              aria-label="Scroll naar Projecten" 
              tabIndex={0}
              onClick={(e) => {
                // Add clicked class for animation
                e.target.classList.add('clicked');
                setTimeout(() => {
                  e.target.classList.remove('clicked');
                  // On mobile, force remove any hover state after animation
                  if ('ontouchstart' in window) {
                    e.target.classList.add('no-hover');
                    setTimeout(() => {
                      e.target.classList.remove('no-hover');
                    }, 100);
                  }
                }, 200);
                smoothScrollTo('projects');
              }}
              onTouchEnd={(e) => {
                // Blur to remove focus state on mobile
                setTimeout(() => {
                  e.target.blur();
                }, 50);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                // color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit', 
                fontFamily: 'inherit',
                outline: 'none'
              }}
            >
              Projecten
            </button>
          </li>
          {/* Dark mode switch (desktop) */}
          <li className="navbar-darkmode-switch">
            <button
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setDarkMode((v) => !v)}
              className="navbar-darkmode-btn"
            >
              {darkMode ? '🌙 Donker' : '☀️ Licht'}
            </button>
          </li>
        </ul>
        {/* Desktop Contact button */}
        <button onClick={() => smoothScrollTo('footer')} className="navbar-desktop-contact" aria-label="Scroll naar Contact" tabIndex={0} style={{ 
          background: '#ff6b35', 
          color: '#fff', 
          border: 'none', 
          cursor: 'pointer',
          borderRadius: '50px',
          padding: '0.5rem 1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#e55a2b';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#ff6b35';
        }}
        ><span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          pointerEvents: 'none' // Prevent hover effects on text and arrow
        }}>
          <span style={{ pointerEvents: 'none' }}>Contact</span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            pointerEvents: 'none' // Prevent hover effects on arrow
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8H12" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 5L12 8L9 11" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </span></button>
        {/* Mobile Hamburger Menu */}
        <div ref={menuRef} style={{ position: 'relative' }}>
          <button 
            onClick={toggleMenu}
            className="navbar-hamburger"
            aria-label={isMenuOpen ? 'Sluit navigatiemenu' : 'Open navigatiemenu'}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-mobile-menu"
            tabIndex={0}
          >
            <div className="navbar-hamburger-line"></div>
            <div className="navbar-hamburger-line"></div>
            <div className="navbar-hamburger-line"></div>
          </button>
          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="navbar-mobile-menu" id="navbar-mobile-menu" role="menu">
              <button onClick={() => smoothScrollTo('team')} className="navbar-mobile-menu-item" role="menuitem" aria-label="Scroll naar Ons team" tabIndex={0} style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Ons team</button>
              <button onClick={() => smoothScrollTo('qalor')} className="navbar-mobile-menu-item" role="menuitem" aria-label="Scroll naar Qalor" tabIndex={0} style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Qalor</button>
              <button onClick={() => smoothScrollTo('how-it-works')} className="navbar-mobile-menu-item" role="menuitem" aria-label="Scroll naar Ons werkproces" tabIndex={0} style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Ons werkproces</button>
              <button onClick={() => smoothScrollTo('projects')} className="navbar-mobile-menu-item" role="menuitem" aria-label="Scroll naar Projecten" tabIndex={0} style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Projecten</button>
              <button onClick={() => smoothScrollTo('footer')} className="navbar-mobile-menu-item contact" role="menuitem" aria-label="Scroll naar Contact" tabIndex={0} style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Contact</button>
              {/* Dark mode switch (mobile) */}
              <button
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={() => setDarkMode((v) => !v)}
                className="navbar-mobile-darkmode-btn"
                style={{
                  background: darkMode ? '#232323' : '#fff',
                  color: darkMode ? '#fff' : '#232323',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                {darkMode ? '🌙 Donker' : '☀️ Licht'}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
