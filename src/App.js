import React, { useState, useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import FeaturesSection from './components/sections/FeaturesSection';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
    </div>
  );
};

export default App;