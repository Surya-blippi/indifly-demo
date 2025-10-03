import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = ({ 
  isScrolled, 
  activeSection, 
  navItems, 
  scrollToSection, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' 
          : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo - Left */}
          <motion.div 
            className={`text-2xl md:text-3xl font-black transition-all duration-500 cursor-pointer group z-20 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            onClick={() => scrollToSection('home')}
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
          
          {/* Desktop Navigation Container - Only visible on desktop */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className={`flex items-center space-x-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-50/80 border border-gray-100' 
                : 'bg-white/10 border border-white/20'
            }`}>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 group ${
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
                  
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600"
                      layoutId="activeNavItem"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-8' : 'group-hover:w-6'
                  }`}></div>
                </motion.button>
              ))}
            </div>
          </div>
            
          {/* Desktop CTA Button - Right */}
          <div className="hidden lg:block z-20">
            <motion.button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 group overflow-hidden ${
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
                <span>Get in Touch</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 z-20 ${
              isScrolled 
                ? 'text-gray-900 bg-gray-50/80 border border-gray-100' 
                : 'text-white bg-white/10 border border-white/20'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.div 
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                }`}
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
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
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-100/50">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-4 px-6 rounded-xl transition-all duration-200 font-semibold ${
                        activeSection === item.id
                          ? 'text-white shadow-lg'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      style={{
                        background: activeSection === item.id ? 'linear-gradient(135deg, #FF681E, #E04A00)' : undefined
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {activeSection === item.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                    </button>
                  ))}
                  
                  {/* Mobile CTA */}
                  <button
                    onClick={() => {
                      scrollToSection('contact');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full mt-4 py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};