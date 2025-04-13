
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-charcoal text-xl md:text-2xl font-bold">
            ARCH<span className="text-terracotta">VISTA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover-underline ${isActive('/') ? 'text-terracotta' : 'text-charcoal'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover-underline ${isActive('/about') ? 'text-terracotta' : 'text-charcoal'}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`hover-underline ${isActive('/projects') ? 'text-terracotta' : 'text-charcoal'}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`hover-underline ${isActive('/contact') ? 'text-terracotta' : 'text-charcoal'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-charcoal">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fadeIn">
            <div className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`py-2 px-4 ${isActive('/') ? 'bg-concrete text-terracotta' : 'text-charcoal'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className={`py-2 px-4 ${isActive('/about') ? 'bg-concrete text-terracotta' : 'text-charcoal'}`}
              >
                About
              </Link>
              <Link 
                to="/projects" 
                onClick={closeMenu}
                className={`py-2 px-4 ${isActive('/projects') ? 'bg-concrete text-terracotta' : 'text-charcoal'}`}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`py-2 px-4 ${isActive('/contact') ? 'bg-concrete text-terracotta' : 'text-charcoal'}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
