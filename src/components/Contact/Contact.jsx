import janImg from '../../assets/images/team/jan.png';
import huubImg from '../../assets/images/team/huub.png';
import peterImg from '../../assets/images/team/peter.png';
import React, { useState, useEffect } from 'react';
import Particles from '../Particles/Particles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Add CSS for white placeholder text
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .contact-input::placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-input::-moz-placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-input:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-input:focus {
        border: 1px solid #fff !important;
        outline: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // CSS for floating animation
  const floatingKeyframes = `
    @keyframes floating1 {
      0%, 100% { transform: rotate(-5deg) translateY(0px); }
      50% { transform: rotate(-5deg) translateY(-10px); }
    }
    @keyframes floating2 {
      0%, 100% { transform: rotate(8deg) translateY(0px); }
      50% { transform: rotate(8deg) translateY(-8px); }
    }
    @keyframes floating3 {
      0%, 100% { transform: translateX(-50%) rotate(-3deg) translateY(0px); }
      50% { transform: translateX(-50%) rotate(-3deg) translateY(-12px); }
    }
  `;

  // Add floating animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = floatingKeyframes;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
  };

  return (
    <section id="contact" data-aos="zoom-in" style={{ 
      padding: isMobile ? '30px 10px 0px' : '60px 20px 0px', 
      background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)', 
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Particles />
      <div style={{ 
        maxWidth: '1600px', 
        margin: '0 auto',
        width: '100%',
        background: 'rgba(255, 107, 107, 0.1)',
        borderRadius: '20px',
        padding: isMobile ? '20px 10px 0px' : '40px 40px 0px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ 
          textAlign: 'left', 
          marginBottom: isMobile ? '1rem' : '1.5rem',
          maxWidth: isMobile ? '100%' : '50%',
          width: isMobile ? '100%' : 'auto'
        }}>
          <div style={{ 
            fontSize: '1.6rem', 
            color: '#fff', 
            marginBottom: '0.5rem',
            fontWeight: '400',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
          }}>
            • Contact
          </div>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            margin: '0', 
            color: '#fff',
            fontWeight: '600',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
          }}>
            Neem contact op met onze experts
          </h2>
        </div>
        
        <div style={{ 
          display: isMobile ? 'flex' : 'grid', 
          flexDirection: isMobile ? 'column' : 'row',
          gridTemplateColumns: isMobile ? 'none' : 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: isMobile ? '1rem' : '2rem', 
          alignItems: 'start',
          marginBottom: '0'
        }}>
          {/* Contact Form */}
          <div style={{ width: '100%' }}>
            <form onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              width: '100%'
            }}>
              {/* Name and Email Row */}
              <div style={{
                display: 'flex',
                gap: isMobile ? '0.5rem' : '1rem',
                flexDirection: 'row'
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Uw naam"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  style={{
                    padding: isMobile ? '0.8rem' : '1rem',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    width: '100%',
                    boxSizing: 'border-box',
                    flex: '1',
                    background: 'rgba(204,51,17,0.3)',
                    color: '#fff'
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Uw e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  style={{
                    padding: isMobile ? '0.8rem' : '1rem',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    width: '100%',
                    boxSizing: 'border-box',
                    flex: '1',
                    background: 'rgba(204,51,17,0.3)',
                    color: '#fff'
                  }}
                />
              </div>
              <textarea
                name="message"
                placeholder="Uw bericht"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="contact-input"
                style={{
                  padding: isMobile ? '0.8rem' : '1rem',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  resize: 'vertical',
                  width: '100%',
                  boxSizing: 'border-box',
                  background: 'rgba(204,51,17,0.3)',
                  color: '#fff',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(204,51,17,0.3)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: 'auto',
                  alignSelf: 'flex-start',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(204,51,17,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(204,51,17,0.3)';
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Verzenden
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#ff6b35'
                  }}>→</span>
                </span>
              </button>
            </form>
          </div>
          
          {/* Three Images Layout */}
          <div style={{ 
            position: 'relative',
            height: 'auto',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            minHeight: 'fit-content',
            marginTop: isMobile ? '2rem' : '0',
            marginBottom: isMobile ? '2rem' : '0'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              transform: isMobile ? 'translateY(0px)' : 'translateY(-120px)'
            }}>
              {/* Image 1 - Top Left */}
              <img 
                src={peterImg}
                alt="Peter de Keijzer"
                data-aos="fade-right"
                data-aos-delay="100"
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: isMobile ? '10px' : '20px',
                  width: isMobile ? '150px' : '200px',
                  height: isMobile ? '150px' : '200px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  transform: 'rotate(-5deg)',
                  animation: 'floating1 3s ease-in-out infinite',
                  zIndex: 3
                }}
              />
              
              {/* Image 2 - Top Right */}
              <img 
                src={huubImg}
                alt="Huub Jansen"
                data-aos="fade-left"
                data-aos-delay="200"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: isMobile ? '10px' : '20px',
                  width: isMobile ? '160px' : '220px',
                  height: isMobile ? '160px' : '220px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  transform: 'rotate(8deg)',
                  animation: 'floating2 3.2s ease-in-out infinite 0.5s',
                  zIndex: 4
                }}
              />
              
              {/* Image 3 - Bottom Center */}
              <img 
                src={janImg}
                alt="Jan Pouw"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(-3deg)',
                  width: isMobile ? '190px' : '260px',
                  height: isMobile ? '190px' : '260px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  animation: 'floating3 3.5s ease-in-out infinite 1s',
                  zIndex: 5
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
