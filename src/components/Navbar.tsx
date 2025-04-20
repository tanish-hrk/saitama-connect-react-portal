
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, User, Settings, Menu } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 shadow-xl backdrop-blur-lg border-b border-blue-200"
          : "bg-white/40 shadow-none border-b border-transparent"
      }`}
      style={{
        backdropFilter: "blur(18px)",
        borderRadius: '0 0 2rem 2rem',
        borderTop: 'none',
        borderWidth: '0 0 2px 0',
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-[#7E69AB] to-[#1EAEDB] bg-clip-text text-transparent text-2xl font-black tracking-tight drop-shadow">Saitama Connect</span>
        </Link>
        <div className="hidden md:flex space-x-7 items-center">
          <Link to="/" className={`hover:text-fuchsia-700 transition-colors font-bold ${location.pathname === "/" ? "text-fuchsia-700 underline underline-offset-4" : "text-blue-900"}`}><Home size={18} className="inline mr-1" />Home</Link>
          <Link to="/about" className={`hover:text-fuchsia-700 transition-colors font-bold ${location.pathname === "/about" ? "text-fuchsia-700 underline underline-offset-4" : "text-blue-900"}`}><Settings size={16} className="inline mr-1" />About</Link>
          <Link to="/contact" className={`hover:text-fuchsia-700 transition-colors font-bold ${location.pathname === "/contact" ? "text-fuchsia-700 underline underline-offset-4" : "text-blue-900"}`}>Contact</Link>
          <Button asChild variant="outline" className="border-fuchsia-600 text-fuchsia-700 hover:bg-fuchsia-50 transition-all font-semibold">
            <Link to="/login"><User size={16} className="inline mr-1" />Login</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow font-semibold">
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
