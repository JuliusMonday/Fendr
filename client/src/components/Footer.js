import React from 'react';
import { FaSeedling, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-fendr-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaSeedling className="text-fendr-primary text-2xl" />
              <span className="text-2xl font-bold">Fendr</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Defending Farmers, Feeding Nations. Connecting Nigerian smallholder farmers directly to buyers for fair prices and fresh produce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-fendr-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fendr-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fendr-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fendr-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-fendr-primary transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-fendr-primary transition-colors">Features</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-fendr-primary transition-colors">Impact</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-fendr-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-fendr-primary" />
                <span className="text-gray-300">info@fendr.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-fendr-primary" />
                <span className="text-gray-300">+234 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-fendr-primary" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Fendr. All rights reserved. | Defending Farmers, Feeding Nations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;