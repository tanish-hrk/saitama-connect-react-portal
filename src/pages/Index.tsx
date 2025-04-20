
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortalSection from '../components/PortalSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';
import ScrollPopNavbar from '../components/ScrollPopNavbar';

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <ScrollPopNavbar />
    <main className="flex-1">
      <HeroSection />
      <FeatureSection />
      <PortalSection />
      <TestimonialSection />
    </main>
    <Footer />
  </div>
);

export default Index;
