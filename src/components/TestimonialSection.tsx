
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Emily Johnson",
    role: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "The AI detection system has transformed how we diagnose brain tumors. The accuracy and speed are remarkable, allowing us to begin treatment much sooner.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    text: "After experiencing severe headaches, I used SaitamaHealth's platform. They detected a small tumor early, and thanks to this early diagnosis, my treatment was successful.",
    stars: 5
  },
  {
    name: "Dr. Sarah Williams",
    role: "Radiologist",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "As a radiologist, I appreciate the detailed analysis reports. The AI catches subtle patterns that could be missed in conventional screenings.",
    stars: 5
  }
];

const TestimonialSection = () => (
  <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white to-blue-50">
    <div className="container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-blue-900 text-4xl font-bold mb-4">What Medical Professionals & Patients Say</h2>
        <p className="text-gray-600 text-lg">
          The impact of our brain tumor detection technology on patients and healthcare providers.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-8 relative">
            <div className="flex justify-center mb-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-20 h-20 rounded-full border-4 border-blue-100 object-cover"
              />
            </div>
            
            <div className="text-center mb-4">
              <div className="flex justify-center">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 text-center italic mb-6">"{testimonial.text}"</p>
            
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-blue-600 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
