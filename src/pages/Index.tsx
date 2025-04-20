
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortalSection from '../components/PortalSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';

const Index = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50">
    <Navbar />
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
