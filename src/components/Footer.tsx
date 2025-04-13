
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ARCH<span className="text-terracotta">VISTA</span></h3>
            <p className="text-gray-300 mb-4">
              Creating innovative architectural solutions that transform spaces and inspire communities.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-terracotta transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-terracotta transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-terracotta transition duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-terracotta transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Architectural Design</li>
              <li className="text-gray-300">Interior Design</li>
              <li className="text-gray-300">Urban Planning</li>
              <li className="text-gray-300">Landscape Design</li>
              <li className="text-gray-300">3D Visualization</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-terracotta" />
                <span className="text-gray-300">123 Architecture St, Design City, DC 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-terracotta" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-terracotta">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-terracotta" />
                <a href="mailto:info@archvista.com" className="text-gray-300 hover:text-terracotta">info@archvista.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ARCHVISTA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
