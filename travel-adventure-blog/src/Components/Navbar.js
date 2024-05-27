import React, { useState, useEffect } from 'react';
import png from '../Images/png-transparent-travel-art-carolinas-aviation-museum-travel-tours-travel-agent-yellow-line-circle-logo-thumbnail.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY === 0) {
        // At the top of the page (home section)
        setIsVisible(false);
      } else if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-black py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
    >
      <div className="flex items-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center z-20">
          <a href='#home'><img src={png} alt="Logo" className="w-12 h-12 object-contain" /></a>
        </div>
      </div>
      <ul className="flex-grow flex justify-center">
        <li className="mr-4">
          <a href="#about" className="text-white font-bold hover:text-gray-200">ABOUT</a>
        </li>
        <li className="mr-4">
          <a href="#destination" className="text-white font-bold hover:text-gray-200">DESTINATION</a>
        </li>
        <li className="mr-4">
          <a href="#guides" className="text-white font-bold hover:text-gray-200">GUIDES</a>
        </li>
      </ul>
      <ul className="flex justify-end">
        <li className="mr-4">
          <a href="#" className="text-white font-bold hover:text-gray-200 border border-white rounded-full px-4 py-1">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
