
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-2 md:py-32 md:px-8 lg:px-24 overflow-hidden">
      <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-blue-100 via-purple-100 to-yellow-50 opacity-80" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div className="animate-slide-down">
            <span className="inline-flex items-center mb-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 shadow">
              <Heart size={16} className="mr-1 text-pink-500" /> Care Reimagined
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-fuchsia-500 drop-shadow">
              Personalized Healthcare <br /> <span className="text-blue-600">One Click Away</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl shadow bg-white/30 backdrop-blur rounded-lg px-4 py-2 border border-white/50">
              Experience healthcare that's easy, fast, and centered around you. Saitama Connect is your all–in–one hub for managing health, connecting with professionals, and tracking progress—all in one beautiful space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:bg-blue-700 shadow-lg text-lg flex items-center gap-2 transition-transform hover:scale-105">
                <Link to="/register">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-700 bg-white/80 hover:bg-blue-100 hover:text-blue-900 shadow">
                <Link to="/about" className="flex items-center gap-2">
                  <Users size={18} /> Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80"
              alt="Modern digital healthcare"
              className="rounded-2xl shadow-2xl max-w-md border-4 border-white bg-white animate-fade-in"
              style={{ filter: 'drop-shadow(0 15px 60px rgba(75,107,251,0.09))' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
