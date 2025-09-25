
import React, { useState } from 'react';
import { FaBars, FaTimes, FaSeedling } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaSeedling className="text-2xl text-fendr-primary" />
            <span className="text-2xl font-bold text-fendr-secondary">Fendr</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            <a href="#home" className="transition-colors text-fendr-secondary hover:text-fendr-primary">Home</a>
            <a href="#about" className="transition-colors text-fendr-secondary hover:text-fendr-primary">About</a>
            <a href="#features" className="transition-colors text-fendr-secondary hover:text-fendr-primary">Features</a>
            <a href="#impact" className="transition-colors text-fendr-secondary hover:text-fendr-primary">Impact</a>
            <a href="#contact" className="transition-colors text-fendr-secondary hover:text-fendr-primary">Contact</a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden space-x-4 md:flex">
            <button className="btn-outline">For Farmers</button>
            <button className="btn-primary">For Buyers</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-fendr-secondary"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="pb-4 mt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="transition-colors text-fendr-secondary hover:text-fendr-primary" onClick={toggleMenu}>Home</a>
              <a href="#about" className="transition-colors text-fendr-secondary hover:text-fendr-primary" onClick={toggleMenu}>About</a>
              <a href="#features" className="transition-colors text-fendr-secondary hover:text-fendr-primary" onClick={toggleMenu}>Features</a>
              <a href="#impact" className="transition-colors text-fendr-secondary hover:text-fendr-primary" onClick={toggleMenu}>Impact</a>
              <a href="#contact" className="transition-colors text-fendr-secondary hover:text-fendr-primary" onClick={toggleMenu}>Contact</a>
              <div className="flex flex-col pt-4 space-y-2">
                <button className="btn-outline">For Farmers</button>
                <button className="btn-primary">For Buyers</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;