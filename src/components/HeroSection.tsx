
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Heart, Brain, Shield, PlusCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1600&q=80" 
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Brain size={18} className="text-blue-300 mr-2" />
              <span className="text-white/90 text-sm font-medium">Advanced Brain Tumor Detection</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              NeuroDetect 
              <span className="block text-blue-300">Brain Tumor Detection</span>
              Technology
            </h1>
            
            <p className="text-lg text-white/80 max-w-lg">
              Early detection saves lives. Our AI-powered system provides rapid, accurate brain tumor assessments, helping doctors make timely decisions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Brain size={20} className="text-blue-300" />
                </div>
                <span className="text-white/90 text-sm">AI Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Heart size={20} className="text-green-300" />
                </div>
                <span className="text-white/90 text-sm">Fast Results</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Shield size={20} className="text-purple-300" />
                </div>
                <span className="text-white/90 text-sm">Secure Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <PlusCircle size={20} className="text-red-300" />
                </div>
                <span className="text-white/90 text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
                alt="Healthcare professional using laptop"
                className="rounded-2xl border-4 border-white/10 shadow-2xl w-[450px] relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
