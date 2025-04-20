
import React from 'react';
import PortalCard from './PortalCard';

const PortalSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Access Our Healthcare Portals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the portal that fits your needs. Whether you're a patient seeking care or a doctor providing it,
            we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PortalCard 
            title="Patient Portal"
            description="Access your health records, book appointments, and communicate with your healthcare providers."
            icon={
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            }
            linkTo="/patient"
            buttonText="Enter Patient Portal"
          />
          
          <PortalCard 
            title="Doctor Portal"
            description="Manage your appointments, access patient data, and streamline your practice workflow."
            icon={
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            }
            linkTo="/doctor"
            buttonText="Enter Doctor Portal"
          />
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
