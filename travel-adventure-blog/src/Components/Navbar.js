import React from 'react';
import png from '../Images/png-transparent-travel-art-carolinas-aviation-museum-travel-tours-travel-agent-yellow-line-circle-logo-thumbnail.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-2 bg-transparent">
      <img src={png} alt="Logo" className="w-8 h-8 z-20" />
      <ul className="flex">
        <li className="mr-4">
          <a href="#" className="text-white hover:text-gray-200">About</a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
