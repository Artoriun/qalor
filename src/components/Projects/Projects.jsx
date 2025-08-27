import assencompImg from '../../assets/images/projects/assencomp.png';
import heechterp2Img from '../../assets/images/projects/heechterp2.png';
import heegImg from '../../assets/images/projects/heeg.jpeg';
import sneekImg from '../../assets/images/projects/sneek.jpeg';

import React, { useState, useEffect } from 'react';
import defaultProjectImg from '../../assets/images/figures/qalor Q.png';
import heechterpImg from '../../assets/images/projects/heechterp.jpg';
import dokkumImg from '../../assets/images/projects/dokkum.jpeg';
import anjumImg from '../../assets/images/projects/anjum.jpeg';

const projects = [
  {
    id: 1,
    name: 'Heechterp Leeuwarden',
    role: 'Warmtenet Ontwerp',
    description: 'Warmtenet voor 868 woningen\nZowel bestaande bouw als nieuwbouw\nEindopdrachtgever woningcorporatie Elkien',
    image: heechterpImg,
    color: '#007bff',
  },
  {
    id: 2,
    name: 'Dokkum Fûgellân',
    role: 'Energie Optimalisatie',
    description: 'Warmtenet voor 1114 woningen + utiliteit\nBestaande bouw\nIn opdracht van gemeente Noardeast-Fryslân',
    image: dokkumImg,
    color: '#28a745',
  },
  {
    id: 3,
    name: 'Anjum - Esonstad',
    role: 'Haalbaarheidsonderzoek',
    description: [
      'warmtenet voor 604 woningen + utiliteit',
      'bestaande bouw',
      'in opdracht van gemeente Noardeast-Fryslân / Energiecorporatie De Anjummer Eendragt'
    ],
    image: anjumImg,
    color: '#dc3545',
  },
  {
    id: 4,
    name: 'Sneek Het Eiland',
    role: 'Smart Technology',
    description: [
      'warmte- en koudenet voor 604 woningen',
      'bestaande bouw',
      'in opdracht van gemeente Súdwest-Fryslán'
    ],
    image: sneekImg,
    color: '#fd7e14',
  },
  {
    id: 5,
    name: 'Heeg',
    role: 'Innovatie & Advies',
    description: [
      'warmtenet voor 819 woningen',
      'bestaande bouw',
      'in opdracht van gemeente Súdwest-Fryslán'
    ],
    image: heegImg,
    color: '#6f42c1',
  },
  {
    id: 6,
    name: 'Heechterp (vervolgopdracht)',
    role: 'Consultancy',
    description: [
      'warmtenet voor 1130 woningen',
      'zowel bestaande bouw als nieuwbouw',
      'in opdracht van Warmtebedrijf Heechterp'
    ],
    image: heechterp2Img,
    color: '#20c997',
  },
  {
    id: 7,
    name: 'Assen Componistenbuurt',
    role: 'Onderzoek',
    description: [
      'warmtenet voor 960 woningen',
      'zowel bestaande bouw als nieuwbouw',
      'in opdracht van Bouwgroep Dijkstra Draisma'
    ],
    image: assencompImg,
    color: '#ffc107',
  },
];

