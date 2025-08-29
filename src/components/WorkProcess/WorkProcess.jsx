import berekeningImg from '../../assets/images/workprocess/berekening.jpg';
import gebouwendatabaseImg from '../../assets/images/workprocess/gebouwendatabase.jpg';
import nettekeningImg from '../../assets/images/workprocess/nettekening.jpg';
import React, { useState, useEffect, useRef } from 'react';
import './WorkProcess.css';

const WorkProcess = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isTablet, setIsTablet] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [verticalLineLeft, setVerticalLineLeft] = useState(30); // default fallback
  const stepsContainerRef = useRef(null);
  const firstNumberColRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowWidth(width);
      setWindowHeight(height);
      setIsTablet(width >= 769 && width <= 1024);
      setIsLandscape(width > height && width / height > 1.2); // Landscape if significantly wider than tall
    };

    // iOS detection
    const ua = window.navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && !window.MSStream);

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamically calculate the center of the first number column relative to the steps container
  useEffect(() => {
    if (!stepsContainerRef.current || !firstNumberColRef.current) return;
    const updateLinePosition = () => {
      const stepsRect = stepsContainerRef.current.getBoundingClientRect();
      const numberRect = firstNumberColRef.current.getBoundingClientRect();
      // Center of the number column relative to the steps container
      const left = numberRect.left - stepsRect.left + numberRect.width / 2;
      setVerticalLineLeft(left);
    };
    updateLinePosition();
    window.addEventListener('resize', updateLinePosition);
    window.addEventListener('orientationchange', updateLinePosition);
    return () => {
      window.removeEventListener('resize', updateLinePosition);
      window.removeEventListener('orientationchange', updateLinePosition);
    };
  }, [windowWidth, windowHeight, isLandscape]);

  const isMobile = windowWidth <= 768;
  const useMobileLayout = isMobile || isTablet;

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
    <section id="how-it-works" data-aos="fade-right" style={{ 
      padding: useMobileLayout ? (isLandscape ? '60px 15px' : '80px 20px') : '80px 20px', 
      backgroundColor: '#fff', 
      width: '100%',
      overflow: 'hidden', // Prevent horizontal overflow in landscape
      position: 'relative', // Ensure proper positioning context
      margin: '0 auto' // Ensure section itself is centered
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        width: '100%',
        position: 'relative', // Ensure proper positioning context
        transform: 'translateX(0)', // Prevent any transform issues from AOS
        left: 0, // Ensure no left positioning offset
        right: 0 // Ensure no right positioning offset
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ 
            fontSize: '1.6rem', 
            color: '#ff6b35', 
            marginBottom: '0.5rem',
            fontWeight: '400',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
          }}>
            • Hoe wij te werk gaan
          </div>
          <h2 style={{ 
            fontSize: '2.5rem', 
            margin: '0', 
            color: '#333',
            fontWeight: '600',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
          }}>Ons werkproces</h2>
        </div>
        
        <div
          ref={stepsContainerRef}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '4rem', 
            position: 'relative',
            alignItems: isLandscape && useMobileLayout ? 'center' : 'stretch', // Center content in landscape mobile
            '@media (maxWidth: 768px)': {
              gap: '3rem'
            }
          }}
        >
          
          {/* Vertical connecting line - Desktop only */}
          {!useMobileLayout && (
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '80px',
              bottom: '80px',
              width: '3px',
              background: 'linear-gradient(180deg, #CC4125, #FF6B6B, #FF8E53)',
              transform: 'translateX(-50%)',
              zIndex: 0,
              borderRadius: '2px'
            }} />
          )}
          
          {/* Mobile connecting line - dynamically centered with number column */}
          {useMobileLayout && (
            <div
              style={{
                position: 'absolute',
                left: verticalLineLeft,
                top: 0,
                bottom: 0,
                width: 3,
                background: 'linear-gradient(180deg, #CC4125, #FF6B6B, #FF8E53)',
                zIndex: 0,
                borderRadius: 2,
                pointerEvents: 'none',
                transform: 'translateX(-50%)',
                WebkitTransform: 'translateX(-50%)',
                backgroundClip: 'padding-box',
                WebkitBackgroundClip: 'padding-box',
                willChange: 'transform',
              }}
            />
          )}
          
          {/* Step 1 */}
          <div style={{ 
            display: 'flex', 
            alignItems: useMobileLayout ? 'flex-start' : 'center', 
            gap: useMobileLayout ? '1.5rem' : '3rem', 
            minHeight: useMobileLayout ? 'auto' : '300px', 
            position: 'relative', 
            zIndex: 2,
            flexDirection: useMobileLayout ? 'row' : 'row',
            width: isLandscape && useMobileLayout ? '90%' : '100%', // Constrain width in landscape
            maxWidth: isLandscape && useMobileLayout ? '700px' : 'none', // Max width for landscape
            margin: isLandscape && useMobileLayout ? '0 auto' : '0' // Center in landscape
          }}>
            {/* Mobile layout: Number left, content right */}
            {useMobileLayout ? (
              <>
                {/* Number on left */}
                <div
                  ref={firstNumberColRef}
                  style={{ 
                    flex: '0 0 60px',
                    minWidth: '60px',
                    maxWidth: '60px',
                    width: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    left: 0,
                    marginLeft: 0,
                    boxSizing: 'border-box',
                    // outline: '1px solid red' // Uncomment for debugging
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #CC4125, #E55B3C)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(204,65,37,0.3)',
                    border: '3px solid #fff',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    01
                  </div>
                </div>
                
                {/* Content area */}
                <div style={{ 
                  flex: '1', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem',
                  maxWidth: isLandscape ? '500px' : 'none' // Constrain width in landscape mode
                }}>
                  {/* Text content */}
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333', lineHeight: '1.3' }}>
                      Het vervaardigen van een nettekening in AutoCAD
                    </h3>
                    <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1.5rem', fontSize: '1rem' }}>
                      Een betrouwbare calculatie van een warmteproject vereist dat als eerste er een kundige nettekening in AutoCAD wordt gemaakt. De basis voor de ondergrond is daarbij immer een oriëntatiemelding van het Kadaster die de bezetting van de ondergrond gedetailleerd weergeeft.
                    </p>
                  </div>
                  
                  {/* Image below text */}
                  <img 
                    src={nettekeningImg}
                    alt="AutoCAD Nettekening"
                    style={{
                      height: '260px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 8px 25px rgba(255,107,53,0.15)'
                    }}
                  />
                  
                  {/* Button below image */}
                  <button 
                    onClick={() => smoothScrollTo('footer')}
                    style={{ 
                      padding: '0.75rem 1.5rem', 
                      background: 'transparent', 
                      color: '#000', 
                      border: 'none', 
                      borderRadius: '6px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      alignSelf: 'flex-start',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      outline: 'none'
                    }}>
                    Meer leren
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                      <path d="M4 9H14" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 6L14 9L11 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Desktop layout: Image Left, Number Center, Text Right */}
                <div style={{ 
                  flex: '1',
                  height: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={nettekeningImg}
                    alt="AutoCAD Nettekening"
                    style={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px rgba(0,123,255,0.15)'
                    }}
                  />
                </div>
                <div style={{ 
                  flex: '0 0 120px', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #CC4125, #E55B3C)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(204,65,37,0.3)',
                    border: '4px solid #fff',
                    position: 'relative',
                    zIndex: 3
                  }}>
                    01
                  </div>
                </div>
                
                <div style={{ flex: '1' }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333', lineHeight: '1.3' }}>
                    Het vervaardigen van een nettekening in AutoCAD
                  </h3>
                  <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Een betrouwbare calculatie van een warmteproject vereist dat als eerste er een kundige nettekening in AutoCAD wordt gemaakt. De basis voor de ondergrond is daarbij immer een oriëntatiemelding van het Kadaster die de bezetting van de ondergrond gedetailleerd weergeeft.
                  </p>
                  <button 
                    onClick={() => smoothScrollTo('footer')}
                    style={{ 
                      padding: '1rem 2rem', 
                      background: 'transparent', 
                      color: '#000', 
                      border: 'none', 
                      borderRadius: '8px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      outline: 'none'
                    }}>
                    Meer leren
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                      <path d="M4 9H14" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 6L14 9L11 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        
          
          {/* Step 2 */}
          <div style={{ 
            display: 'flex', 
            alignItems: useMobileLayout ? 'flex-start' : 'center', 
            gap: useMobileLayout ? '1.5rem' : '3rem', 
            minHeight: useMobileLayout ? 'auto' : '300px', 
            position: 'relative', 
            zIndex: 2,
            width: isLandscape && useMobileLayout ? '90%' : '100%', // Constrain width in landscape
            maxWidth: isLandscape && useMobileLayout ? '700px' : 'none', // Max width for landscape
            margin: isLandscape && useMobileLayout ? '0 auto' : '0' // Center in landscape
          }}>
            {useMobileLayout ? (
              <>
                {/* Number on left */}
                <div style={{ 
                  flex: '0 0 60px',
                  minWidth: '60px',
                  maxWidth: '60px',
                  width: '60px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  left: 0,
                  marginLeft: 0,
                  boxSizing: 'border-box',
                  // outline: '1px solid red' // Uncomment for debugging
                }}>
                  {/* Vertical line as child of number icon */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    background: 'linear-gradient(180deg, #CC4125, #FF6B6B, #FF8E53)',
                    zIndex: 1,
                    borderRadius: '2px',
                    transform: 'translateX(-50%)',
                  }} />
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E55B3C, #FF6B6B)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(229,91,60,0.3)',
                    border: '3px solid #fff',
                    position: 'relative',
                    zIndex: 3
                  }}>
                    02
                  </div>
                </div>
                
                {/* Content area */}
                <div style={{ 
                  flex: '1', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem',
                  maxWidth: isLandscape ? '500px' : 'none' // Constrain width in landscape mode
                }}>
                  {/* Text content */}
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333', lineHeight: '1.3' }}>
                      Het maken van de gebouwendatabase
                    </h3>
                    <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1.5rem', fontSize: '1rem' }}>
                      Een betrouwbare bepaling van de vermogensbehoefte van het warmteproject vereist dat er op basis van diverse openbare bronnen, waaronder het BAG-register en Atlas Leefomgeving, er een complete gebouwendatabase opgesteld wordt.
                    </p>
                  </div>
                  
                  {/* Image below text */}
                  <img 
                    src={gebouwendatabaseImg}
                    alt="Gebouwendatabase"
                    style={{
                      height: '260px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 8px 25px rgba(255,107,53,0.15)'
                    }}
                  />
                  
                  {/* Button below image */}
                  <button 
                    onClick={() => smoothScrollTo('footer')}
                    style={{ 
                      padding: '0.75rem 1.5rem', 
                      background: 'transparent', 
                      color: '#000', 
                      border: 'none', 
                      borderRadius: '6px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      alignSelf: 'flex-start',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      outline: 'none'
                    }}>
                    Meer leren
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                      <path d="M4 9H14" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 6L14 9L11 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Desktop layout: Text Left, Number Center, Image Right */}
                <div style={{ flex: '1' }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333', lineHeight: '1.3' }}>
                    Het maken van de gebouwendatabase
                  </h3>
                  <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Een betrouwbare bepaling van de vermogensbehoefte van het warmteproject vereist dat er op basis van diverse openbare bronnen, waaronder het BAG-register en Atlas Leefomgeving, er een complete gebouwendatabase opgesteld wordt.
                  </p>
                  <button 
                    onClick={() => smoothScrollTo('footer')}
                    style={{ 
                      padding: '1rem 2rem', 
                      background: 'transparent', 
                      color: '#000', 
                      border: 'none', 
                      borderRadius: '8px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      outline: 'none'
                    }}>
                    Meer leren
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                      <path d="M4 9H14" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 6L14 9L11 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div style={{ 
                  flex: '0 0 120px', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E55B3C, #FF6B6B)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(229,91,60,0.3)',
                    border: '4px solid #fff',
                    position: 'relative',
                    zIndex: 3
                  }}>
                    02
                  </div>
                </div>
                
                <div style={{ 
                  flex: '1',
                  height: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={gebouwendatabaseImg}
                    alt="Gebouwendatabase"
                    style={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px rgba(40,167,69,0.15)'
                    }}
                  />
                </div>
              </>
            )}
          </div>
          
          {/* Step 3 */}
          <div style={{ 
            display: 'flex', 
            alignItems: useMobileLayout ? 'flex-start' : 'center', 
            gap: useMobileLayout ? '1.5rem' : '3rem', 
            minHeight: useMobileLayout ? 'auto' : '300px', 
            position: 'relative', 
            zIndex: 2,
            width: isLandscape && useMobileLayout ? '90%' : '100%', // Constrain width in landscape
            maxWidth: isLandscape && useMobileLayout ? '700px' : 'none', // Max width for landscape
            margin: isLandscape && useMobileLayout ? '0 auto' : '0' // Center in landscape
          }}>
            {useMobileLayout ? (
              <>
                {/* Number on left */}
                <div style={{ 
                  flex: '0 0 60px',
                  minWidth: '60px',
                  maxWidth: '60px',
                  width: '60px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  left: 0,
                  marginLeft: 0,
                  boxSizing: 'border-box',
                  // outline: '1px solid red' // Uncomment for debugging
                }}>
                  {/* Vertical line as child of number icon */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    background: 'linear-gradient(180deg, #CC4125, #FF6B6B, #FF8E53)',
                    zIndex: 1,
                    borderRadius: '2px',
                    transform: 'translateX(-50%)',
                  }} />
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255,107,107,0.3)',
                    border: '3px solid #fff',
                    position: 'relative',
                    zIndex: 3
                  }}>
                    03
                  </div>
                </div>
                
                {/* Content area */}
                <div style={{ 
                  flex: '1', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem',
                  maxWidth: isLandscape ? '500px' : 'none' // Constrain width in landscape mode
                }}>
                  {/* Text content */}
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333', lineHeight: '1.3' }}>
                      Het maken van de exploitatieberekening
                    </h3>
                    <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1.5rem', fontSize: '1rem' }}>
                      Op basis van de AutoCAD tekening, de woningendatabase en de bepaling van het concept en de investeringen van de energie-opwekinstallatie wordt een uitgebreid financieel model in Excel gevuld, waarbij op basis van verschillende uitgangspunten diverse scenario's worden gemaakt.
                    </p>
                  </div>
                  
                  {/* Image below text */}
                  <img 
                    src={berekeningImg}
                    alt="Exploitatieberekening"
                    style={{
                      height: '260px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 4px 15px rgba(255,107,53,0.15)'
                    }}
                  />
                  
                  {/* Button below image */}
                  <button 
                    onClick={() => smoothScrollTo('footer')}
                    style={{ 
                      padding: '0.75rem 1.5rem', 
                      background: 'transparent', 
                      color: '#000', 
                      border: 'none', 
                      borderRadius: '6px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      alignSelf: 'flex-start',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      outline: 'none'
                    }}>
                    Meer leren
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                      <path d="M4 9H14" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 6L14 9L11 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Desktop layout: Image Left, Number Center, Text Right */}
                <div style={{ 
                  flex: '1',
                  height: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={berekeningImg}
                    alt="Exploitatieberekening"
                    style={{
                      height: '300px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px rgba(255,107,53,0.15)'
                    }}
                  />
                </div>
                
                <div style={{ 
                  flex: '0 0 120px', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255,107,107,0.3)',
                    border: '4px solid #fff',
                    position: 'relative',
                    zIndex: 3
                  }}>
                    03
                  </div>
                </div>
                
                <div style={{ flex: '1' }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333', lineHeight: '1.3' }}>
                    Het maken van de exploitatieberekening
                  </h3>
                  <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Op basis van de AutoCAD tekening, de woningendatabase en de bepaling van het concept en de investeringen van de energie-opwekinstallatie wordt een uitgebreid financieel model in Excel gevuld, waarbij op basis van verschillende uitgangspunten diverse scenario's worden gemaakt.
                  </p>
                  <button 
                    onClick={() => smoothScrollTo('footer')}
                    style={{ 
                      padding: '1rem 2rem', 
                      background: 'transparent', 
                      color: '#000', 
                      border: 'none', 
                      borderRadius: '8px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      outline: 'none'
                    }}>
                    Meer leren
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                      <path d="M4 9H14" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 6L14 9L11 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
