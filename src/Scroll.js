import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css'; // Create a corresponding CSS file for styling

function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newScrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-indicator" style={{ height: `${scrollPercentage}%` }}></div>;
}

export default ScrollIndicator;
