import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor look for pointer events
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let follow;
    const followCursor = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }));
      follow = requestAnimationFrame(followCursor);
    };
    follow = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(follow);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner dot */}
      <div
        className="fixed w-2.5 h-2.5 bg-cyan-400 rounded-full transition-transform duration-75 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          scale: isHovered ? 1.8 : 1
        }}
      />
      {/* Outer ring */}
      <div
        className="fixed rounded-full border border-cyan-400/50 bg-cyan-400/10 backdrop-blur-[1px] transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.8)' : 'rgba(6, 182, 212, 0.4)'
        }}
      />
    </div>
  );
}
