// ScrollToTop.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Get current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the location changes
  }, [location]);

  return null;
};

export default ScrollToTop;
