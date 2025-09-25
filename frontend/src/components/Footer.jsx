
import React from 'react';
import { FaSeedling, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white bg-fendr-secondary">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <FaSeedling className="text-2xl text-fendr-primary" />
              <span className="text-2xl font-bold">Fendr</span>
            </div>
            <p className="max-w-md mb-4 text-gray-300">
              Defending Farmers, Feeding Nations. Connecting Nigerian smallholder farmers directly to buyers for fair prices and fresh produce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 transition-colors hover:text-fendr-primary">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-fendr-primary">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-fendr-primary">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-fendr-primary">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 transition-colors hover:text-fendr-primary">About Us</a></li>
              <li><a href="#features" className="text-gray-300 transition-colors hover:text-fendr-primary">Features</a></li>
              <li><a href="#impact" className="text-gray-300 transition-colors hover:text-fendr-primary">Impact</a></li>
              <li><a href="#contact" className="text-gray-300 transition-colors hover:text-fendr-primary">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
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

        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p className="text-gray-300">
            © 2024 Fendr. All rights reserved. | Defending Farmers, Feeding Nations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;