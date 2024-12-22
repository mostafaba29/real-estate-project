import React, { useState, useEffect } from 'react';
import '../assets/css/indexstyle.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <div className="scroll-to-top shadow" onClick={scrollToTop}>
        <i className="fa fa-arrow-up m-2"></i>
      </div>
    )
  );
};

export default ScrollToTopButton;
