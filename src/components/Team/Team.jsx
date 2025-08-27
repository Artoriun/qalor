import qalorLogoImg from '../../assets/images/figures/qalor logo.png';
import janImg from '../../assets/images/team/jan.png';
import huubImg from '../../assets/images/team/huub.png';
import React, { useState, useEffect } from 'react';
import peterImg from '../../assets/images/team/peter.png';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Team = () => {
  const timerRef = React.useRef();
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [slideWidth, setSlideWidth] = useState(400);
  const [showPDF, setShowPDF] = useState(false);
  
  // Drag functionality state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragStartSlide, setDragStartSlide] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [dragStartTime, setDragStartTime] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSlideWidth(mobile ? Math.min(window.innerWidth * 0.9, 400) : 400);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const teamMembers = [
    { id: 1, name: 'Peter de Keijzer', avatar: 'Expert 1', description: 'Warmte-expert', background: '#007bff', backgroundImage: peterImg },
    { id: 2, name: 'Huub Jansen', avatar: 'Expert 2', description: 'Warmte-expert', background: '#28a745', backgroundImage: huubImg },
    { id: 3, name: 'Jan Pouw', avatar: 'Expert 3', description: 'Warmte-expert', background: '#dc3545', backgroundImage: janImg },
    { id: 4, isImage: true, imageUrl: qalorLogoImg }
  ];

  const infiniteSlides = [
    ...teamMembers.slice(-3),
    ...teamMembers,
    ...teamMembers.slice(0, 3)
  ];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === teamMembers.length + 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentSlide(3);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 500);
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [teamMembers.length]);

  useEffect(() => { setCurrentSlide(3); }, []);

  const handlePrevClick = () => {
    setPrevClicked(true);
    setTimeout(() => setPrevClicked(false), 250);
    setIsTransitioning(true);
    if (currentSlide === 3) {
      setCurrentSlide(2);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(teamMembers.length + 2);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextClick = () => {
    setNextClicked(true);
    setTimeout(() => setNextClicked(false), 250);
    setIsTransitioning(true);
    if (currentSlide === teamMembers.length + 2) {
      setCurrentSlide(teamMembers.length + 3);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(3);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePDFClick = (member) => {
    if (!member.isImage) {
      setShowPDF(true);
    }
  };

  // Drag event handlers
  const handleDragStart = (e) => {
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
    setDragStartSlide(currentSlide);
    setDragOffset(0);
    setHasMoved(false);
    setDragStartTime(Date.now());
    
    // Clear auto-play timer during potential drag
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleDragMove = (e) => {
    if (dragStart === 0) return;
    
    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const offset = clientX - dragStart;
    
    // Start dragging if moved more than 5 pixels
    if (Math.abs(offset) > 5 && !hasMoved) {
      setHasMoved(true);
      setIsDragging(true);
      setIsTransitioning(false);
    }
    
    if (hasMoved) {
      setDragOffset(offset);
    }
  };

  const handleDragEnd = (e) => {
    const dragDuration = Date.now() - dragStartTime;
    const moved = hasMoved;
    
    if (moved && isDragging) {
      setIsDragging(false);
      setIsTransitioning(true);
      
      const threshold = slideWidth * 0.3; // 30% of slide width to trigger change
      
      if (Math.abs(dragOffset) > threshold) {
        if (dragOffset > 0) {
          // Dragged right - go to previous slide
          handlePrevClick();
        } else {
          // Dragged left - go to next slide
          handleNextClick();
        }
      } else {
        // Snap back to current slide
        setCurrentSlide(dragStartSlide);
      }
      
      setDragOffset(0);
      
      // Restart auto-play timer
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev === teamMembers.length + 2) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentSlide(3);
              setTimeout(() => setIsTransitioning(true), 50);
            }, 500);
          }
          return prev + 1;
        });
      }, 3000);
    }
    
    // Reset drag state
    setDragStart(0);
    setHasMoved(false);
    setDragStartTime(0);
  };

  // Handle click vs drag
  const handleSlideClick = (member, e) => {
    // If we haven't moved significantly, treat it as a click
    if (!hasMoved) {
      console.log('Slide clicked, opening PDF for:', member.name);
      handlePDFClick(member);
    } else {
      console.log('Ignoring click - user dragged');
    }
  };

  return (
    <>
      {showPDF && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ width: '80%', height: '80%', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <button onClick={() => setShowPDF(false)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>X</button>
            <Worker workerUrl={`/pdfjs/pdf.worker.min.js`}>
              <Viewer fileUrl="/documents/CV_Peter_de_Keijzer.pdf" />
            </Worker>
          </div>
        </div>
      )}
      <section id="team" style={{ padding: '80px 20px', backgroundColor: '#fff', width: '100%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.6rem', color: '#ff6b35', marginBottom: '0.5rem', fontWeight: '400', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
              • Ons team
            </div>
            <h2 style={{ fontSize: '2rem', margin: '0', color: '#333', fontWeight: '600', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
              Een gezamenlijke werkervaring van meer dan 130 jaar in de warmte wereld waarvan meer dan 100 jaar bij warmtebedrijven heeft geleid tot een unieke krachtenbundeling.
            </h2>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Slideshow Container */}
            <div 
              style={{ 
                overflow: 'hidden', 
                width: isMobile ? '90vw' : '1220px', 
                maxWidth: '1220px', 
                margin: '0 auto', 
                height: isMobile ? 'auto' : '400px', 
                minHeight: isMobile ? '350px' : '400px',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none'
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  transform: `translateX(-${(currentSlide * slideWidth) - dragOffset}px)`,
                  transition: isTransitioning && !isDragging ? 'transform 0.5s ease-in-out' : 'none',
                  height: '100%' 
                }}
              >
                {infiniteSlides.map((member, index) => (
                  <div
                    key={`slide-${index}`}
                    style={{
                      width: slideWidth,
                      flexShrink: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: isMobile ? '0 10px' : '0 20px',
                      cursor: isDragging ? 'grabbing' : 'pointer',
                      pointerEvents: 'auto'
                    }}
                    onClick={(e) => handleSlideClick(member, e)}
                  >
                    <div style={{ background: member.isImage ? 'transparent' : (member.backgroundImage ? `url(${member.backgroundImage})` : '#f8f9fa'), backgroundSize: member.backgroundImage ? 'cover' : 'auto', backgroundPosition: member.backgroundImage ? 'center' : 'initial', padding: member.isImage ? '0' : '0', borderRadius: '8px', textAlign: 'center', width: '100%', maxWidth: isMobile ? '100%' : '350px', minHeight: isMobile ? '300px' : '320px', display: 'flex', flexDirection: 'column', justifyContent: member.isImage ? 'center' : 'flex-end', overflow: 'hidden', position: 'relative' }}>
                      {member.isImage ? (
                        <img src={member.imageUrl} alt="Team Image" style={{ width: member.id === 4 ? '100%' : '100%', height: member.id === 4 ? '100%' : (isMobile ? '300px' : '320px'), objectFit: member.id === 4 ? 'contain' : 'cover', borderRadius: '8px', background: member.id === 4 ? 'white' : undefined, maxWidth: member.id === 4 ? '350px' : undefined, maxHeight: member.id === 4 ? (isMobile ? '300px' : '320px') : undefined, margin: member.id === 4 ? '0 auto' : undefined, display: member.id === 4 ? 'block' : undefined }} />
                      ) : (
                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', padding: '16px 0 12px 0', background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))', borderRadius: '0 0 8px 8px' }}>
                          <h3 style={{ fontSize: '1.3rem', marginBottom: '0', color: '#fff' }}>{member.name}</h3>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                            <p style={{ color: '#fff', lineHeight: '1.4', margin: 0, fontSize: '1rem' }}>{member.description}</p>
                            <button style={{ background: '#fff', color: '#000', border: 'none', borderRadius: '50px', padding: '5px 9px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.08)', outline: 'none', transition: 'background 0.2s, color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', height: '24px', minHeight: '24px' }} onClick={(e) => { e.stopPropagation(); handlePDFClick(member); }}>
                              CV
                              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ff6b35', fontSize: '13px', fontWeight: 'bold', color: '#fff', marginLeft: '4px' }}>&rarr;</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '2rem', alignItems: 'center' }}>
            <button onClick={handlePrevClick} style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #ff6b35', backgroundColor: '#ff6b35', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', outline: 'none', transform: prevClicked ? 'scale(1.2)' : 'scale(1)' }}>&larr;</button>
            <button onClick={handleNextClick} style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #ff6b35', backgroundColor: '#ff6b35', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', outline: 'none', transform: nextClicked ? 'scale(1.2)' : 'scale(1)' }}>&rarr;</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;