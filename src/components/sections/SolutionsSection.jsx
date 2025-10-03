import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { getColorClasses } from '../../utils/helpers';

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
    <section id="ventures" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
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
            <span className="text-sm font-medium text-orange-600 tracking-wider uppercase">Our Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our{" "}
            <span className="text-transparent bg-clip-text italic relative" style={{ 
              background: 'linear-gradient(135deg, #FF681E, #E04A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Ventures
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
          
          {/* Left Column - Category Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="space-y-3">
                {venturesData.map((category, index) => {
                  const categoryColors = getColorClasses(category.color);
                  return (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 group ${
                        activeCategory === category.id 
                          ? `bg-gradient-to-r ${categoryColors.bg} ${categoryColors.text} border-2 scale-105 shadow-lg`
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md text-gray-800'
                      }`}
                      style={{
                        borderColor: activeCategory === category.id ? categoryColors.accent : undefined
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div 
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                              activeCategory === category.id 
                                ? 'bg-white/80 text-gray-800' 
                                : `bg-gradient-to-br ${categoryColors.gradient} text-white`
                            }`}
                          >
                            {category.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{category.title}</h4>
                          </div>
                        </div>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeCategory === category.id ? 'rotate-0' : 'rotate-45'
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

          {/* Right Column - Venture Tabs & Details */}
          <div className="lg:col-span-9">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100"
            >
              {/* Horizontal Venture Tabs */}
              <div className="border-b border-gray-100 p-6">
                <div className="flex space-x-2 overflow-x-auto">
                  {currentCategory?.ventures.map((venture) => (
                    <button
                      key={venture.id}
                      onClick={() => setActiveVenture(venture.id)}
                      className={`px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                        activeVenture === venture.id
                          ? 'text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      style={{
                        backgroundColor: activeVenture === venture.id ? colors.accent : undefined
                      }}
                    >
                      {venture.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Venture Details */}
              <motion.div
                key={activeVenture}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-12"
              >
                {/* Venture Header */}
                <div className="flex items-center space-x-6 mb-8">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}dd)` }}
                  >
                    {currentVenture.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">{currentVenture.title}</h3>
                    <p 
                      className="text-lg font-semibold"
                      style={{ color: colors.accent }}
                    >
                      {currentVenture.subtitle}
                    </p>
                  </div>
                </div>

                {/* Venture Description */}
                <p className="text-gray-700 font-medium text-xl leading-relaxed mb-10">
                  {currentVenture.description}
                </p>

                {/* Key Features */}
                <div className="mb-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentVenture.features.map((feature, index) => (
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

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <button 
                    className="group relative text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}dd)` }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <span>{currentVenture.primaryCTA}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  
                  <button 
                    className="px-10 py-4 rounded-2xl text-lg font-semibold border-2 transition-all duration-300 hover:shadow-md"
                    style={{ 
                      borderColor: colors.accent,
                      color: colors.accent
                    }}
                  >
                    {currentVenture.secondaryCTA}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};