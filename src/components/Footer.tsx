
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-900 via-purple-800 to-fuchsia-700 text-white py-14 px-4 md:px-10 lg:px-20 shadow-inner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold mb-3">Saitama Connect</h3>
            <p className="text-fuchsia-100">
              Connecting patients to world-class healthcare services and compassionate care.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="text-blue-100 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/patient" className="text-blue-100 hover:text-white">Patient Portal</Link></li>
              <li><Link to="/doctor" className="text-blue-100 hover:text-white">Doctor Portal</Link></li>
              <li><Link to="/emergency" className="text-blue-100 hover:text-white">Emergency Care</Link></li>
              <li><Link to="/telemedicine" className="text-blue-100 hover:text-white">Telemedicine</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <address className="not-italic text-fuchsia-100">
              <p className="flex items-center gap-2"><MapPin size={17} /> 123 Healthcare Avenue, Saitama City, Japan</p>
              <p className="flex items-center gap-2 mt-2"><Mail size={17}/> info@saitamaconnect.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-fuchsia-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fuchsia-100">&copy; 2025 <span className="font-bold">Saitama Connect</span>. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-fuchsia-200 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-fuchsia-200 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
