import peterhuubImg from '../../assets/images-webp/peterhuub.webp';
import peterhuub400 from '../../assets/images-webp/peterhuub-400.webp';
import peterhuub800 from '../../assets/images-webp/peterhuub-800.webp';
import React, { useState, useEffect } from 'react';

const About = ({ darkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Check for mobile and tablet screen sizes
  useEffect(() => {
    const ua = window.navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && !window.MSStream);

    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
  <section id="qalor" data-aos="fade-in" className="section-bg" style={{ padding: '80px 20px', width: '100%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            fontSize: '1.6rem', 
            marginBottom: '0.5rem',
            fontWeight: '400',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
          }}>
            <span style={{
              color: '#ff6b35',
              WebkitTextFillColor: '#ff6b35',
              textShadow: 'none',
              filter: 'none',
              background: 'none',
              backgroundClip: 'unset',
              WebkitBackgroundClip: 'unset',
              WebkitBoxReflect: 'unset',
              boxShadow: 'none',
              mixBlendMode: 'unset',
              opacity: 1,
              zIndex: 10,
              position: 'relative',
              pointerEvents: 'auto',
              fontWeight: 400,
              fontFamily: 'inherit',
              fontSize: 'inherit',
              margin: 0,
              padding: 0,
              border: 'none',
              outline: 'none',
              transition: 'none',
              colorScheme: 'light dark',
              // Most important: force color
              // Use !important via style attribute workaround
              // eslint-disable-next-line
              ...({'color': '#ff6b35 !important'})
            }}>
              • Wat wij doen
            </span>
          </div>
          <h2 style={{ 
            fontSize: (() => {
              if (isMobile) return '2rem';
              if (isTablet) return '2.25rem';
              return '2.5rem';
            })(),
            margin: '0', 
            color: '#333',
            fontWeight: '600',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
          }}>
            Energiedeskundigen warmtenetten
          </h2>
        </div>
        
        <div style={{ 
          display: isMobile ? 'flex' : 'grid', 
          flexDirection: isMobile ? 'column' : 'row',
          gridTemplateColumns: isMobile ? 'none' : '1fr 1fr', 
          gap: isMobile ? '2rem' : '4rem', 
          alignItems: 'center',
          marginBottom: '3rem' 
        }}>
          {/* Left side - Three texts stacked */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            width: '100%'
          }}>
            <div style={{ 
              textAlign: isMobile ? 'center' : 'left', 
              padding: isMobile ? '1.5rem' : '2rem'
            }}>
              {/* Title with checkmark */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                {/* Checkmark */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#ff6b35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', margin: '0', color: '#000' }}>Wat is Qalor?</h3>
              </div>
              
              {/* Content */}
              <div>
                <p style={{ lineHeight: '1.6', color: '#555' }}>
                  Een samenwerking van drie recent gepensioneerde warmte-experts
                </p>
                <p style={{ lineHeight: '1.6', color: '#555', marginTop: '0.5rem' }}>
                  Met meer dan 130 jaar ervaring in de energie wereld waarvan meer dan 100 jaar bij warmtebedrijven.
                </p>
              </div>
            </div>
            
            <div style={{ 
              textAlign: isMobile ? 'center' : 'left', 
              padding: isMobile ? '1.5rem' : '2rem'
            }}>
              {/* Title with checkmark */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                {/* Checkmark */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#ff6b35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', margin: '0', color: '#000' }}>Onze werkzaamheden</h3>
              </div>
              
              {/* Content */}
              <div>
                <p style={{ lineHeight: '1.6', color: '#555' }}>
                  Wij richten ons op projectcalculaties en de daarbij behorende technische analyses.
                </p>
              </div>
            </div>
            
            <div style={{ 
              textAlign: isMobile ? 'center' : 'left', 
              padding: isMobile ? '1.5rem' : '2rem'
            }}>
              {/* Title with checkmark */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                {/* Checkmark */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#ff6b35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', margin: '0', color: '#000' }}>Ervaring</h3>
              </div>
              
              {/* Content */}
              <div>
                <p style={{ lineHeight: '1.6', color: '#555' }}>
                  Onze lange ervaring met het realiseren, onderhouden en exploiteren van warmte- en koudenetten bij Eneco en haar rechtsvoorgangers zorgt voor een gedegen en betrouwbare calculatie van uw warmteproject.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <img
            alt="Peter & Huub"
            loading="lazy"
            data-aos="zoom-in"
            data-aos-delay="300"
            style={{
              width: '100%',
              height: (() => {
                if (isMobile) return '300px';
                if (isTablet) return '380px';
                return '450px';
              })(),
              objectFit: 'cover',
              objectPosition: (() => {
                if (isMobile) return 'center -50px';
                if (isTablet) return 'center -90px';
                return 'center -125px';
              })(),
              borderRadius: '12px',
              boxShadow: darkMode ? '0 0 40px 0 rgba(255,107,53,0.25)' : '0 8px 25px rgba(255,107,53,0.2)'
            }}
            srcSet={`${peterhuub400} 400w, ${peterhuub800} 800w, ${peterhuubImg} 1200w`}
            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
            src={peterhuub400}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
