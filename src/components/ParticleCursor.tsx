import React, { useEffect, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

const ParticleCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Throttle particle creation to reduce performance impact
  const createParticle = useCallback((x: number, y: number) => {
    const newParticle: Particle = {
      id: Date.now(),
      x,
      y,
      opacity: 1,
    };
    
    setParticles(prev => {
      // Limit max particles to 5 for performance
      const newParticles = [newParticle, ...prev].slice(0, 5);
      return newParticles;
    });
  }, []);

  useEffect(() => {
    let moveTimer: NodeJS.Timeout;
    let lastParticleTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);

      // Throttle particle creation - only create particle every 150ms
      const now = Date.now();
      if (now - lastParticleTime > 150) {
        createParticle(e.clientX, e.clientY);
        lastParticleTime = now;
      }

      // Clear existing timer
      clearTimeout(moveTimer);

      // Set timer to stop moving effect
      moveTimer = setTimeout(() => {
        setIsMoving(false);
      }, 200);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimer);
    };
  }, [createParticle]);

  useEffect(() => {
    // Reduce animation frequency to 20fps for better performance
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.15, // Faster fade out
          }))
          .filter(particle => particle.opacity > 0)
      );
    }, 50); // 20fps instead of 32fps

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Custom cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-200 ease-out"
        style={{
          left: mousePosition.x - (isHovering ? 6 : 4),
          top: mousePosition.y - (isHovering ? 6 : 4),
          transform: `scale(${isMoving ? (isHovering ? 1.5 : 1.2) : 1})`,
        }}
      >
        <div 
          className={`rounded-full transition-all duration-200 ${
            isHovering 
              ? 'w-3 h-3 bg-blue-400' 
              : 'w-2 h-2 bg-white'
          }`} 
        />
      </div>

      {/* Simplified particle trail - max 5 particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Simplified cursor ring - only when hovering */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997] border border-blue-400/40 rounded-full transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 20,
            top: mousePosition.y - 20,
            width: 40,
            height: 40,
            transform: `scale(${isMoving ? 0.9 : 1})`,
          }}
        />
      )}
    </>
  );
};

export default ParticleCursor;
