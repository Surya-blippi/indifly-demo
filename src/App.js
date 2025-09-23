import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence, stagger, useAnimate } from 'framer-motion';

// Utility function for className merging
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Custom hook for dimensions
const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let timeoutId;
    const updateDimensions = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    const debouncedUpdateDimensions = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 250);
    };

    updateDimensions();
    window.addEventListener('resize', debouncedUpdateDimensions);

    return () => {
      window.removeEventListener('resize', debouncedUpdateDimensions);
      clearTimeout(timeoutId);
    };
  }, [ref]);

  return dimensions;
};

// AnimatedGradient Component
const AnimatedGradient = ({ colors, speed = 5, blur = "light" }) => {
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);
  
  const circleSize = Math.max(dimensions.width, dimensions.height);
  
  const blurClass = blur === "light" ? "blur-2xl" : blur === "medium" ? "blur-3xl" : "blur-[100px]";
  
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn("absolute inset-0", blurClass)}>
        {colors.map((color, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 50}%`,
              "--background-gradient-speed": `${1 / speed}s`,
              "--tx-1": Math.random() - 0.5,
              "--ty-1": Math.random() - 0.5,
              "--tx-2": Math.random() - 0.5,
              "--ty-2": Math.random() - 0.5,
              "--tx-3": Math.random() - 0.5,
              "--ty-3": Math.random() - 0.5,
              "--tx-4": Math.random() - 0.5,
              "--ty-4": Math.random() - 0.5,
            }}
            width={circleSize * randomInt(0.5, 1.5)}
            height={circleSize * randomInt(0.5, 1.5)}
            viewBox="0 0 100 100"
          >
            <circle 
              cx="50" 
              cy="50" 
              r="50" 
              fill={color} 
              className="opacity-20" 
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

// BentoCard Component
const BentoCard = ({ title, value, subtitle, colors, delay, onClick, children, className = "" }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={cn("relative overflow-hidden h-full bg-white cursor-pointer group", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-6 md:p-8 text-gray-900 backdrop-blur-sm h-full flex flex-col"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3
          className="text-lg md:text-xl font-bold text-gray-900 mb-2"
          variants={item}
        >
          {title}
        </motion.h3>
        
        {value && (
          <motion.p
            className="text-2xl md:text-3xl font-black mb-4 text-gray-900"
            variants={item}
          >
            {value}
          </motion.p>
        )}
        
        {subtitle && (
          <motion.p
            className="text-sm font-medium text-gray-700 mb-6 flex-1"
            variants={item}
          >
            {subtitle}
          </motion.p>
        )}
        
        {children && (
          <motion.div variants={item}>
            {children}
          </motion.div>
        )}
        
        <motion.div 
          className="flex items-center text-gray-800 font-semibold group-hover:translate-x-1 transition-transform duration-200 mt-auto"
          variants={item}
        >
          <span>Explore More</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Aurora Background Component
const AuroraBackground = ({ className, children, showRadialGradient = true, ...props }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};

// TextGenerateEffect Component
const TextGenerateEffect = ({ words, className = "", filter = true, duration = 0.5, delay = 0 }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.15),
        }
      );
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [animate, duration, filter, delay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className={className}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return renderWords();
};

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
      {/* Custom CSS for aurora and background gradient animations */}
      <style jsx>{`
        @keyframes aurora {
          from {
            background-position: 50% 50%, 50% 50%;
          }
          to {
            background-position: 350% 50%, 350% 50%;
          }
        }
        @keyframes background-gradient {
          0%, 100% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)));
          }
          40% {
            transform: translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)));
          }
          60% {
            transform: translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)));
          }
          80% {
            transform: translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)));
          }
        }
        .animate-aurora {
          animation: aurora 60s linear infinite;
        }
        .animate-background-gradient {
          animation: background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        }
        :root {
          --white: rgba(255, 255, 255, 0.1);
          --transparent: transparent;
          --black: rgba(0, 0, 0, 0.1);
          --blue-500: rgb(59 130 246);
          --indigo-300: rgb(165 180 252);
          --blue-300: rgb(147 197 253);
          --violet-200: rgb(221 214 254);
          --blue-400: rgb(96 165 250);
        }
      `}</style>

      {/* Premium Top Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' 
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div 
              className={`text-3xl font-black transition-all duration-500 cursor-pointer group ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                indi
                <span 
                  className="transition-all duration-300 group-hover:drop-shadow-lg"
                  style={{ color: '#FF681E' }}
                >
                  fly
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></div>
              </span>
            </motion.div>
            
            {/* Premium Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className={`flex items-center space-x-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gray-50/80 border border-gray-100' 
                  : 'bg-white/10 border border-white/20'
              }`}>
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-white shadow-lg transform scale-105'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-gray-900 hover:bg-white/60' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    style={{
                      backgroundColor: activeSection === item.id ? '#FF681E' : undefined,
                    }}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Animated background for active state */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600"
                        layoutId="activeNavItem"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover effect background */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    
                    {/* Bottom indicator line */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ${
                      activeSection === item.id ? 'w-8' : 'group-hover:w-6'
                    }`}></div>
                  </motion.button>
                ))}
              </div>
              
              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className={`ml-6 px-8 py-3 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 group overflow-hidden ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-white/20 border border-white/30 text-white hover:bg-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
            </div>
            
            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-900 bg-gray-50/80 border border-gray-100' 
                  : 'text-white bg-white/10 border border-white/20'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.div 
                  className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                />
                <motion.div 
                  className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.div 
                  className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                />
              </div>
            </motion.button>
          </div>

          {/* Premium Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-100/50">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left py-4 px-6 rounded-xl transition-all duration-200 font-semibold group ${
                          activeSection === item.id
                            ? 'text-white shadow-lg transform scale-[0.98]'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        style={{
                          background: activeSection === item.id ? 'linear-gradient(135deg, #FF681E, #E04A00)' : undefined
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          {activeSection === item.id && (
                            <motion.div
                              className="w-2 h-2 bg-white rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            />
                          )}
                        </div>
                      </motion.button>
                    ))}
                    
                    {/* Mobile CTA */}
                    <motion.button
                      onClick={() => {
                        scrollToSection('contact');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full mt-4 py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>



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

      {/* Ventures Section with Aurora Background */}
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

// Ventures Section Component with Bento Card Design
const VenturesSection = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ventures" ref={ref} className="py-32 px-6 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">Our Ecosystem</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Explore Our{" "}
            <span className="text-transparent bg-clip-text italic relative" style={{ 
              background: 'linear-gradient(135deg, #01295C, #025ED4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Ecosystem
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-4xl leading-relaxed">
            Interconnected financial technology solutions transforming how businesses and individuals 
            engage with finance across India.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          
          {/* inCORE - Large Card */}
          <BentoCard
            title="inCORE"
            colors={["#3B82F6", "#1D4ED8", "#60A5FA"]}
            delay={0.2}
            onClick={() => scrollToSection('incore')}
            className="md:col-span-2 min-h-[300px] rounded-3xl shadow-xl border border-blue-100/50"
          />

          {/* Solutions Card */}
          <BentoCard
            title="Our Solutions"
            colors={["#F59E0B", "#D97706", "#FCD34D"]}
            delay={0.4}
            onClick={() => scrollToSection('solutions')}
            className="min-h-[300px] rounded-3xl shadow-xl border border-orange-100/50"
          />

          {/* indSIGHTS Card */}
          <BentoCard
            title="indSIGHTS"
            colors={["#8B5CF6", "#7C3AED", "#A78BFA"]}
            delay={0.6}
            onClick={() => scrollToSection('incore')}
            className="min-h-[250px] rounded-3xl shadow-xl border border-purple-100/50"
          />

          {/* Partner with Us Card */}
          <BentoCard
            title="Partner with Us"
            colors={["#DC2626", "#EF4444", "#F87171"]}
            delay={0.8}
            onClick={() => scrollToSection('contact')}
            className="min-h-[250px] rounded-3xl shadow-xl border border-red-100/50"
          />

          {/* Get in Touch Card */}
          <BentoCard
            title="Get in Touch"
            colors={["#10B981", "#059669", "#34D399"]}
            delay={1.0}
            onClick={() => scrollToSection('contact')}
            className="min-h-[250px] rounded-3xl shadow-xl border border-green-100/50"
          />

        </div>
      </div>
    </section>
  );
};

// Solutions Section Component with Premium Design
const SolutionsSection = ({ solutions, activeSolution, setActiveSolution }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const currentSolution = solutions.find(s => s.id === activeSolution) || solutions[0];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { gradient: 'from-blue-600 to-blue-700', bg: 'from-blue-50 to-blue-100', text: 'text-blue-900', accent: '#01295C' },
      green: { gradient: 'from-green-600 to-green-700', bg: 'from-green-50 to-green-100', text: 'text-green-900', accent: '#059669' },
      orange: { gradient: 'from-orange-600 to-orange-700', bg: 'from-orange-50 to-orange-100', text: 'text-orange-900', accent: '#FF681E' },
      purple: { gradient: 'from-purple-600 to-purple-700', bg: 'from-purple-50 to-purple-100', text: 'text-purple-900', accent: '#8B5CF6' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(currentSolution.color);

  return (
    <section id="solutions" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-bl from-purple-50/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
            <span className="text-sm font-medium text-orange-600 tracking-wider uppercase">Our Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our{" "}
            <span className="text-transparent bg-clip-text italic relative" style={{ 
              background: 'linear-gradient(135deg, #FF681E, #E04A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Solutions
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-4xl leading-relaxed">
            Comprehensive financial technology solutions designed to empower businesses 
            and individuals across India's digital economy.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Solution Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-24"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Solution</h3>
              <div className="space-y-3">
                {solutions.map((solution, index) => {
                  const solutionColors = getColorClasses(solution.color);
                  return (
                    <motion.button
                      key={solution.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      onClick={() => setActiveSolution(solution.id)}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 group ${
                        activeSolution === solution.id 
                          ? `bg-gradient-to-r ${solutionColors.bg} ${solutionColors.text} border-2 scale-105 shadow-lg`
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md text-gray-800'
                      }`}
                      style={{
                        borderColor: activeSolution === solution.id ? solutionColors.accent : undefined
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div 
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                              activeSolution === solution.id 
                                ? 'bg-white/80 text-gray-800' 
                                : `bg-gradient-to-br ${solutionColors.gradient} text-white`
                            }`}
                          >
                            {solution.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{solution.title}</h4>
                            <p className="text-sm font-medium opacity-80">{solution.subtitle}</p>
                          </div>
                        </div>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeSolution === solution.id ? 'rotate-0' : 'rotate-45'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Active Solution Details */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              {/* Solution Header */}
              <div className="flex items-center space-x-6 mb-8">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}dd)` }}
                >
                  {currentSolution.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">{currentSolution.title}</h3>
                  <p 
                    className="text-lg font-semibold"
                    style={{ color: colors.accent }}
                  >
                    {currentSolution.subtitle}
                  </p>
                </div>
              </div>

              {/* Solution Description */}
              <p className="text-gray-700 font-medium text-xl leading-relaxed mb-10">
                {currentSolution.description}
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {currentSolution.stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <div 
                      className="text-3xl font-black mb-2"
                      style={{ color: colors.accent }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentSolution.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <div 
                        className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: colors.accent }}
                      />
                      <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <button 
                  className="group relative text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}dd)` }}
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Explore {currentSolution.title}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Vision Section Component with Text Generate Effect
const VisionSection = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vision"
      ref={ref}
      className="py-32 px-6 text-gray-900 relative bg-white overflow-hidden"
    >
      {/* Indian Flag Colors Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-orange-50/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-50/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-50/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
            <span className="text-sm font-medium text-orange-500 tracking-wider uppercase">Our Mission</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our{" "}
            <span className="text-transparent bg-clip-text italic relative" style={{ 
              background: 'linear-gradient(135deg, #FF681E, #E04A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Vision
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform -skew-x-12"></div>
            </span>
          </h2>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Text Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 space-y-12"
          >
            {/* Main Vision Statement */}
            <div className="space-y-8">
              <div className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-gray-800">
                {isInView && (
                  <p className="mb-6">
                    <TextGenerateEffect
                      words="Creating platforms for "
                      className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-gray-700 inline"
                      filter={true}
                      duration={0.6}
                      delay={0.5}
                    />
                    <TextGenerateEffect
                      words="mission-driven founders, "
                      className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-semibold text-gray-900 inline"
                      filter={true}
                      duration={0.6}
                      delay={2}
                    />
                    <TextGenerateEffect
                      words="bringing digital inclusion and transformative growth to every corner of "
                      className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-gray-700 inline"
                      filter={true}
                      duration={0.6}
                      delay={3.5}
                    />
                    <TextGenerateEffect
                      words="India."
                      className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-bold text-orange-600 italic inline"
                      filter={true}
                      duration={0.6}
                      delay={6}
                    />
                  </p>
                )}
              </div>

              {/* Philosophy Quote */}
              <div className="relative pl-8 border-l-4 border-orange-500/20">
                <div className="text-xl md:text-2xl leading-relaxed">
                  {isInView && (
                    <p className="text-gray-600 italic">
                      <TextGenerateEffect
                        words="Our philosophy: "
                        className="text-xl md:text-2xl leading-relaxed font-medium text-gray-600 inline"
                        filter={true}
                        duration={0.4}
                        delay={7}
                      />
                      <TextGenerateEffect
                        words={'"For the people, to the people, and by the people"'}
                        className="text-xl md:text-2xl leading-relaxed font-bold text-gray-900 inline"
                        filter={true}
                        duration={0.6}
                        delay={7.5}
                      />
                      <TextGenerateEffect
                        words=" — to build a brighter, more equitable financial future for "
                        className="text-xl md:text-2xl leading-relaxed font-medium text-gray-600 inline"
                        filter={true}
                        duration={0.6}
                        delay={10}
                      />
                      <TextGenerateEffect
                        words="Bharat."
                        className="text-xl md:text-2xl leading-relaxed font-bold text-orange-600 italic inline"
                        filter={true}
                        duration={0.6}
                        delay={12}
                      />
                    </p>
                  )}
                </div>
                <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 13 }}
              className="grid grid-cols-3 gap-8 py-8 border-t border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Cities Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">₹100Cr+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Value Created</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 lg:col-span-5 relative"
          >
            {/* Image Container with Premium Treatment */}
            <div className="relative group">
              {/* Main Image */}
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl relative">
                <img 
                  src="/vision.png" 
                  alt="Tier 2 India - Digital Transformation Vision"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onLoad={(e) => {
                    // Image loaded successfully, hide fallback
                    e.target.style.display = 'block';
                    const fallback = e.target.parentElement.querySelector('.fallback-content');
                    if (fallback) {
                      fallback.style.display = 'none';
                    }
                  }}
                  onError={(e) => {
                    // Image failed to load, show fallback
                    e.target.style.display = 'none';
                    const fallback = e.target.parentElement.querySelector('.fallback-content');
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                
                {/* Simple Fallback - Hidden by default */}
                <div className="fallback-content absolute inset-0 bg-gray-100 items-center justify-center" style={{ display: 'none' }}>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-300/40 to-green-300/40 rounded-full"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-orange-300/40 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-blue-300/40 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
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

// Core Technology Section Component with Premium Design
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
    <section id="incore" ref={ref} className="py-32 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/10 via-purple-50/10 to-orange-50/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
            <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">Technology Platform</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Core{" "}
            <span className="text-transparent bg-clip-text italic relative" style={{ 
              background: 'linear-gradient(135deg, #01295C, #025ED4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Technology
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-4xl leading-relaxed">
            inCORE is the heart of our ecosystem, powering a suite of interconnected financial solutions 
            designed for the Indian market with enterprise-grade security and scalability.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Clean Space */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
            </motion.div>
          </div>

          {/* Right Column - Product Ecosystem */}
          <div className="lg:col-span-7">
            
            {/* Desktop Puzzle Layout */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-full max-w-2xl aspect-square">
                {/* Surrounding Product Cards */}
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
                
                {/* Central Connection Hub */}
                <div className="absolute w-[34%] h-[34%] top-1/3 left-1/3">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-4 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-black text-gray-600 mb-2">inCORE</div>
                      <div className="text-xs font-medium text-gray-500">Hub</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Card Layout */}
            <div className="md:hidden grid grid-cols-1 gap-6">
              {coreProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                  isInView={isInView} 
                  onClick={() => setActiveModal(product.id)}
                />
              ))}
            </div>
          </div>
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

// Contact Section Component with Premium Design
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
    <section id="contact" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-orange-50/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50/40 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
            <span className="text-sm font-medium text-orange-500 tracking-wider uppercase">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Partner{" "}
            <span className="text-transparent bg-clip-text italic relative" style={{ 
              background: 'linear-gradient(135deg, #FF681E, #E04A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              With Us
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-4xl leading-relaxed">
            Have a transformative idea or want to integrate our solutions? 
            We'd love to hear from you and explore endless possibilities together.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Transform?</h3>
                <p className="text-lg font-medium text-gray-600 leading-relaxed mb-8">
                  Join hundreds of businesses already transforming their financial services 
                  with our cutting-edge solutions.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-orange-600 font-medium">+91 91307 88799</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    ✉️
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-blue-600 font-medium">info@indiflyventures.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-green-50 rounded-2xl border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    🏢
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office</div>
                    <div className="text-green-600 font-medium">Pune, Maharashtra</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="pt-8 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-orange-600 mb-1">24h</div>
                    <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-blue-600 mb-1">500+</div>
                    <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-green-600 mb-1">99%</div>
                    <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                    <input
                      type="text"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                    <input
                      type="email"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Company Name *</label>
                    <input
                      type="text"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Project Details</label>
                  <textarea
                    rows={5}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 resize-none font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                    placeholder="Tell us about your project or how you'd like to partner with us..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #FF681E, #E04A00)' }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <span>Send Message</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
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