import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const getColorClasses = (color) => {
  const colors = {
    purple: { 
      accent: '#8B5CF6',
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-500',
      text: 'text-white',
      light: '#EDE9FE'
    },
    orange: { 
      accent: '#F59E0B',
      gradient: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-500',
      text: 'text-white',
      light: '#FEF3C7'
    },
    green: { 
      accent: '#10B981',
      gradient: 'from-green-500 to-green-600',
      bg: 'bg-green-500',
      text: 'text-white',
      light: '#D1FAE5'
    },
    blue: { 
      accent: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-500',
      text: 'text-white',
      light: '#DBEAFE'
    },
    red: {
      accent: '#EF4444',
      gradient: 'from-red-500 to-red-600',
      bg: 'bg-red-500',
      text: 'text-white',
      light: '#FEE2E2'
    },
    indigo: {
      accent: '#6366F1',
      gradient: 'from-indigo-500 to-indigo-600',
      bg: 'bg-indigo-500',
      text: 'text-white',
      light: '#E0E7FF'
    }
  };
  return colors[color] || colors.blue;
};

export const OurVenturesSection = ({ venturesData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [activeCategory, setActiveCategory] = useState(venturesData[0].id);
  const [activeVenture, setActiveVenture] = useState(venturesData[0].ventures[0].id);
  
  const currentCategory = venturesData.find(c => c.id === activeCategory);
  const currentVenture = currentCategory?.ventures.find(v => v.id === activeVenture) || currentCategory?.ventures[0];
  const colors = getColorClasses(currentVenture?.color || 'blue');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const category = venturesData.find(c => c.id === categoryId);
    setActiveVenture(category.ventures[0].id);
  };

  return (
    <section id="our-ventures" ref={ref} className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF5EB 0%, #FFE8D6 25%, #FFF0E5 50%, #FFE8D6 75%, #FFF5EB 100%)' }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-1/2 md:w-1/3 h-1/3 bg-gradient-to-bl from-orange-200/30 via-orange-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-1/2 md:w-1/3 h-1/3 bg-gradient-to-tr from-orange-200/30 via-orange-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-1/2 h-1/2 bg-gradient-to-br from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
        {/* Additional orange accents */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Section Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-full border border-orange-200/50 backdrop-blur-sm">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-bold text-orange-600 tracking-wider uppercase">Our Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight mb-4 md:mb-6 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Empowering{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600">
                Ventures
              </span>
              <motion.div 
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive financial technology solutions designed to empower businesses 
            and individuals across India's digital economy
          </p>
        </motion.div>

        {/* Main Content Layout - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start">
          
          {/* Enhanced Left Column - Category Navigation */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="space-y-2 md:space-y-3">
                {venturesData.map((category, index) => {
                  const categoryColors = getColorClasses(category.color);
                  const isActive = activeCategory === category.id;
                  
                  return (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`group w-full text-left p-4 md:p-5 rounded-xl md:rounded-2xl transition-all duration-300 border-2 relative overflow-hidden ${
                        isActive 
                          ? 'shadow-xl scale-[1.02]'
                          : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-[1.01]'
                      }`}
                      style={{
                        background: isActive ? `linear-gradient(135deg, ${categoryColors.accent}15, ${categoryColors.accent}05)` : undefined,
                        borderColor: isActive ? categoryColors.accent : undefined
                      }}
                    >
                      {/* Active indicator line */}
                      {isActive && (
                        <motion.div 
                          className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                          style={{ backgroundColor: categoryColors.accent }}
                          layoutId="activeIndicator"
                        />
                      )}
                      
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center space-x-3 md:space-x-4">
                          <motion.div 
                            className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-xl font-bold shadow-lg transition-all duration-300"
                            style={{
                              background: isActive 
                                ? `linear-gradient(135deg, ${categoryColors.accent}, ${categoryColors.accent}dd)`
                                : `linear-gradient(135deg, ${categoryColors.accent}20, ${categoryColors.accent}10)`,
                              color: isActive ? 'white' : categoryColors.accent
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {category.icon}
                          </motion.div>
                          <div>
                            <h4 className={`font-bold text-base md:text-lg mb-0.5 transition-colors ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                              {category.title}
                            </h4>
                            <p className="text-xs font-medium text-gray-500">
                              {category.ventures.length} {category.ventures.length === 1 ? 'Solution' : 'Solutions'}
                            </p>
                          </div>
                        </div>
                        
                        <motion.svg 
                          className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 flex-shrink-0" 
                          style={{ color: isActive ? categoryColors.accent : '#9CA3AF' }}
                          animate={{ x: isActive ? 3 : 0 }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Right Column - Venture Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden"
              >
                {/* Premium Venture Tabs - Mobile Optimized */}
                <div className="border-b border-gray-100 p-4 md:p-6 bg-gradient-to-r from-gray-50/50 to-white/50">
                  <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-1">
                    {currentCategory?.ventures.map((venture) => {
                      const ventureColors = getColorClasses(venture.color);
                      const isActiveVenture = activeVenture === venture.id;
                      
                      return (
                        <motion.button
                          key={venture.id}
                          onClick={() => setActiveVenture(venture.id)}
                          className={`relative px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm whitespace-nowrap transition-all duration-300 ${
                            isActiveVenture
                              ? 'text-white shadow-lg'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                          }`}
                          style={{
                            background: isActiveVenture 
                              ? `linear-gradient(135deg, ${ventureColors.accent}, ${ventureColors.accent}dd)` 
                              : undefined
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isActiveVenture && (
                            <motion.div
                              className="absolute inset-0 bg-white/20 rounded-lg md:rounded-xl"
                              layoutId="activeTab"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <span className="relative z-10">{venture.title}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced Venture Details - Mobile Optimized */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVenture}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 md:p-8 lg:p-10"
                  >
                    {/* Premium Venture Header - Mobile Optimized */}
                    <div className="mb-6 md:mb-8">
                      <div className="flex items-start space-x-3 md:space-x-5 mb-4">
                        <motion.div 
                          className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl text-white shadow-xl relative overflow-hidden flex-shrink-0"
                          style={{ 
                            background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}dd)` 
                          }}
                          whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <span className="relative z-10">{currentVenture.icon}</span>
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Title - Main venture name */}
                          <div className="mb-2 md:mb-3">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-none">
                              {currentVenture.title}
                            </h3>
                          </div>
                          
                          {/* Subtitle - Category type */}
                          <div className="mb-3 md:mb-4">
                            <p 
                              className="text-base md:text-lg font-bold"
                              style={{ color: colors.accent }}
                            >
                              {currentVenture.subtitle}
                            </p>
                          </div>
                          
                          {/* Tagline - Short catchy phrase */}
                          <div>
                            <p className="text-sm md:text-base font-semibold text-gray-600 leading-relaxed">
                              {currentVenture.tagline}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Premium Description - Mobile Optimized */}
                    <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl border border-gray-100">
                      <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
                        {currentVenture.description}
                      </p>
                    </div>

                    {/* Premium Key Features - Mobile Optimized */}
                    <div className="mb-6 md:mb-8">
                      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
                        <div 
                          className="w-1 h-5 md:h-6 rounded-full"
                          style={{ backgroundColor: colors.accent }}
                        />
                        <h4 className="text-lg md:text-xl font-black text-gray-900">Key Features</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        {currentVenture.features.map((feature, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group flex items-start space-x-3 p-3 md:p-4 bg-white rounded-lg md:rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                          >
                            <div 
                              className="w-5 h-5 md:w-6 md:h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: `${colors.accent}15` }}
                            >
                              <svg 
                                className="w-3 md:w-3.5 h-3 md:h-3.5" 
                                style={{ color: colors.accent }}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium text-xs md:text-sm leading-relaxed flex-1">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Premium CTA Buttons - Mobile Optimized */}
                    <div className="flex flex-col gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100">
                      <motion.button 
                        className="group relative w-full text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}dd)` 
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>{currentVenture.primaryCTA}</span>
                          <motion.svg 
                            className="w-4 h-4 md:w-5 md:h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                      </motion.button>
                      
                      <motion.button 
                        className="w-full px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-bold border-2 transition-all duration-300 hover:shadow-lg bg-white"
                        style={{ 
                          borderColor: colors.accent,
                          color: colors.accent
                        }}
                        whileHover={{ scale: 1.02, backgroundColor: `${colors.accent}10` }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {currentVenture.secondaryCTA}
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};