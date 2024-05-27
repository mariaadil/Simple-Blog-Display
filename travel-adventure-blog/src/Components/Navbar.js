import React, { useState } from 'react';
import png from '../Images/png-transparent-travel-art-carolinas-aviation-museum-travel-tours-travel-agent-yellow-line-circle-logo-thumbnail.png';
import Contact from './Contact';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="bg-black py-4 px-6 flex items-center justify-between w-full z-50">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
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
            <button onClick={toggleModal} className="text-white font-bold hover:text-gray-200 border border-white rounded-full px-4 py-1">CONTACT</button>
          </li>
        </ul>
      </nav>
      {isModalOpen && <Contact toggleModal={toggleModal} />}
    </>
  );
};

export default Navbar;
