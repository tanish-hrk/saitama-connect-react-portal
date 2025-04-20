
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, User, Settings, Menu } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 56);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide on home? No, always show but animate shadow and bg on scroll
  return (
    <nav className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 shadow-lg backdrop-blur border-b border-blue-100"
        : "bg-white/60 shadow-none border-b border-transparent"
    }`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent text-2xl font-extrabold drop-shadow">Saitama Connect</span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={`hover:text-fuchsia-700 transition-colors font-medium ${location.pathname === "/" ? "text-fuchsia-700" : "text-gray-700"}`}><Home size={17} className="inline mr-1" />Home</Link>
          <Link to="/about" className={`hover:text-fuchsia-700 transition-colors font-medium ${location.pathname === "/about" ? "text-fuchsia-700" : "text-gray-700"}`}>About</Link>
          <Link to="/contact" className={`hover:text-fuchsia-700 transition-colors font-medium ${location.pathname === "/contact" ? "text-fuchsia-700" : "text-gray-700"}`}>Contact</Link>
          <Button asChild variant="outline" className="border-fuchsia-600 text-fuchsia-700 hover:bg-fuchsia-50 transition-all">
            <Link to="/login"><User size={16} className="inline mr-1" />Login</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 shadow">
            <Link to="/register">Register</Link>
          </Button>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="text-fuchsia-700">
            <Menu size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
