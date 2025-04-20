
import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Saitama Connect has transformed how I manage my healthcare. Booking appointments and accessing my records is now so simple!"
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "As a doctor, this platform has streamlined my practice. I can easily manage appointments and securely access patient information."
    },
    {
      name: "Emma Rodriguez",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The telemedicine feature has been a lifesaver. I can connect with my doctor from the comfort of my home."
    }
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how Saitama Connect is making a difference in healthcare management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
              </div>
              <div className="pt-8 text-center">
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-blue-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
