
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Brain, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain size={28} className="text-blue-300" />
              <span className="text-xl font-bold">SaitamaHealth</span>
            </div>
            <p className="text-blue-100 mb-6">
              Leading the way in AI-powered brain tumor detection and healthcare innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={18} className="text-blue-200" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter size={18} className="text-blue-200" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={18} className="text-blue-200" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram size={18} className="text-blue-200" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/doctors" className="text-blue-100 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/brain-scan" className="text-blue-100 hover:text-white transition-colors">Brain Scan Analysis</Link></li>
              <li><Link to="/telemedicine" className="text-blue-100 hover:text-white transition-colors">Telemedicine</Link></li>
              <li><Link to="/patient-portal" className="text-blue-100 hover:text-white transition-colors">Patient Portal</Link></li>
              <li><Link to="/doctor-portal" className="text-blue-100 hover:text-white transition-colors">Doctor Portal</Link></li>
              <li><Link to="/emergency" className="text-blue-100 hover:text-white transition-colors">Emergency Care</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-blue-100">123 Healthcare Avenue, Saitama City, Japan</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-300 mr-3 flex-shrink-0" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-300 mr-3 flex-shrink-0" />
                <span className="text-blue-100">info@saitamahealth.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">&copy; 2025 SaitamaHealth. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-blue-200 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-blue-200 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/faq" className="text-blue-200 text-sm hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
