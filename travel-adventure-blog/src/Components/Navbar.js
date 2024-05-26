import React from 'react';
import png from '../Images/png-transparent-travel-art-carolinas-aviation-museum-travel-tours-travel-agent-yellow-line-circle-logo-thumbnail.png';

const Navbar = () => {
  return (
    <nav className="bg-black py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center z-20">
          <img src={png} alt="Logo" className="w-12 h-12 object-contain" />
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
