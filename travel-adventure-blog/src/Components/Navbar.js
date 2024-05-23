// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="brand">Travel & Adventure</a>
        <div className="menu">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
