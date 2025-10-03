import React, { useState, useEffect, useCallback } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Modal } from './components/ui/Modal';
import { HeroSection } from './components/sections/HeroSection';
import { VenturesSection } from './components/sections/VenturesSection';
import { OurVenturesSection } from './components/sections/OurVenturesSection';
import { VisionSection } from './components/sections/VisionSection';
import { CoreSection } from './components/sections/CoreSection';
import { StatsSection } from './components/sections/StatsSection';
import { ContactSection } from './components/sections/ContactSection';
import { navItems, coreProducts, venturesData } from './data/constants';
import './styles/animations.css';



const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Simplified scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    setIsScrolled(scrolled > 50);

    // Simple section detection
   
    const sections = ['home', 'our-ventures', 'incore', 'stats', 'vision', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (current && current !== activeSection) {
      setActiveSection(current);
    }
  }, [activeSection]);

  // Simple scroll listener
  useEffect(() => {
    let timeoutId;
    const scrollListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Smooth scroll function
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  }, []);

  return (
    <div className="font-montserrat bg-gray-50 min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Navigation */}
      <Navigation
        isScrolled={isScrolled}
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />
      
      {/* Ventures Section */}
      <VenturesSection scrollToSection={scrollToSection} />
      
      {/* Vision Section */}
      <VisionSection scrollToSection={scrollToSection} />
      
      {/* Our Ventures Section */}
      <OurVenturesSection venturesData={venturesData} />
      
      {/* Core Technology Section */}
      <CoreSection coreProducts={coreProducts} setActiveModal={setActiveModal} />
      
      {/* Stats Section - Our Journey, Measured */}
      <StatsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer 
        navItems={navItems}
        coreProducts={coreProducts}
        scrollToSection={scrollToSection}
        setActiveModal={setActiveModal}
      />

      {/* Modal */}
      {activeModal && (
        <Modal
          product={activeModal === 'incore' ? {
            id: 'incore',
            title: 'inCORE',
            subtitle: 'Central Technology Hub',
            description: 'The heart of our ecosystem, inCORE provides the foundational infrastructure that powers all our financial technology solutions. Built for scalability, security, and seamless integration.',
            icon: '⚡',
            color: 'blue',
            stats: [
              { number: '99.9%', label: 'System Uptime' },
              { number: '500M+', label: 'Transactions' },
              { number: '24/7', label: 'Monitoring' },
              { number: '50ms', label: 'Response Time' }
            ],
            features: [
              'Scalable microservices architecture for high-volume transactions',
              'Bank-grade security with multi-layer encryption',
              'Comprehensive API ecosystem for seamless integrations',
              'Real-time transaction processing with sub-second response',
              'Automated monitoring and alerting system',
              'Built-in regulatory compliance for RBI standards'
            ]
          } : coreProducts.find(p => p.id === activeModal)}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};

export default App;