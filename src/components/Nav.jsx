import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link" onClick={closeMenu}>
            <div className="logo-icon">
              <span className="chai-icon">☕</span>
            </div>
            <div className="logo-text">
              <span className="brand-name">CHAI BUNK</span>
              <span className="brand-tagline">DoddaBallapura</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/About" className="nav-link" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/Menu" className="nav-link" onClick={closeMenu}>
            Menu
          </Link>
          <Link to="/Contacting" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/Gallery" className="nav-link" onClick={closeMenu}>
            Gallery
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;