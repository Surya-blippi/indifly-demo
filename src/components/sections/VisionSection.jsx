import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const VisionSection = ({ scrollToSection }) => {
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
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* First Paragraph */}
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-gray-800">
              We create <span className="font-semibold text-gray-900">platforms and ecosystems</span> for mission-driven founders that cultivate brands bringing about{" "}
              <span className="font-bold text-orange-600">digital inclusion</span> and{" "}
              <span className="font-bold text-orange-600">transformative growth</span> in the emerging regions of{" "}
              <span className="font-black text-orange-600 italic">Bharat</span>.
            </p>

            {/* Second Paragraph */}
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-gray-800">
              We are a <span className="font-semibold text-gray-900">venture builder</span> co-creating alongside founders in their journey from{" "}
              <span className="font-semibold text-gray-900">idea to industry</span> and beyond.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
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
                    e.target.style.display = 'block';
                    const fallback = e.target.parentElement.querySelector('.fallback-content');
                    if (fallback) {
                      fallback.style.display = 'none';
                    }
                  }}
                  onError={(e) => {
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