
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Brain } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Brain size={30} className={`${scrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-2xl font-extrabold ${scrolled ? 'text-blue-700' : 'text-white'}`}>
              NeuroDetect
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? (location.pathname === "/" ? "text-blue-600" : "text-gray-800") : "text-white"}`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? (location.pathname === "/about" ? "text-blue-600" : "text-gray-800") : "text-white"}`}>
              About
            </Link>
            <div className="relative group">
              <button className={`flex items-center font-medium group-hover:text-blue-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}>
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-lg shadow-xl p-3 border border-gray-100">
                  <Link to="/brain-scan" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Brain Scan Analysis</Link>
                  <Link to="/telemedicine" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Telemedicine</Link>
                  <Link to="/symptom-check" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Symptom Checker</Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? (location.pathname === "/contact" ? "text-blue-600" : "text-gray-800") : "text-white"}`}>
              Contact
            </Link>
          </div>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline" className={`rounded-full px-6 ${scrolled ? "border-blue-600 text-blue-600 hover:bg-blue-50" : "border-white text-white hover:bg-white/10"}`}>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
              <Link to="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className={scrolled ? "text-blue-600" : "text-white"}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white shadow-xl overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="container mx-auto px-6 py-4 space-y-4">
          <Link to="/" className="block py-2 font-medium text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="/about" className="block py-2 font-medium text-gray-800 hover:text-blue-600">About</Link>
          <Link to="/services" className="block py-2 font-medium text-gray-800 hover:text-blue-600">Services</Link>
          <Link to="/contact" className="block py-2 font-medium text-gray-800 hover:text-blue-600">Contact</Link>
          
          <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100">
            <Button asChild variant="outline" className="w-full justify-center rounded-full">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="w-full justify-center bg-blue-600 hover:bg-blue-700 rounded-full">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
