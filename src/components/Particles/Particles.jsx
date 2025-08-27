import React, { useEffect, useRef } from 'react';

const Particles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();
  const lastSizeRef = useRef({ width: 0, height: 0 });
  const resizeTimeoutRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();

    // Particle class
    class Particle {
      constructor(fillScreen = false) {
        this.x = Math.random() * canvas.width;
        // If fillScreen is true, distribute particles throughout the canvas
        // Otherwise, start them below the canvas for the continuous flow
        this.y = fillScreen ? Math.random() * canvas.height : canvas.height + Math.random() * 100;
        this.size = Math.random() * 6 + 3; // Larger particles (3-9px)
        this.speedX = Math.random() * 0.8 - 0.4; // Slower horizontal movement (-0.4 to 0.4)
        this.speedY = -Math.random() * 0.8 - 0.2; // Slower upward movement (-0.2 to -1.0)
        this.opacity = Math.random() * 0.6 + 0.2; // More visible
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap horizontally
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        
        // Reset to bottom when reaching top
        if (this.y < -10) {
          this.y = canvas.height + Math.random() * 100;
          this.x = Math.random() * canvas.width;
          // Reset other properties for variety
          this.size = Math.random() * 6 + 3;
          this.speedX = Math.random() * 0.8 - 0.4;
          this.speedY = -Math.random() * 0.8 - 0.2;
          this.opacity = Math.random() * 0.6 + 0.2;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 190, 140, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000); // More particles (increased from 20000)
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        // Fill the screen with particles on initial load
        particlesRef.current.push(new Particle(true));
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) { // Increased connection distance for larger particles
            ctx.strokeStyle = `rgba(255, 190, 140, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1.5; // Slightly thicker lines
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    // Debounced resize handler that only recreates particles on significant size changes
    const handleResize = () => {
      // Clear any existing timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      // Debounce the resize handling
      resizeTimeoutRef.current = setTimeout(() => {
        const newWidth = canvas.offsetWidth;
        const newHeight = canvas.offsetHeight;
        
        // Only recreate particles if there's a significant size change (more than 50px difference)
        // This prevents recreation during minor mobile scrolling events
        const widthDiff = Math.abs(newWidth - lastSizeRef.current.width);
        const heightDiff = Math.abs(newHeight - lastSizeRef.current.height);
        
        if (widthDiff > 50 || heightDiff > 50) {
          resizeCanvas();
          createParticles();
          lastSizeRef.current = { width: newWidth, height: newHeight };
        } else {
          // Just update canvas size without recreating particles
          resizeCanvas();
        }
      }, 300); // 300ms debounce
    };

    // Store initial size
    lastSizeRef.current = { width: canvas.offsetWidth, height: canvas.offsetHeight };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default Particles;
