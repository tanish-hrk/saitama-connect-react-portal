
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-24 px-4 md:py-32 lg:px-24 bg-gradient-to-br from-[#F1F0FB] via-[#d6bcfa] to-[#7E69AB] overflow-hidden">
      {/* BLURRED BRAIN HEALTH BG */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1600&q=80"
          alt="Healthcare professional holding brain scan"
          className="object-cover w-full h-full brightness-[0.75] blur-[6px]"
        />
        {/* SVG brain wave shape (subtle) */}
        <svg width="100%" height="100%" className="absolute inset-0 -z-10 opacity-25 pointer-events-none" viewBox="0 0 1440 500" fill="none">
          <path
            d="M0,320 Q360,260 600,350 T1440,310 V500 H0 Z"
            fill="#9b87f5"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-[#d6bcfa88] via-[#fff8] to-[#9b87f588]" />
      </div>
      {/* MAIN CONTENT */}
      <div className="container mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        {/* LEFT side content */}
        <div className="max-w-2xl text-center md:text-left animate-slide-down">
          <div className="inline-flex items-center mb-4 bg-white/50 px-4 py-1.5 rounded-full shadow-lg ring-2 ring-blue-100">
            <Brain size={20} className="text-fuchsia-600 mr-2" />
            <span className="uppercase text-xs font-semibold text-fuchsia-700 tracking-wide">AI Brain Tumor Detection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] via-[#9b87f5] to-[#1EAEDB] drop-shadow" style={{ WebkitTextStroke: '1px #fff' }}>
              Smarter Healthcare. <br />
              Earlier Brain Tumor Detection.
            </span>
          </h1>
          <p className="mt-6 mb-8 text-lg md:text-xl text-blue-950 font-medium bg-white/60 rounded-xl px-5 py-2 shadow-lg inline-block">
            Empowering patients and doctors to detect brain tumors early with AI-powered scans and easy-to-use reports. Secure, private, and always patient-centered.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl text-lg px-7 py-4 font-bold">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-fuchsia-600 text-fuchsia-700 bg-white/80 hover:bg-fuchsia-50 shadow-lg font-semibold">
              <Link to="/about">How it Works</Link>
            </Button>
          </div>
        </div>
        {/* RIGHT side: doctor/scan image in glassy card */}
        <div className="flex-shrink-0 relative max-w-md w-full md:w-[340px] drop-shadow-2xl">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 glass relative backdrop-blur-xl" style={{ minHeight: 350 }}>
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
              alt="Medical professional reviewing brain scan"
              className="w-full h-full object-cover"
            />
            {/* subtle highlight ring */}
            <div className="absolute inset-0 rounded-3xl ring-4 ring-[#7E69AB80] pointer-events-none animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
