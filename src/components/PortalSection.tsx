
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { User, Users, ArrowRight } from 'lucide-react';

const PortalSection = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-900 text-4xl font-bold mb-4">Specialized Portals for Patients & Doctors</h2>
          <p className="text-gray-600 text-lg">
            Access dedicated spaces designed specifically for your healthcare journey, whether you're seeking care or providing it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Patient Portal Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center mb-6">
                <User size={32} className="text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Portal</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">Access your medical records</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">Schedule appointments</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">View scan results</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">Communicate with your doctor</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 rounded-full group">
                <Link to="/patient" className="flex items-center justify-center">
                  Enter Patient Portal
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Doctor Portal Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-indigo-100 border-4 border-white flex items-center justify-center mb-6">
                <Users size={32} className="text-indigo-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Doctor Portal</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">Manage patient records</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">Review AI analysis results</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">Schedule appointments</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">Conduct telemedicine sessions</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full group">
                <Link to="/doctor" className="flex items-center justify-center">
                  Enter Doctor Portal
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
