import React, { useEffect } from 'react';

export const SpotlightCursor: React.FC = () => {
  useEffect(() => {
    const updatePosition = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
      document.body.style.setProperty('--x', `${x}px`);
      document.body.style.setProperty('--y', `${y}px`);
    };

    const handleTouchStart = (e: TouchEvent) => {
        document.body.classList.add('touch-active');
        updatePosition(e);
    };

    const handleTouchEnd = () => {
        document.body.classList.remove('touch-active');
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', updatePosition, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', updatePosition);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.classList.remove('touch-active'); // Cleanup on unmount
    };
  }, []);

  return null;
};
