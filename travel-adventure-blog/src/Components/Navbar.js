import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 flex justify-end space-x-6 text-white">
      <a href="#home" className="hover:underline hover:text-yellow-500 transition duration-300">Home</a>
      <a href="#about" className="hover:underline hover:text-yellow-500 transition duration-300">About</a>
      <a href="#contact" className="hover:underline hover:text-yellow-500 transition duration-300">Contact</a>
    </nav>
  );
};

export default Navbar;
