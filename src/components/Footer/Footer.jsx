import React from 'react';

const Footer = () => {
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
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>Qalor</h3>
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
                    textAlign: 'left'
                  }}
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
                    textAlign: 'left'
                  }}
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
                    textAlign: 'left'
                  }}
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
              <p><a href="mailto:info@qalor.nl" style={{ color: '#666', textDecoration: 'none', outline: 'none' }}>info@qalor.nl</a></p>
              <p><a href="tel:06 112 16 938" style={{ color: '#666', textDecoration: 'none', outline: 'none' }}>06 112 16 938</a></p>
              <p><a href="https://maps.app.goo.gl/svtgb5ivAYVd9MXAA" style={{ color: '#666', textDecoration: 'none', outline: 'none' }}>Lange Marktstraat 1, 8911AD, Leeuwarden</a></p>
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
