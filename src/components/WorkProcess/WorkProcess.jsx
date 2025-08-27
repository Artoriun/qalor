import berekeningImg from '../../assets/images/workprocess/berekening.jpg';
import gebouwendatabaseImg from '../../assets/images/workprocess/gebouwendatabase.jpg';
import nettekeningImg from '../../assets/images/workprocess/nettekening.jpg';
import React from 'react';

const WorkProcess = () => {
  const isMobile = window.innerWidth <= 768;

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
    <section id="how-it-works" data-aos="fade-left" style={{ padding: '80px 20px', backgroundColor: '#fff', width: '100%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '4rem', 
          position: 'relative',
          '@media (maxWidth: 768px)': {
            gap: '3rem'
          }
        }}>
          
          {/* Vertical connecting line - Desktop only */}
          {!isMobile && (
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '80px',
              bottom: '80px',
              width: '3px',
              background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
              transform: 'translateX(-50%)',
              zIndex: 1,
              borderRadius: '2px'
            }} />
          )}
          
          {/* Mobile connecting line - left side */}
          {isMobile && (
            <div style={{
              position: 'absolute',
              left: '30px',
              top: '40px',
              bottom: '40px',
              width: '3px',
              background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
              zIndex: 1,
              borderRadius: '2px'
            }} />
          )}
          
          {/* Step 1 */}
          <div style={{ 
            display: 'flex', 
            alignItems: isMobile ? 'flex-start' : 'center', 
            gap: isMobile ? '1.5rem' : '3rem', 
            minHeight: isMobile ? 'auto' : '300px', 
            position: 'relative', 
            zIndex: 2,
            flexDirection: isMobile ? 'row' : 'row'
          }}>
            {/* Mobile layout: Number left, content right */}
            {isMobile ? (
              <>
                {/* Number on left */}
                <div style={{ 
                  flex: '0 0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
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
                    01
                  </div>
                </div>
                
                {/* Content area */}
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                      boxShadow: '0 4px 15px rgba(0,123,255,0.15)'
                    }}
                  />
                  
                  {/* Button below image */}
                  <button 
                    onClick={() => smoothScrollTo('contact')}
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
                    <span style={{ fontSize: '1rem' }}>→</span>
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
                    onClick={() => smoothScrollTo('contact')}
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
                    <span style={{ fontSize: '1rem' }}>→</span>
                  </button>
                </div>
              </>
            )}
          </div>
        
          
          {/* Step 2 */}
          <div style={{ 
            display: 'flex', 
            alignItems: isMobile ? 'flex-start' : 'center', 
            gap: isMobile ? '1.5rem' : '3rem', 
            minHeight: isMobile ? 'auto' : '300px', 
            position: 'relative', 
            zIndex: 2
          }}>
            {isMobile ? (
              <>
                {/* Number on left */}
                <div style={{ 
                  flex: '0 0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
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
                    02
                  </div>
                </div>
                
                {/* Content area */}
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                      boxShadow: '0 4px 15px rgba(40,167,69,0.15)'
                    }}
                  />
                  
                  {/* Button below image */}
                  <button 
                    onClick={() => smoothScrollTo('contact')}
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
                    <span style={{ fontSize: '1rem' }}>→</span>
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
                    onClick={() => smoothScrollTo('contact')}
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
                    <span style={{ fontSize: '1rem' }}>→</span>
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
            alignItems: isMobile ? 'flex-start' : 'center', 
            gap: isMobile ? '1.5rem' : '3rem', 
            minHeight: isMobile ? 'auto' : '300px', 
            position: 'relative', 
            zIndex: 2
          }}>
            {isMobile ? (
              <>
                {/* Number on left */}
                <div style={{ 
                  flex: '0 0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
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
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                    onClick={() => smoothScrollTo('contact')}
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
                    <span style={{ fontSize: '1rem' }}>→</span>
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
                    onClick={() => smoothScrollTo('contact')}
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
                    <span style={{ fontSize: '1rem' }}>→</span>
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
