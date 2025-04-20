
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-2 md:py-32 md:px-8 lg:px-24 overflow-hidden bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
          alt="People in healthcare, woman on laptop"
          className="object-cover w-full h-full brightness-95 blur-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#c3e8fecc] via-[#ece2ff88] to-[#fdf6fdcc]" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div className="animate-slide-down flex flex-col">
            <span className="inline-flex items-center mb-3 bg-white/40 backdrop-blur px-3 py-1 text-xs font-semibold text-blue-700 rounded-full drop-shadow">
              <User size={16} className="mr-1 text-blue-600" /> Welcome to Saitama Connect
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-600 to-pink-400 drop-shadow">
              Healthcare, <span className="text-fuchsia-600">Smarter &amp; Closer</span>
            </h1>
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl border border-blue-100 shadow-lg p-5 mb-8">
              <p className="text-lg text-gray-800 font-medium">
                Connect with expert doctors and your health records from the comfort of your home. Booking, consultations, and personal health insights—all seamless and secure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:bg-blue-700 shadow-lg text-lg flex items-center gap-2 transition-transform hover:scale-105">
                <Link to="/register">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-700 bg-white/80 hover:bg-blue-100 hover:text-blue-900 shadow">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white glass max-w-md w-full relative after:absolute after:inset-0 after:bg-gradient-to-t from-blue-100/60 to-transparent pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                alt="Healthcare professional and patient"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
