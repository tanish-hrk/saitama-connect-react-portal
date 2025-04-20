
import React from 'react';
import PortalCard from './PortalCard';
import { User, Users } from 'lucide-react';

const PortalSection = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-20 glass animate-fade-in">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 via-blue-50 to-fuchsia-100 opacity-60" />
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-fuchsia-600 drop-shadow">
            Access Our Healthcare Portals
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Step into a personalized portal tailored for your journey. Patients and doctors enjoy seamless and secure digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <PortalCard 
            title="Patient Portal"
            description="Log in as a patient to access records, chat with doctors, and track your health." 
            icon={<User size={34} className="text-blue-600" />}
            linkTo="/patient"
            buttonText="Enter Patient Portal"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
            animation="animate-fade-in"
          />
          <PortalCard 
            title="Doctor Portal"
            description="For healthcare professionals: manage appointments, see patient updates, and track analytics."
            icon={<Users size={34} className="text-fuchsia-700" />}
            linkTo="/doctor"
            buttonText="Enter Doctor Portal"
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80"
            animation="animate-fade-in delay-150"
          />
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
