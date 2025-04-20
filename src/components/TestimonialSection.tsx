
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Saitama Connect has completely transformed my healthcare routine. It's so easy to book appointments and review my health records now!",
    stars: 5
  },
  {
    name: "Dr. Michael Chen",
    role: "Cardiologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This platform is a breakthrough for digital medicine. Managing patient care and appointments has never been easier.",
    stars: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "I love the telemedicine feature! I can talk to my doctor wherever I am. The support team is fantastic too.",
    stars: 5
  }
];

const TestimonialSection = () => (
  <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-fuchsia-50 animate-fade-in">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-700 to-blue-900 drop-shadow">
          What Our Users Say
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Real stories from patients and providers making the most of Saitama Connect.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="relative bg-white/90 glass p-8 rounded-2xl shadow-xl text-center flex flex-col items-center animate-fade-in"
            style={{ animationDelay: `${i * 100 + 100}ms`, animationFillMode: 'both' }}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-fuchsia-100 shadow-xl object-cover"
              />
            </div>
            <div className="pt-12">
              <p className="text-gray-800 italic mb-4 block">"{t.text}"</p>
              <div className="flex items-center justify-center mb-1">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star key={idx} size={18} className="text-yellow-400 fill-yellow-300" />
                ))}
              </div>
              <h4 className="text-lg font-bold">{t.name}</h4>
              <span className="text-blue-600 text-sm">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
