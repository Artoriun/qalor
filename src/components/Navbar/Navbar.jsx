import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import qalorLogo from '../../assets/images/figures/qalor logo.png';

const navbarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: '#fff',
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

const Navbar = () => {
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

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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

  // Clear any lingering hover states on touch devices
  const handleTouchStart = () => {
    // Force remove any hover states by triggering a blur event
    if (document.activeElement) {
      document.activeElement.blur();
    }
    // Remove any lingering hover classes but preserve click animations
    document.querySelectorAll('.navbar-desktop-nav button').forEach(btn => {
      btn.classList.remove('hover');
      // Don't remove 'clicked' class as it's part of the intended animation
    });
  };

  const handleButtonClick = (e, targetId) => {
    // Add clicked class for animation
    e.target.classList.add('clicked');
    setTimeout(() => {
      e.target.classList.remove('clicked');
    }, 200);
    smoothScrollTo(targetId);
  };

  return (
    <nav style={navbarStyle}>
      <div style={navbarInnerStyle}>
        {/* Logo on the left */}
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
          {/* Replace with actual logo image if available */}
          <img 
            src={qalorLogo} 
            alt="Qalor Logo" 
            style={{ height: '48px', cursor: 'pointer' }} 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }} 
          />
        </div>
        
        {/* Desktop Navigation Links */}
        <ul className="navbar-desktop-nav" onTouchStart={handleTouchStart}>
          <li>
            <button 
              onClick={(e) => handleButtonClick(e, 'team')}
              onTouchEnd={(e) => {
                // Clear any hover states on touch end but don't interfere with click animation
                setTimeout(() => e.target.blur(), 300);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit', 
                fontFamily: 'inherit',
                outline: 'none'
              }}
            >
              Ons team
            </button>
          </li>
          <li>
            <button 
              onClick={(e) => handleButtonClick(e, 'qalor')}
              onTouchEnd={(e) => {
                // Clear any hover states on touch end but don't interfere with click animation
                setTimeout(() => e.target.blur(), 300);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit', 
                fontFamily: 'inherit',
                outline: 'none'
              }}
            >
              Qalor
            </button>
          </li>
          <li>
            <button 
              onClick={(e) => handleButtonClick(e, 'how-it-works')}
              onTouchEnd={(e) => {
                // Clear any hover states on touch end but don't interfere with click animation
                setTimeout(() => e.target.blur(), 300);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit', 
                fontFamily: 'inherit',
                outline: 'none'
              }}
            >
              Ons werkproces
            </button>
          </li>
          <li>
            <button 
              onClick={(e) => handleButtonClick(e, 'projects')}
              onTouchEnd={(e) => {
                // Clear any hover states on touch end but don't interfere with click animation
                setTimeout(() => e.target.blur(), 300);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit', 
                fontFamily: 'inherit',
                outline: 'none'
              }}
            >
              Projecten
            </button>
          </li>
        </ul>
        
        {/* Desktop Contact button */}
        <button onClick={() => smoothScrollTo('contact')} className="navbar-desktop-contact" style={{ 
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
        ><span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Contact
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#ff6b35'
          }}>→</span>
        </span></button>
        
        {/* Mobile Hamburger Menu */}
        <div ref={menuRef} style={{ position: 'relative' }}>
          <button 
            onClick={toggleMenu}
            className="navbar-hamburger"
          >
            <div className="navbar-hamburger-line"></div>
            <div className="navbar-hamburger-line"></div>
            <div className="navbar-hamburger-line"></div>
          </button>
          
          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="navbar-mobile-menu">
              <button onClick={() => smoothScrollTo('team')} className="navbar-mobile-menu-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Ons team</button>
              <button onClick={() => smoothScrollTo('qalor')} className="navbar-mobile-menu-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Qalor</button>
              <button onClick={() => smoothScrollTo('how-it-works')} className="navbar-mobile-menu-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Ons werkproces</button>
              <button onClick={() => smoothScrollTo('projects')} className="navbar-mobile-menu-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Projecten</button>
              <button onClick={() => smoothScrollTo('contact')} className="navbar-mobile-menu-item contact" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>Contact</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
