import React from 'react';
import { Heart, Calendar, Video, ClipboardList, Bell, UserCheck, ShieldAlert, BarChart } from 'lucide-react';

const features = [
  {
    title: "AI Health Insights",
    description: "Get AI-powered health analysis with instant recommendations tailored for you.",
    icon: <BarChart size={36} className="text-blue-600" />
  },
  {
    title: "Secure Medical Records",
    description: "Store and access your full medical history securely.",
    icon: <ShieldAlert size={36} className="text-pink-600" />
  },
  {
    title: "1-Click Appointments",
    description: "Book, reschedule, or cancel appointments easily.",
    icon: <Calendar size={36} className="text-yellow-500" />
  },
  {
    title: "Real-Time Telemedicine",
    description: "Consult doctors from home via live video calls.",
    icon: <Video size={36} className="text-fuchsia-700" />
  },
  {
    title: "Medication Reminders",
    description: "Never miss a dose—get timely reminders.",
    icon: <Bell size={36} className="text-blue-700" />
  },
  {
    title: "Personal Health Trends",
    description: "Track your vital signs and health progress visually.",
    icon: <ClipboardList size={36} className="text-purple-700" />
  },
];

const FeatureSection = () => (
  <section className="section-padding bg-gradient-to-tr from-white via-blue-50 to-purple-50 animate-fade-in">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-fuchsia-700 drop-shadow">
          Features That Make Healthcare Easier
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Discover powerful tools designed for proactive, connected, and stress-free care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="bg-white glass p-8 rounded-2xl shadow-lg hover:shadow-2xl animate-scale-in"
            style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;
