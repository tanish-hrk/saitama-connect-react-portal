
import React from 'react';
import { Brain, Heart, Shield, PlusCircle, Calendar, Video, Bell, ClipboardList } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Our advanced AI algorithms analyze brain scans with high accuracy to detect potential tumors.",
      icon: <Brain size={28} className="text-blue-600" />
    },
    {
      title: "Fast Results",
      description: "Get analysis results within minutes, enabling rapid decision-making for critical cases.",
      icon: <Heart size={28} className="text-red-500" />
    },
    {
      title: "Secure Patient Data",
      description: "All patient information and scan data are encrypted and protected with enterprise-grade security.",
      icon: <Shield size={28} className="text-green-600" />
    },
    {
      title: "Online Consultations",
      description: "Connect with specialists remotely for follow-up consultations and treatment planning.",
      icon: <Video size={28} className="text-purple-600" />
    },
    {
      title: "Appointment Booking",
      description: "Schedule in-person or virtual appointments with just a few clicks.",
      icon: <Calendar size={28} className="text-orange-500" />
    },
    {
      title: "24/7 Support",
      description: "Our medical support team is available around the clock for any emergencies or questions.",
      icon: <PlusCircle size={28} className="text-teal-600" />
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-900 text-4xl font-bold mb-4">Comprehensive Brain Health Services</h2>
          <p className="text-gray-600 text-lg">
            Our advanced platform offers a full spectrum of services designed to detect, monitor, and treat brain conditions with precision and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 group hover:border-blue-200 border border-transparent">
              <div className="mb-4 w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
