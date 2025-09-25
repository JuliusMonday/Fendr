import React, { useState } from 'react';
import { FaBars, FaTimes, FaSeedling } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaSeedling className="text-fendr-primary text-2xl" />
            <span className="text-2xl font-bold text-fendr-secondary">Fendr</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-fendr-secondary hover:text-fendr-primary transition-colors">Home</a>
            <a href="#about" className="text-fendr-secondary hover:text-fendr-primary transition-colors">About</a>
            <a href="#features" className="text-fendr-secondary hover:text-fendr-primary transition-colors">Features</a>
            <a href="#impact" className="text-fendr-secondary hover:text-fendr-primary transition-colors">Impact</a>
            <a href="#contact" className="text-fendr-secondary hover:text-fendr-primary transition-colors">Contact</a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex space-x-4">
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
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-fendr-secondary hover:text-fendr-primary transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-fendr-secondary hover:text-fendr-primary transition-colors" onClick={toggleMenu}>About</a>
              <a href="#features" className="text-fendr-secondary hover:text-fendr-primary transition-colors" onClick={toggleMenu}>Features</a>
              <a href="#impact" className="text-fendr-secondary hover:text-fendr-primary transition-colors" onClick={toggleMenu}>Impact</a>
              <a href="#contact" className="text-fendr-secondary hover:text-fendr-primary transition-colors" onClick={toggleMenu}>Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
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