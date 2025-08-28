import React, { useState, useEffect } from 'react';
import qalorLogo from '../../assets/images/figures/qalor logo.png';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
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

  return (
        <footer 
      className="footer-section" 
      id="footer"
      style={{
        padding: isMobile ? '2rem 1rem' : '2rem 20px',
        backgroundColor: '#f8f9fa'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: isMobile ? '1.5rem' : '2rem', 
          marginBottom: '2rem',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          {/* Company Info */}
          <div>
            <img 
              src={qalorLogo} 
              alt="Qalor Logo" 
              style={{ 
                height: '48px', 
                marginBottom: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <p style={{ lineHeight: '1.6', color: '#666', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
              Energie deskundigen & warmtenetten
            </p>
          </div>
          
          {/* Menu Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>Menu</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>
                <button 
                  onClick={() => smoothScrollTo('team')} 
                  style={{ 
                    color: '#666', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer', 
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                    fontSize: 'inherit',
                    padding: 0,
                    textAlign: 'left',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.outline = 'none'}
                  onBlur={(e) => e.target.style.outline = 'none'}
                >
                  Ons team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollTo('qalor')} 
                  style={{ 
                    color: '#666', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer', 
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                    fontSize: 'inherit',
                    padding: 0,
                    textAlign: 'left',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.outline = 'none'}
                  onBlur={(e) => e.target.style.outline = 'none'}
                >
                  Qalor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollTo('how-it-works')} 
                  style={{ 
                    color: '#666', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer', 
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                    fontSize: 'inherit',
                    padding: 0,
                    textAlign: 'left',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.outline = 'none'}
                  onBlur={(e) => e.target.style.outline = 'none'}
                >
                  Ons werkproces
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScrollTo('projects')} 
                  style={{ 
                    color: '#666', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer', 
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                    fontSize: 'inherit',
                    padding: 0,
                    textAlign: 'left',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.outline = 'none'}
                  onBlur={(e) => e.target.style.outline = 'none'}
                >
                  Projecten
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>Contact</h4>
            <div style={{ lineHeight: '2', color: '#666', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
              <p><a href="mailto:pdk@qalor.nl" style={{ color: '#666', textDecoration: 'none', outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'} onBlur={(e) => e.target.style.outline = 'none'}>pdk@qalor.nl</a></p>
              <p><a href="tel:06 112 16 938" style={{ color: '#666', textDecoration: 'none', outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'} onBlur={(e) => e.target.style.outline = 'none'}>06 112 16 938</a></p>
              <p><a href="https://maps.app.goo.gl/svtgb5ivAYVd9MXAA" style={{ color: '#666', textDecoration: 'none', outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'} onBlur={(e) => e.target.style.outline = 'none'}>Lange Marktstraat 1, 8911AD, Leeuwarden</a></p>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem', textAlign: 'left', color: '#666' }}>
          <p style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>Copyright @ 2025 Qalor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