const Projects = () => {
  const timerRef = React.useRef();
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [current, setCurrent] = useState(3);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [slideWidth, setSlideWidth] = useState(400);
  
  // Drag functionality state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragStartSlide, setDragStartSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSlideWidth(mobile ? Math.min(window.innerWidth * 0.9, 400) : 400);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite slides logic
  const infiniteSlides = [
    ...projects.slice(-3),
    ...projects,
    ...projects.slice(0, 3)
  ];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        if (prev === projects.length + 2) {
          setTimeout(() => {
            setTransition(false);
            setCurrent(3);
            setTimeout(() => setTransition(true), 50);
          }, 500);
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    setPrevClicked(true);
    setTimeout(() => setPrevClicked(false), 250);
    setTransition(true);
    if (current === 3) {
      setCurrent(2);
      setTimeout(() => {
        setTransition(false);
        setCurrent(projects.length + 2);
        setTimeout(() => setTransition(true), 50);
      }, 500);
    } else {
      setCurrent(current - 1);
    }
    
    // Restart timer
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        if (prev === projects.length + 2) {
          setTimeout(() => {
            setTransition(false);
            setCurrent(3);
            setTimeout(() => setTransition(true), 50);
          }, 500);
        }
        return prev + 1;
      });
    }, 5000);
  };

  const handleNext = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    setNextClicked(true);
    setTimeout(() => setNextClicked(false), 250);
    setTransition(true);
    if (current === projects.length + 2) {
      setCurrent(projects.length + 3);
      setTimeout(() => {
        setTransition(false);
        setCurrent(3);
        setTimeout(() => setTransition(true), 50);
      }, 500);
    } else {
      setCurrent(current + 1);
    }
    
    // Restart timer
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        if (prev === projects.length + 2) {
          setTimeout(() => {
            setTransition(false);
            setCurrent(3);
            setTimeout(() => setTransition(true), 50);
          }, 500);
        }
        return prev + 1;
      });
    }, 5000);
  };

  // Drag event handlers
  const handleDragStart = (e) => {
    if (isDragging) return;
    
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setIsDragging(true);
    setDragStart(clientX);
    setDragStartSlide(current);
    setDragOffset(0);
    setTransition(false);
    
    // Clear auto-play timer during drag
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    setTransition(true);
    
    const threshold = slideWidth * 0.3; // 30% of slide width to trigger change
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right - go to previous slide
        setPrevClicked(true);
        setTimeout(() => setPrevClicked(false), 250);
        if (current === 3) {
          setCurrent(2);
          setTimeout(() => {
            setTransition(false);
            setCurrent(projects.length + 2);
            setTimeout(() => setTransition(true), 50);
          }, 500);
        } else {
          setCurrent(current - 1);
        }
      } else {
        // Dragged left - go to next slide
        setNextClicked(true);
        setTimeout(() => setNextClicked(false), 250);
        if (current === projects.length + 2) {
          setCurrent(projects.length + 3);
          setTimeout(() => {
            setTransition(false);
            setCurrent(3);
            setTimeout(() => setTransition(true), 50);
          }, 500);
        } else {
          setCurrent(current + 1);
        }
      }
    } else {
      // Snap back to current slide
      setCurrent(dragStartSlide);
    }
    
    setDragOffset(0);
    
    // Restart auto-play timer with clean setup
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        if (prev === projects.length + 2) {
          setTimeout(() => {
            setTransition(false);
            setCurrent(3);
            setTimeout(() => setTransition(true), 50);
          }, 500);
        }
        return prev + 1;
      });
    }, 5000);
  };

  // Handle mouse leave to end drag
  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  return (
    <section id="projects" data-aos="fade-up" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', width: '100%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '1.6rem', color: '#ff6b35', marginBottom: '0.5rem', fontWeight: '400' }}>
            • Projectreferenties
          </div>
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', color: '#333', fontWeight: '600' }}>
            Onze projecten in 2024-2025
          </h2>
        </div>
        <div style={{
          position: 'relative',
          width: isMobile ? `${slideWidth * 1.05}px` : `${slideWidth * 3}px`,
          maxWidth: isMobile ? `${slideWidth * 1.05}px` : `${slideWidth * 3}px`,
          margin: '0 auto',
          height: isMobile ? 'auto' : '350px',
          minHeight: isMobile ? '320px' : '350px',
          padding: isMobile ? '0 10px' : '0',
          overflow: 'hidden',
          boxSizing: 'border-box',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none'
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        >
          <div style={{
            display: 'flex',
            transform: `translateX(-${(current * slideWidth) - dragOffset}px)`,
            transition: transition && !isDragging ? 'transform 0.5s ease-in-out' : 'none',
            height: '100%'
          }}>
            {infiniteSlides.map((project, idx) => (
              <div 
                key={`slide-${idx}`} 
                style={{ 
                  width: slideWidth, 
                  flexShrink: 0, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  padding: isMobile ? '0 10px' : '0 20px',
                  cursor: isDragging ? 'grabbing' : 'default',
                  pointerEvents: isDragging ? 'none' : 'auto'
                }}
              >
                <div style={{
                  background: `#fff url(${project.image}) center/cover no-repeat`,
                  borderRadius: '8px',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: isMobile ? '100%' : '350px',
                  minHeight: isMobile ? '280px' : '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    textAlign: 'center',
                    paddingBottom: isMobile ? '0.75rem' : '1rem',
                    paddingTop: '1rem',
                    paddingLeft: isMobile ? '1.5rem' : '2rem',
                    paddingRight: isMobile ? '1.5rem' : '2rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0) 100%)',
                    borderRadius: '0 0 8px 8px',
                    minHeight: isMobile ? '110px' : '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: '#fff' }}>{project.name}</h3>
                    <ul style={{ color: '#fff', textAlign: 'left', margin: '0 auto', display: 'inline-block', paddingLeft: '1.2em', fontSize: '0.85rem', marginTop: '-0.2rem', marginBottom: '0' }}>
                      {(Array.isArray(project.description)
                        ? project.description
                        : project.description.split('\n')
                      ).map((line, i) => (
                        <li key={i} style={{ marginBottom: i === 0 ? '0.18rem' : '0', fontSize: '0.85rem' }}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '0.5rem',
          width: '100%',
          position: 'relative',
        }}>
          <button
            onClick={handlePrev}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid #ff6b35',
              backgroundColor: '#ff6b35',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              outline: 'none',
              transform: prevClicked ? 'scale(1.2)' : 'scale(1)'
            }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid #ff6b35',
              backgroundColor: '#ff6b35',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              outline: 'none',
              transform: nextClicked ? 'scale(1.2)' : 'scale(1)'
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
