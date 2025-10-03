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
import { InStackPage } from './components/sections/InStackPage';
import { InSurgePage } from './components/sections/InSurgePage';
import { InSurePage } from './components/sections/InSurePage';
import { InvolvePage } from './components/sections/InvolvePage';
import InCorePage from './components/sections/InCorePage';
import { navItems, coreProducts, venturesData } from './data/constants';
import './styles/animations.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState(null); // 'instack', 'insurge', 'insure', 'involve', 'incore' or null

  // Simplified scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    setIsScrolled(scrolled > 50);

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

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 100);
    }
  }, []);

  // Updated to include all full-page views
  const handleModalOpen = useCallback((modalId) => {
    if (['instack', 'insurge', 'insure', 'involve', 'incore'].includes(modalId)) {
      setActivePage(modalId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveModal(modalId);
    }
  }, []);

  // Full page view for individual products
  if (activePage) {
    return (
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={() => {
            setActivePage(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed top-6 right-6 z-50 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          aria-label="Close page"
        >
          <svg className="w-6 h-6 text-gray-900 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {activePage === 'incore' && <InCorePage />}
        {activePage === 'instack' && <InStackPage />}
        {activePage === 'insurge' && <InSurgePage />}
        {activePage === 'insure' && <InSurePage />}
        {activePage === 'involve' && <InvolvePage />}
      </div>
    );
  }

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
      <CoreSection coreProducts={coreProducts} setActiveModal={handleModalOpen} />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer 
        navItems={navItems}
        coreProducts={coreProducts}
        scrollToSection={scrollToSection}
        setActiveModal={handleModalOpen}
      />

      {/* Modal - for any other modals if needed */}
      {activeModal && (
        <Modal
          product={coreProducts.find(p => p.id === activeModal)}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};

export default App;