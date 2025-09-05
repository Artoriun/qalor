import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
// PDF viewer (heavy) will be dynamically imported when a CV is opened to avoid
// adding it to the initial Team chunk.

import qalorLogoImg from '../../assets/images-webp/qalor logo.webp';
import janImg from '../../assets/images-webp/jan.webp';
import huubImg from '../../assets/images-webp/huub.webp';
import peterImg from '../../assets/images-webp/peter.webp';

const Team = ({ darkMode }) => {
  const timerRef = useRef(null);
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [slideWidth, setSlideWidth] = useState(400);

  const [showPDF, setShowPDF] = useState(false);
  const [currentPdfPath, setCurrentPdfPath] = useState('');
  const [pdfKey, setPdfKey] = useState(0);
  const [pdfModule, setPdfModule] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  // Drag
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragStartSlide, setDragStartSlide] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSlideWidth(mobile ? Math.min(window.innerWidth * 0.9, 400) : 400);
      if (showPDF) setPdfKey((k) => k + 1);
    };
    checkScreenSize();
    const handleOrientationChange = () => setTimeout(checkScreenSize, 100);
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [showPDF]);

  const teamMembers = [
    { id: 1, name: 'Peter de Keijzer', description: 'Warmte-expert', backgroundImage: peterImg, pdfPath: '/documents/CV_Peter_de_Keijzer.pdf' },
    { id: 2, name: 'Huub Jansen', description: 'Warmte-expert', backgroundImage: huubImg, pdfPath: '/documents/CV_Huub_Jansen.pdf' },
    { id: 3, name: 'Jan Pouw', description: 'Warmte-expert', backgroundImage: janImg, pdfPath: '/documents/CV_Jan_Pouw.pdf' },
    { id: 4, isImage: true, imageUrl: qalorLogoImg },
  ];

  const infiniteSlides = [...teamMembers.slice(-3), ...teamMembers, ...teamMembers.slice(0, 3)];

  const startAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!showPDF) {
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
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamMembers.length]);

  useEffect(() => {
    if (!showPDF) {
      const t = setTimeout(() => startAutoPlay(), 100);
      return () => clearTimeout(t);
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [showPDF]);

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
      setCurrentSlide((s) => s - 1);
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
      setCurrentSlide((s) => s + 1);
    }
  };

  const handlePDFClick = (member) => {
    if (!member.isImage && !hasMoved && member.pdfPath) {
      setCurrentPdfPath(member.pdfPath);
      setShowPDF(true);
      // Start loading the heavy PDF viewer code (if not already loaded).
      if (!pdfModule && !pdfLoading) {
        setPdfLoading(true);
        Promise.all([
          import('@react-pdf-viewer/core'),
          import('@react-pdf-viewer/core/lib/styles/index.css'),
          import('../../pdf-viewer-override.css'),
        ])
          .then(([mod]) => {
            setPdfModule(mod);
          })
          .catch(() => {})
          .finally(() => setPdfLoading(false));
      }
    }
  };

  const handleClosePDF = () => setShowPDF(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && showPDF) handleClosePDF();
    };
    if (showPDF) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [showPDF]);

  const handleDragStart = (e) => {
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches?.[0]?.clientX || 0;
    setDragStart(clientX);
    setDragStartSlide(currentSlide);
    setDragOffset(0);
    setHasMoved(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleDragMove = (e) => {
    if (dragStart === 0) return;
    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches?.[0]?.clientX || 0;
    const offset = clientX - dragStart;
    if (Math.abs(offset) > 5 && !hasMoved) {
      setHasMoved(true);
      setIsDragging(true);
      setIsTransitioning(false);
    }
    if (hasMoved) setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (hasMoved && isDragging) {
      setIsDragging(false);
      setIsTransitioning(true);
      const threshold = slideWidth * 0.3;
      if (Math.abs(dragOffset) > threshold) {
        if (dragOffset > 0) handlePrevClick(); else handleNextClick();
      } else {
        setCurrentSlide(dragStartSlide);
      }
      setDragOffset(0);
      startAutoPlay();
    }
    setDragStart(0);
    setTimeout(() => setHasMoved(false), 100);
  };

  const handleSlideClick = (member) => {
    if (!hasMoved) handlePDFClick(member);
  };

  return (
    <>
      {showPDF && typeof document !== 'undefined' && createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            touchAction: 'none',
          }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) handleClosePDF(); }}
          onTouchStart={(e) => { if (e.target === e.currentTarget) { e.preventDefault(); handleClosePDF(); } }}
        >
          <div onClick={handleClosePDF} onTouchStart={handleClosePDF} style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80px', zIndex: 1001 }} />
            <div className="pdf-modal-container" style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '800px', maxHeight: '90vh', borderRadius: '8px', overflow: 'hidden' }} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
              <button onClick={handleClosePDF} aria-label="Close PDF Viewer" style={{ position: 'absolute', top: '10px', right: '10px', background: '#e86c35', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', zIndex: 1003, fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0', lineHeight: '1', fontFamily: 'Arial, sans-serif' }}>×</button>
              {/* Render a lightweight loader while the viewer code is fetched. */}
              {(!pdfModule && pdfLoading) && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#fff' }}>Laden…</div>
              )}
              {/* Once the module is loaded, render Worker/Viewer from the dynamically imported module. */}
              {pdfModule && (
                // pdfModule exposes Worker and Viewer as named exports
                pdfModule.Worker ? (
                  <pdfModule.Worker workerUrl={`${import.meta.env.BASE_URL}pdfjs/pdf.worker.min.js`}>
                    <pdfModule.Viewer key={pdfKey} fileUrl={currentPdfPath} />
                  </pdfModule.Worker>
                ) : (
                  // Fallback: if Worker isn't available, try to render Viewer directly
                  <pdfModule.Viewer key={pdfKey} fileUrl={currentPdfPath} />
                )
              )}
            </div>
        </div>,
        document.body
      )}

      <section id="team" data-aos="fade-right" style={{ padding: '80px 20px', backgroundColor: darkMode ? '#181818' : '#fff', width: '100%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '400', color: '#ff6b35' }}>
              <span>• Ons team</span>
            </div>
            <h2 style={{ fontSize: '2rem', margin: '0', color: darkMode ? '#ff6b35' : '#000', fontWeight: '600' }}>Een gezamenlijke werkervaring van meer dan 130 jaar in de warmte wereld waarvan meer dan 100 jaar bij warmtebedrijven heeft geleid tot een unieke krachtenbundeling.</h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{ overflow: 'hidden', width: isMobile ? '90vw' : '1220px', maxWidth: '1220px', margin: '0 auto', height: isMobile ? 'auto' : '400px', minHeight: isMobile ? '350px' : '400px', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div style={{ display: 'flex', transform: `translateX(-${(currentSlide * slideWidth) - dragOffset}px)`, transition: isTransitioning && !isDragging ? 'transform 0.5s ease-in-out' : 'none', height: '100%' }}>
                {infiniteSlides.map((member, index) => (
                  <div key={`slide-${index}`} style={{ width: slideWidth, flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: isMobile ? '0 10px' : '0 20px', cursor: isDragging ? 'grabbing' : 'pointer', pointerEvents: 'auto' }} onClick={() => handleSlideClick(member)}>
                    <div style={{ background: member.isImage ? 'transparent' : (member.backgroundImage ? `url(${member.backgroundImage})` : '#f8f9fa'), backgroundSize: member.backgroundImage ? 'cover' : 'auto', backgroundPosition: member.backgroundImage ? 'center' : 'initial', padding: member.isImage ? '0' : '0', borderRadius: '8px', textAlign: 'center', width: '100%', maxWidth: isMobile ? '100%' : '350px', minHeight: isMobile ? '300px' : '320px', display: 'flex', flexDirection: 'column', justifyContent: member.isImage ? 'center' : 'flex-end', overflow: 'hidden', position: 'relative', boxShadow: '0 8px 25px rgba(255,107,53,0.15)' }}>
                      {member.isImage ? (
                        <img src={member.imageUrl} alt={member.name || 'Qalor Logo'} loading="lazy" style={{ width: '100%', height: isMobile ? '300px' : '320px', objectFit: 'contain', borderRadius: '8px' }} />
                      ) : (
                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', padding: '16px 0 12px 0', background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))', borderRadius: '0 0 8px 8px' }}>
                          <h3 style={{ fontSize: '1.3rem', marginBottom: '0', color: '#fff' }}>{member.name}</h3>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                            <p style={{ color: '#fff', lineHeight: '1.4', margin: 0, fontSize: '1rem' }}>{member.description}</p>
                            {member.pdfPath && (
                              <button className="cv-button" style={{ background: '#fff', color: '#000', border: 'none', borderRadius: '50px', padding: '5px 9px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.08)', outline: 'none', transition: 'background 0.2s, color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', height: '24px', minHeight: '24px' }} onClick={(e) => { e.stopPropagation(); handlePDFClick(member); }}>
                                CV
                                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ff6b35', marginLeft: '4px', pointerEvents: 'none' }}>
                                  <svg width="14" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                                    <path d="M1 4H17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M14 1L17 4L14 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </span>
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '0.5rem', alignItems: 'center' }}>
            <button onClick={handlePrevClick} aria-label="Previous Slide" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #ff6b35', backgroundColor: '#ff6b35', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', outline: 'none', transform: prevClicked ? 'scale(1.2)' : 'scale(1)', padding: 0 }}>
              <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                <path d="M36 25H14" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                <path d="M20 16L14 25L20 34" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={handleNextClick} aria-label="Next Slide" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #ff6b35', backgroundColor: '#ff6b35', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', outline: 'none', transform: nextClicked ? 'scale(1.2)' : 'scale(1)', padding: 0 }}>
              <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                <path d="M14 25H36" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                <path d="M30 16L36 25L30 34" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;