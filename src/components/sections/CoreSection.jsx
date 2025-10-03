import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const CoreSection = ({ coreProducts, setActiveModal }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const getColorClasses = (color) => {
    const colors = {
      purple: { bg: '#8B5CF6', dark: '#7C3AED' },
      orange: { bg: '#F59E0B', dark: '#D97706' },
      green: { bg: '#10B981', dark: '#059669' },
      blue: { bg: '#3B82F6', dark: '#2563EB' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="incore" ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-50/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-50/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Integrated expertise,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              delivered at every stage
            </span>
          </h2>
          <p className="text-base font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just advise, we embed. With inSTACK, inSURGE, inSURE, and inVOLVE founders gain 
            the muscle of execution alongside strategic leadership guidance.
          </p>
        </motion.div>

        {/* Puzzle Grid - Desktop */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="grid grid-cols-1 grid-rows-1">
            
            {/* 1. The 2x2 Puzzle Grid (Bottom Layer) */}
            {/* Increased gap here to create more space in the center (gap-12 from gap-8) */}
            <div className="grid grid-cols-2 gap-12 col-start-1 row-start-1">
              {coreProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  onClick={() => setActiveModal(product.id)}
                  className="rounded-3xl p-8 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
                  style={{ backgroundColor: getColorClasses(product.color).bg }}
                >
                  <div className="text-4xl mb-3">{product.icon}</div>
                  <h3 className="text-3xl font-black text-white mb-2">{product.title}</h3>
                  <p className="text-sm font-bold text-white/90 mb-3">{product.subtitle}</p>
                  <p className="text-sm text-white/80 leading-relaxed">{product.description}</p>
                </motion.div>
              ))}
            </div>

            {/* 2. The Central Circle (Top Layer) */}
            <div className="col-start-1 row-start-1 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="pointer-events-auto"
                onClick={() => setActiveModal('incore')}
              >
                <div className="w-48 h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full shadow-2xl flex items-center justify-center border-8 border-white cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-black mb-1">
                      <span className="text-orange-500">in</span>
                      <span className="text-white">CORE</span>
                    </div>
                    <div className="text-lg font-bold text-white mb-1">Strategic Hub</div>
                    <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Execution Engine</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreProducts.map((product, index) => {
            const colors = getColorClasses(product.color);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveModal(product.id)}
                className="rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: colors.bg }}
              >
                <div className="text-3xl mb-3">{product.icon}</div>
                <h3 className="text-2xl font-black text-white mb-2">{product.title}</h3>
                <p className="text-sm font-bold text-white/90 mb-2">{product.subtitle}</p>
                <p className="text-sm text-white/80 leading-relaxed">{product.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};