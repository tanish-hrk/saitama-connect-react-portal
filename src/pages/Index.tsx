
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortalSection from '../components/PortalSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';
import ScrollPopNavbar from '../components/ScrollPopNavbar';

const Index = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#F1F0FB] via-[#d6bcfa] to-[#7E69AB]">
    <Navbar />
    <ScrollPopNavbar />
    <main className="flex-1">
      <HeroSection />
      <PortalSection />
      <FeatureSection />
      <TestimonialSection />
    </main>
    <Footer />
  </div>
);

export default Index;
