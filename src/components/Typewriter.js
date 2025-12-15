import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 100, responsiveDelay = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calculatedDelay, setCalculatedDelay] = useState(delay);

  // Adjust typing speed based on screen size
  useEffect(() => {
    const updateDelay = () => {
      if (responsiveDelay) {
        if (window.innerWidth < 640) { // Mobile
          setCalculatedDelay(delay * 1.5); // Slower on mobile
        } else if (window.innerWidth < 1024) { // Tablet
          setCalculatedDelay(delay * 1.2); // Slightly slower on tablet
        } else { // Desktop
          setCalculatedDelay(delay); // Original speed
        }
      } else {
        setCalculatedDelay(delay);
      }
    };

    updateDelay(); // Initial calculation
    window.addEventListener('resize', updateDelay);
    
    return () => window.removeEventListener('resize', updateDelay);
  }, [delay, responsiveDelay]);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, calculatedDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, calculatedDelay, text]);

  // Responsive text size classes
  const textSizeClass = "text-sm sm:text-base md:text-lg lg:text-xl";

  return (
    <span className={`text-orange-400 font-mono ${textSizeClass}`}>
      {currentText}
      {/* Blinking cursor */}
      <span className="inline-block w-[2px] sm:w-[3px] h-4 sm:h-5 md:h-6 bg-orange-400 ml-1 animate-pulse"></span>
    </span>
  );
};

// Default props for optional responsive behavior
Typewriter.defaultProps = {
  delay: 100,
  responsiveDelay: true
};

export default Typewriter;