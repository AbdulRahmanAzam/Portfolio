import React, { useEffect, useState } from 'react';

const SimpleCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Simple custom cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-200 ease-out"
        style={{
          left: mousePosition.x - (isHovering ? 6 : 4),
          top: mousePosition.y - (isHovering ? 6 : 4),
          transform: `scale(${isHovering ? 1.5 : 1})`,
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

      {/* Simple ring for hover state */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997] border border-blue-400/50 rounded-full transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x - 15,
            top: mousePosition.y - 15,
            width: 30,
            height: 30,
          }}
        />
      )}
    </>
  );
};

export default SimpleCursor;
