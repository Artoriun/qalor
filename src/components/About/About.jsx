import peterhuubImg from '../../assets/images/team/peterhuub.jpg';
import React, { useState, useEffect } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section id="qalor" data-aos="fade-right" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', width: '100%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            fontSize: '1.6rem', 
            color: '#ff6b35', 
            marginBottom: '0.5rem',
            fontWeight: '400',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
          }}>
            • Wat wij doen
          </div>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            margin: '0', 
            color: '#333',
            fontWeight: '600',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
          }}>
            Energiedeskundigen en warmtenetten
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
            src={peterhuubImg}
            alt="Peter & Huub"
            style={{
              width: '100%',
              height: isMobile ? '300px' : '450px',
              objectFit: 'cover',
              objectPosition: isMobile ? 'center -75px' : 'center -125px',
              borderRadius: '12px',
              boxShadow: '0 8px 25px rgba(0,123,255,0.2)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
