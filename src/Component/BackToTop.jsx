import React, { useState } from 'react';
import { BiUpArrowAlt } from "react-icons/bi";


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  // Function to show or hide the button based on scroll position
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) { // Change this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className="back-to-top-btn"
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      <BiUpArrowAlt/>
    </button>
  );
};

export default BackToTopButton;
