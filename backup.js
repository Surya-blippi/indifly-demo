import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const IndiFlyWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSolution, setActiveSolution] = useState('upi');

  // Simplified scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    setIsScrolled(scrolled > 50);

    // Simple section detection
    const sections = ['home', 'ventures', 'solutions', 'vision', 'incore', 'contact'];
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

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'vision', label: 'Our Why' },
    { id: 'incore', label: 'Our Core' },
    { id: 'contact', label: 'Contact' }
  ];

  // Solutions data
  const solutions = [
    {
      id: 'upi',
      title: 'UPI & Digital Payments',
      subtitle: 'Seamless Transaction Platform',
      description: 'Next-generation UPI infrastructure enabling instant, secure, and seamless digital payments across India. Built for scale with advanced fraud detection and real-time settlement.',
      icon: '💳',
      color: 'blue',
      image: '/api/placeholder/400/600',
      stats: [
        { number: '100M+', label: 'Transactions/Month' },
        { number: '0.1s', label: 'Transaction Time' },
        { number: '99.9%', label: 'Success Rate' },
        { number: '24/7', label: 'Availability' }
      ],
      features: [
        'Multi-bank UPI integration with seamless switching',
        'Advanced fraud detection and prevention systems',
        'Real-time transaction monitoring and analytics',
        'QR code generation and scanning capabilities',
        'Merchant payment gateway solutions',
        'International payment processing support'
      ]
    },
    {
      id: 'bapa',
      title: 'BAPA Integration',
      subtitle: 'Bharat Account Aggregator',
      description: 'Comprehensive Account Aggregator platform enabling secure financial data sharing and consent management. Empowering users with control over their financial information.',
      icon: '🔗',
      color: 'green',
      image: '/api/placeholder/400/600',
      stats: [
        { number: '50+', label: 'FIP Integrations' },
        { number: '10M+', label: 'Consents Managed' },
        { number: '100%', label: 'RBI Compliant' },
        { number: '256-bit', label: 'Encryption' }
      ],
      features: [
        'Secure consent management system',
        'Real-time financial data aggregation',
        'Multi-bank account linking capabilities',
        'Advanced data analytics and insights',
        'Regulatory compliance automation',
        'API-first architecture for easy integration'
      ]
    },
    {
      id: 'ondc',
      title: 'ONDC E-Commerce',
      subtitle: 'Open Network Commerce',
      description: 'Revolutionary e-commerce platform built on ONDC protocol. Democratizing digital commerce by connecting buyers and sellers in an open, interoperable network.',
      icon: '🛍️',
      color: 'orange',
      image: '/api/placeholder/400/600',
      stats: [
        { number: '1000+', label: 'Active Sellers' },
        { number: '50K+', label: 'Products Listed' },
        { number: '15+', label: 'Categories' },
        { number: '500+', label: 'Pin Codes' }
      ],
      features: [
        'ONDC protocol native implementation',
        'Multi-seller marketplace capabilities',
        'Integrated logistics and fulfillment',
        'Smart recommendation algorithms',
        'Seller onboarding and management tools',
        'Customer support automation'
      ]
    },
    {
      id: 'wealth',
      title: 'Wealth Management',
      subtitle: 'Intelligent Investment Platform',
      description: 'AI-powered wealth management platform offering personalized investment strategies, portfolio management, and financial planning for the Indian market.',
      icon: '📈',
      color: 'purple',
      image: '/api/placeholder/400/600',
      stats: [
        { number: '₹500Cr+', label: 'AUM' },
        { number: '10K+', label: 'Active Investors' },
        { number: '15%+', label: 'Avg Returns' },
        { number: '50+', label: 'Investment Options' }
      ],
      features: [
        'AI-driven portfolio optimization',
        'Goal-based investment planning',
        'Risk assessment and management',
        'Real-time market insights and alerts',
        'Tax optimization strategies',
        'Multi-asset class investments'
      ]
    }
  ];

  // Core products data
  const coreProducts = [
    {
      id: 'insurge',
      title: 'inSURGE',
      subtitle: 'Growth Capital Solutions',
      description: 'Empowering businesses with intelligent lending solutions, revenue-based financing, and growth capital tailored for the Indian startup ecosystem.',
      icon: '📈',
      color: 'blue',
      stats: [
        { number: '₹50Cr+', label: 'Capital Deployed' },
        { number: '500+', label: 'Startups Funded' },
        { number: '12%', label: 'Average ROI' },
        { number: '48hrs', label: 'Processing Time' }
      ],
      features: [
        'AI-Powered Credit Assessment using alternative data sources',
        'Revenue-Based Financing with flexible repayment terms',
        'Quick Disbursement within 48 hours of approval',
        'Startup-Friendly Terms with no collateral required',
        'Growth Analytics and business intelligence dashboard'
      ]
    },
    {
      id: 'instack',
      title: 'inSTACK',
      subtitle: 'Modular Infrastructure',
      description: 'A comprehensive technology stack providing modular banking infrastructure, payment processing, and financial service components.',
      icon: '🏗️',
      color: 'orange',
      stats: [
        { number: '50+', label: 'API Modules' },
        { number: '30 Days', label: 'Avg. Deployment' },
        { number: '100+', label: 'Integrations' },
        { number: '99.9%', label: 'System Uptime' }
      ],
      features: [
        'Core Banking System with complete account management',
        'Multi-channel Payment Gateway supporting all methods',
        'Automated KYC & Onboarding with Video KYC capability',
        'Built-in Compliance Suite for regulatory requirements',
        'White-label Solutions with customizable UI/UX'
      ]
    },
    {
      id: 'insure',
      title: 'inSURE',
      subtitle: 'Embedded Insurance',
      description: 'Comprehensive insurance solutions seamlessly integrated into financial products, providing protection across the financial journey.',
      icon: '🛡️',
      color: 'purple',
      stats: [
        { number: '25+', label: 'Insurance Partners' },
        { number: '15+', label: 'Product Categories' },
        { number: '₹100Cr+', label: 'Claims Processed' },
        { number: '24hrs', label: 'Claim Settlement' }
      ],
      features: [
        'Life & Health Insurance with instant policy issuance',
        'Business Protection for SMEs and startups',
        'AI-powered Claims Processing with quick settlements',
        'Micro-Insurance products for underserved segments',
        'Personalized Risk Analytics and premium calculation'
      ]
    },
    {
      id: 'involve',
      title: 'inVOLVE',
      subtitle: 'Community Engagement',
      description: 'Building financial communities through education, engagement, and empowerment across diverse Indian communities.',
      icon: '🤝',
      color: 'green',
      stats: [
        { number: '1M+', label: 'Active Users' },
        { number: '500+', label: 'Communities' },
        { number: '10K+', label: 'Educational Sessions' },
        { number: '15+', label: 'Languages' }
      ],
      features: [
        'Interactive Financial Literacy programs and certifications',
        'Community Forums for peer-to-peer learning',
        'Gamified Learning with rewards and achievements',
        'Expert Connect for direct access to advisors',
        'Regional Language Support in 15+ Indian languages'
      ]
    }
  ];

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
      {/* Top Bar for Mobile/Branding */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg border-b border-gray-100' 
            : 'bg-gradient-to-b from-black/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              indi<span style={{ color: '#FF681E' }}>fly</span>
            </div>
            
            {/* Mobile Menu Button - Only show on small screens */}
            <button
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div 
                  className={`w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  } ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                />
                <div 
                  className={`w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  } ${mobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <div 
                  className={`w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  } ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 p-6 bg-white rounded-xl shadow-xl border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                    activeSection === item.id
                      ? 'font-semibold'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{
                    color: activeSection === item.id ? '#FF681E' : undefined,
                    backgroundColor: activeSection === item.id ? '#FFF5F0' : undefined
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Right Side Dot Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'shadow-lg scale-105'
                    : 'hover:bg-white/20 text-white/90 hover:text-white hover:scale-105'
                }`}
                style={{
                  backgroundColor: activeSection === item.id ? '#FF681E' : undefined,
                  color: activeSection === item.id ? 'white' : undefined
                }}
              >
                {/* Dot */}
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white'
                      : 'bg-white/60 group-hover:bg-white'
                  }`}
                />
                {/* Section Name */}
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
      >
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/indifly.mp4" 
          >
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Transforming Finance in India</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight"
              style={{ 
                textShadow: '0 10px 50px rgba(0, 0, 0, 0.5)',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {"Badhna Aasan ".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.6 + index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="inline-block transition-colors duration-300 cursor-pointer"
                  style={{ color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.target.style.color = '#FF681E'}
                  onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <motion.span
                className="text-transparent bg-clip-text"
                style={{ 
                  background: 'linear-gradient(135deg, #FF681E, #E04A00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 1.8, duration: 1.2, type: "spring", stiffness: 150 }}
              >
                Hai
              </motion.span>
            </motion.h1>

            {/* Dynamic Underline */}
            <motion.div
              className="relative mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <motion.div
                className="h-2 mx-auto rounded-full w-11/12 max-w-[420px]"
                style={{ 
                  background: 'linear-gradient(90deg, #FF681E, #E04A00)',
                  transformOrigin: 'left'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.5, duration: 1.5, type: "spring", stiffness: 100 }}
              />
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 h-2 w-20 bg-white/30 rounded-full blur-sm"
                animate={{ x: [-180, 180] }}
                transition={{ delay: 4, duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #FF681E, #E04A00)',
                boxShadow: '0 20px 40px rgba(255, 104, 30, 0.3)'
              }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Partner with us</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ventures Section */}
      <VenturesSection scrollToSection={scrollToSection} />

      {/* Solutions Section */}
      <SolutionsSection 
        solutions={solutions} 
        activeSolution={activeSolution} 
        setActiveSolution={setActiveSolution} 
      />

      {/* Vision Section */}
      <VisionSection scrollToSection={scrollToSection} />

      {/* Core Technology Section */}
      <CoreSection coreProducts={coreProducts} setActiveModal={setActiveModal} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer navItems={navItems} coreProducts={coreProducts} scrollToSection={scrollToSection} setActiveModal={setActiveModal} />

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

// Ventures Section Component
const VenturesSection = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ventures" ref={ref} className="py-24 px-6 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Explore Our{" "}
            <span className="text-transparent bg-clip-text" style={{ 
              background: 'linear-gradient(135deg, #FF681E, #E04A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Ecosystem
            </span>
          </h2>
          <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto">
            Interconnected financial technology solutions transforming how businesses and individuals engage with finance across India.
          </p>
        </motion.div>

        {/* Symmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          
          {/* Our Ventures - Top Left Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl min-h-[300px]"
            style={{ background: 'linear-gradient(135deg, #01295C, #024397)' }}
            onClick={() => scrollToSection('incore')}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/30 rounded-lg rotate-12"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Our Ventures</h3>
                  <p className="text-blue-100 font-medium text-sm">Innovation Ecosystem</p>
                </div>
              </div>
              
              <p className="text-blue-50 font-medium leading-relaxed mb-6 flex-1">
                Innovative fintech solutions driving India's digital transformation through interconnected technology platforms.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {['Banking', 'Payments', 'Lending', 'Insurance'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-white">Explore More</span>
                <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* inCORE - Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl min-h-[140px]"
            style={{ background: 'linear-gradient(135deg, #01295C, #025ED4)' }}
            onClick={() => scrollToSection('incore')}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 left-2 w-6 h-6 border-2 border-white rounded rotate-45"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-white rounded"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-white rounded-lg rotate-12"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-white">inCORE</h3>
                  <p className="text-blue-100 font-medium text-sm">Central Technology Hub</p>
                </div>
              </div>
              
              <p className="text-blue-50 font-medium text-sm leading-relaxed mb-4 flex-1">
                Foundational infrastructure powering our entire financial ecosystem with scalable, secure solutions.
              </p>
              
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Transactions', value: '500M+' },
                  { label: 'Response', value: '50ms' }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <div className="text-sm font-bold text-white">{metric.value}</div>
                    <div className="text-xs font-medium text-blue-100">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-white text-sm">Discover Tech</span>
                <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* indSIGHTS - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl min-h-[140px]"
            style={{ background: 'linear-gradient(135deg, #025ED4, #86BBFE)' }}
            onClick={() => scrollToSection('incore')}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-xl">📊</div>
                <div>
                  <h3 className="text-lg font-bold text-white">indSIGHTS</h3>
                  <p className="text-blue-100 font-medium text-xs">Data Analytics</p>
                </div>
              </div>
              
              <p className="text-blue-50 font-medium text-sm leading-relaxed mb-3 flex-1">
                Advanced analytics platform providing real-time insights for informed financial decisions.
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {['Real-time', 'AI-Powered'].map((stat, index) => (
                  <span key={index} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium text-white">
                    {stat}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-white text-sm">Learn More</span>
                <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Become a Partner - Bottom Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl min-h-[140px]"
            style={{ background: 'linear-gradient(135deg, #FF681E, #E04A00)' }}
            onClick={() => scrollToSection('contact')}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  className="text-xl"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  🤝
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white">Partner</h3>
                  <p className="text-orange-100 font-medium text-xs">Join Ecosystem</p>
                </div>
              </div>
              
              <p className="text-orange-50 font-medium text-sm leading-relaxed mb-4 flex-1">
                Partner with us to build the future of finance. Join our innovative fintech ecosystem.
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-white text-sm">Partner with Us</span>
                <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Get in Touch - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 border-gray-200 bg-white/70 backdrop-blur-sm min-h-[140px]"
            onClick={() => scrollToSection('contact')}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  className="text-xl"
                  animate={{ rotateZ: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  📧
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Get in Touch</h3>
                  <p className="text-gray-600 font-medium text-xs">Connect with Us</p>
                </div>
              </div>
              
              <p className="text-gray-700 font-medium text-sm leading-relaxed mb-3 flex-1">
                Connect with our team to explore opportunities and transform your financial services.
              </p>
              
              <div className="mb-3 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-medium text-gray-600">
                  <span>📞</span>
                  <span>+91 91307 88799</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-medium text-gray-600">
                  <span>✉️</span>
                  <span>info@indiflyventures.com</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-gray-900 text-sm">Contact Us</span>
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: '#FF681E' }}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Solutions Section Component
const SolutionsSection = ({ solutions, activeSolution, setActiveSolution }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const currentSolution = solutions.find(s => s.id === activeSolution) || solutions[0];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'from-blue-50 to-blue-100', border: 'border-blue-200', text: 'text-blue-900', gradient: 'from-blue-600 to-blue-700' },
      green: { bg: 'from-green-50 to-green-100', border: 'border-green-200', text: 'text-green-900', gradient: 'from-green-600 to-green-700' },
      orange: { bg: 'from-orange-50 to-orange-100', border: 'border-orange-200', text: 'text-orange-900', gradient: 'from-orange-600 to-orange-700' },
      purple: { bg: 'from-purple-50 to-purple-100', border: 'border-purple-200', text: 'text-purple-900', gradient: 'from-purple-600 to-purple-700' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="solutions" ref={ref} className="py-24 px-6 bg-gradient-to-b from-orange-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our{" "}
            <span className="text-transparent bg-clip-text" style={{ 
              background: 'linear-gradient(135deg, #FF681E, #E04A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Solutions
            </span>
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-4xl mx-auto">
            Comprehensive financial technology solutions designed to empower businesses 
            and individuals across India's digital economy.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
            {/* Left Sidebar - Solutions List */}
            <div className="lg:col-span-2 bg-gray-50/70 border-r border-gray-200 p-6">
              <div className="space-y-3">
                {solutions.map((solution, index) => {
                  const colors = getColorClasses(solution.color);
                  return (
                    <motion.button
                      key={solution.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                      onClick={() => setActiveSolution(solution.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
                        activeSolution === solution.id 
                          ? `bg-gradient-to-r ${colors.bg} ${colors.border} scale-105 shadow-md`
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                          activeSolution === solution.id 
                            ? 'bg-white/80' 
                            : `bg-gradient-to-br ${colors.gradient} text-white`
                        }`}>
                          {solution.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold text-lg ${
                            activeSolution === solution.id ? 'text-gray-900' : 'text-gray-800'
                          }`}>
                            {solution.title}
                          </h3>
                          <p className={`text-sm font-medium ${
                            activeSolution === solution.id ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                            {solution.subtitle}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3 p-8">
              <motion.div
                key={activeSolution}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col"
              >
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white"
                      style={{ background: `linear-gradient(135deg, ${
                        currentSolution.color === 'blue' ? '#01295C, #025ED4' :
                        currentSolution.color === 'green' ? '#10B981, #059669' :
                        currentSolution.color === 'orange' ? '#FF681E, #E04A00' :
                        '#8B5CF6, #7C3AED'
                      })` }}
                    >
                      {currentSolution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{currentSolution.title}</h3>
                      <p className="text-lg font-semibold text-gray-600">{currentSolution.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">
                    {currentSolution.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {currentSolution.stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ 
                          background: `linear-gradient(135deg, ${
                            currentSolution.color === 'blue' ? '#01295C, #025ED4' :
                            currentSolution.color === 'green' ? '#10B981, #059669' :
                            currentSolution.color === 'orange' ? '#FF681E, #E04A00' :
                            '#8B5CF6, #7C3AED'
                          })`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentSolution.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div 
                          className="w-2 h-2 rounded-full mt-2"
                          style={{ 
                            background: `linear-gradient(135deg, ${
                              currentSolution.color === 'blue' ? '#01295C, #025ED4' :
                              currentSolution.color === 'green' ? '#10B981, #059669' :
                              currentSolution.color === 'orange' ? '#FF681E, #E04A00' :
                              '#8B5CF6, #7C3AED'
                            })`
                          }}
                        />
                        <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button 
                    className="text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${
                        currentSolution.color === 'blue' ? '#01295C, #025ED4' :
                        currentSolution.color === 'green' ? '#10B981, #059669' :
                        currentSolution.color === 'orange' ? '#FF681E, #E04A00' :
                        '#8B5CF6, #7C3AED'
                      })`
                    }}
                  >
                    Learn More About {currentSolution.title}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Vision Section Component
const VisionSection = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vision"
      ref={ref}
      className="py-24 px-6 text-white relative"
      style={{ background: 'linear-gradient(135deg, #01295C, #024397, #025ED4)' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(255, 104, 30, 0.1), transparent)' }}
        />
        <div 
          className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(134, 187, 254, 0.1), transparent)' }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Our{" "}
          <span className="text-transparent bg-clip-text" style={{ 
            background: 'linear-gradient(135deg, #FF681E, #FF915C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Vision
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            Creating platforms for mission-driven founders, bringing{" "}
            <span className="font-semibold" style={{ color: '#FF915C' }}>digital inclusion</span>
            {" "}&{" "}
            <span className="font-semibold" style={{ color: '#86BBFE' }}>transformative growth</span>
            {" "}to every corner of India.
          </p>
          
          <p className="text-lg md:text-xl font-medium">
            Our philosophy:{" "}
            <span className="font-bold text-xl md:text-2xl" style={{ color: '#FF681E' }}>
              "For the people, to the people, & by the people,"
            </span>
          </p>
          
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            to build a brighter, more equitable financial future for{" "}
            <span className="font-semibold" style={{ color: '#86BBFE' }}>Bharat</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <button
            onClick={() => scrollToSection('incore')}
            className="text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #FF681E, #E04A00)' }}
          >
            Discover Our Technology
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Puzzle Piece Component
const PuzzlePiece = ({ product, position, animation, onClick, isInView }) => {
  const getProductColors = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', border: 'border-blue-200', knob: 'bg-blue-200' },
      orange: { bg: 'bg-orange-100', border: 'border-orange-200', knob: 'bg-orange-200' },
      purple: { bg: 'bg-purple-100', border: 'border-purple-200', knob: 'bg-purple-200' },
      green: { bg: 'bg-green-100', border: 'border-green-200', knob: 'bg-green-200' }
    };
    return colorMap[product.color] || colorMap.blue;
  };
  
  const colors = getProductColors(product.color);

  return (
    <motion.div
      initial={animation.initial}
      animate={isInView ? animation.animate : {}}
      transition={animation.transition}
      className={`absolute w-[34%] h-[34%] cursor-pointer group ${position.classes}`}
      onClick={onClick}
    >
      <div className={`relative w-full h-full p-4 md:p-6 flex flex-col justify-center items-center text-center rounded-2xl border-2 shadow-lg transition-all duration-300 hover:scale-110 hover:z-20 ${colors.bg} ${colors.border}`}>
        <div className="text-3xl md:text-4xl mb-2">{product.icon}</div>
        <h3 className="text-sm md:text-base font-bold text-gray-800">{product.title}</h3>
        <p className="text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More</p>
        
        {/* Puzzle Knob */}
        <div className={`absolute w-[20%] h-[20%] rounded-full border-2 ${colors.knob} ${colors.border} ${position.knobClasses}`} />
      </div>
    </motion.div>
  );
};

// Core Technology Section Component
const CoreSection = ({ coreProducts, setActiveModal }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const puzzlePieces = [
    { product: coreProducts[0], position: { classes: 'top-0 left-1/3', knobClasses: 'bottom-0 translate-y-1/2' }, animation: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 } } },
    { product: coreProducts[1], position: { classes: 'top-1/3 right-0', knobClasses: 'left-0 -translate-x-1/2' }, animation: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.4 } } },
    { product: coreProducts[2], position: { classes: 'bottom-0 left-1/3', knobClasses: 'top-0 -translate-y-1/2' }, animation: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.6 } } },
    { product: coreProducts[3], position: { classes: 'top-1/3 left-0', knobClasses: 'right-0 translate-x-1/2' }, animation: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.8 } } }
  ];

  return (
    <section id="incore" ref={ref} className="py-24 px-6 bg-gradient-to-b from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Core{" "}
            <span className="text-transparent bg-clip-text" style={{ 
              background: 'linear-gradient(135deg, #01295C, #025ED4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Technology
            </span>
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-4xl mx-auto">
            inCORE is the heart of our ecosystem, powering a suite of interconnected financial solutions 
            designed for the Indian market.
          </p>
        </motion.div>

        {/* Puzzle Layout for Desktop */}
        <div className="hidden md:flex justify-center items-center mt-16">
          <div className="relative w-full max-w-xl lg:max-w-2xl aspect-square">
            {/* Central inCORE Piece */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute w-[34%] h-[34%] top-1/3 left-1/3 cursor-pointer group"
              onClick={() => setActiveModal('incore')}
            >
              <div className="relative w-full h-full p-6 flex flex-col justify-center items-center text-center text-white rounded-2xl border-2 border-blue-800 shadow-2xl transition-all duration-300 hover:scale-110 hover:z-20"
                   style={{ background: 'linear-gradient(135deg, #01295C, #025ED4)' }}
              >
                <div className="text-3xl font-black mb-1">inCORE</div>
                <div className="text-xs font-medium opacity-90">Central Tech Hub</div>
                <p className="text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to Explore</p>
                
                {/* Puzzle Notches (Holes) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[20%] rounded-full bg-blue-50 border-2 border-blue-800" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[20%] h-[20%] rounded-full bg-blue-50 border-2 border-blue-800" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[20%] h-[20%] rounded-full bg-blue-50 border-2 border-blue-800" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[20%] h-[20%] rounded-full bg-blue-50 border-2 border-blue-800" />
              </div>
            </motion.div>

            {/* Surrounding Puzzle Pieces */}
            {puzzlePieces.map(p => (
              <PuzzlePiece
                key={p.product.id}
                product={p.product}
                position={p.position}
                animation={p.animation}
                onClick={() => setActiveModal(p.product.id)}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
        
        {/* Stacked Layout for Mobile */}
        <div className="md:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {coreProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
              isInView={isInView} 
              onClick={() => setActiveModal(product.id)}
            />
          ))}
          {/* Mobile inCORE Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="sm:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl cursor-pointer shadow-lg hover:scale-105 transition-all duration-300 text-white"
            onClick={() => setActiveModal('incore')}
          >
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">inCORE Hub</h3>
            <p className="font-medium text-sm leading-relaxed text-blue-100">
              The foundational infrastructure that powers all our financial technology solutions.
            </p>
            <div className="mt-4 text-sm font-semibold flex items-center gap-1">
              Learn More →
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Product Card Component for Mobile View in CoreSection
const ProductCard = ({ product, index, isInView, onClick }) => {
  const getProductColors = (color) => {
    const colorMap = {
      blue: { bg: 'from-blue-50 to-blue-100', text: 'text-blue-800' },
      orange: { bg: 'from-orange-50 to-orange-100', text: 'text-orange-800' },
      purple: { bg: 'from-purple-50 to-purple-100', text: 'text-purple-800' },
      green: { bg: 'from-green-50 to-green-100', text: 'text-green-800' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getProductColors(product.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      className={`bg-gradient-to-br ${colors.bg} p-6 rounded-2xl cursor-pointer border shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 ${colors.text}`}
      onClick={onClick}
    >
      <div className="text-3xl mb-4">{product.icon}</div>
      <h3 className="text-xl font-bold mb-3">{product.title}</h3>
      <p className="text-gray-700 font-medium text-sm leading-relaxed">
        {product.description}
      </p>
      <div className="mt-4 text-sm font-semibold flex items-center gap-1">
        Learn More →
      </div>
    </motion.div>
  );
};

// Contact Section Component
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Partner{" "}
            <span className="text-transparent bg-clip-text" style={{ 
              background: 'linear-gradient(135deg, #FF681E, #E04A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              With Us
            </span>
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto">
            Have a transformative idea or want to integrate our solutions? 
            We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full p-4 border border-gray-200 rounded-xl transition-colors bg-white font-medium focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full p-4 border border-gray-200 rounded-xl transition-colors bg-white font-medium focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full p-4 border border-gray-200 rounded-xl transition-colors bg-white font-medium focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <input
                type="text"
                placeholder="Company Name *"
                className="w-full p-4 border border-gray-200 rounded-xl transition-colors bg-white font-medium focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <textarea
              placeholder="Tell us about your project or how you'd like to partner with us"
              rows={5}
              className="w-full p-4 border border-gray-200 rounded-xl transition-colors resize-none bg-white font-medium focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #FF681E, #E04A00)' }}
              >
                Partner with us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ navItems, coreProducts, scrollToSection, setActiveModal }) => (
  <footer className="bg-gray-900 text-white py-16 px-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="text-2xl font-bold mb-4">
            indi<span style={{ color: '#FF681E' }}>fly</span>
          </div>
          <p className="text-gray-300 font-medium mb-6 leading-relaxed">
            Indifly Ventures is dedicated to fostering entrepreneurship to bring about inclusive growth 
            in Bharat with the philosophy, "For the people, to the people, and by the people."
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-300 font-medium">
              <span>📧</span>
              <span>info@indiflyventures.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 font-medium">
              <span>📞</span>
              <span>+91 91307 88799</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: '#FF681E' }}>Quick Links</h3>
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-gray-300 font-medium transition-colors hover:text-orange-500 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: '#FF681E' }}>Our Products</h3>
          <div className="space-y-2">
            {coreProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveModal(product.id)}
                className="block text-gray-300 font-medium transition-colors hover:text-orange-500 text-left"
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 mb-6">
        <div className="text-center">
          <h4 className="font-semibold mb-2" style={{ color: '#FF681E' }}>Registered Office</h4>
          <p className="text-gray-400 font-medium text-sm max-w-xl mx-auto">
            Office No. 412, 4th Floor, Tower 2, World Trade Center, 
            Kharadi, Pune, Maharashtra 411014, India
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-400 font-medium text-sm">
          © 2025 Indifly Ventures Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Modal Component
const Modal = ({ product, onClose }) => {
  if (!product) return null;

  const getModalColors = (color) => {
    const colorMap = {
      blue: { gradient: 'from-blue-900 to-blue-700', text: 'text-blue-600', bg: '#01295C' },
      orange: { gradient: 'from-orange-900 to-orange-700', text: 'text-orange-600', bg: '#FF681E' },
      purple: { gradient: 'from-purple-900 to-purple-700', text: 'text-purple-600', bg: '#8B5CF6' },
      green: { gradient: 'from-green-900 to-green-700', text: 'text-green-600', bg: '#10B981' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getModalColors(product.color);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
        onClick={onClose}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl text-white"
                style={{ background: `linear-gradient(135deg, ${colors.bg}, ${colors.bg}dd)` }}
              >
                {product.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
                <p className="text-lg font-semibold text-gray-600">{product.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors font-bold"
            >
              ✕
            </button>
          </div>

          <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {product.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className={`text-2xl font-bold mb-1 ${colors.text}`}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div 
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: colors.bg }}
                  />
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IndiFlyWebsite;