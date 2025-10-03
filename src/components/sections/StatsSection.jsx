import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Counter animation hook
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Call hooks at the top level for each stat
  const companiesCount = useCounter(7, 2000, isInView);
  const partnersCount = useCounter(3, 2000, isInView);
  const customersCount = useCounter(126, 2000, isInView) / 100;

  const stats = [
    { value: companiesCount, suffix: '+', label: 'Companies', icon: '🏢', isDecimal: false },
    { value: partnersCount, suffix: 'L+', label: 'Partners', icon: '🤝', isDecimal: false },
    { value: customersCount, suffix: 'Cr+', label: 'Customers', icon: '👥', isDecimal: true }
  ];

  return (
    <section 
      id="stats"
      ref={ref} 
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FF6B1A 0%, #FF8C42 50%, #FF6B1A 100%)'
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black/10 to-transparent"></div>
      </div>

      {/* Indian Landmarks Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="landmarks" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="rgba(0,0,0,0.3)" />
            </pattern>
          </defs>
          <path 
            d="M0,192 L80,192 L80,160 L120,160 L120,192 L200,192 L200,140 L240,140 L240,192 L320,192 L320,120 L360,120 L360,192 L440,192 L440,160 L480,160 L480,192 L560,192 L560,100 L600,100 L600,192 L680,192 L680,140 L720,140 L720,192 L800,192 L800,160 L840,160 L840,192 L920,192 L920,120 L960,120 L960,192 L1040,192 L1040,160 L1080,160 L1080,192 L1160,192 L1160,140 L1200,140 L1200,192 L1280,192 L1280,160 L1320,160 L1320,192 L1440,192 L1440,320 L0,320 Z" 
            fill="rgba(0,0,0,0.15)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Title with Brush Stroke Effect */}
          <div className="relative inline-block mb-6">
            <motion.div 
              className="absolute inset-0 -inset-x-12 -inset-y-4"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '50px',
                transform: 'skewX(-2deg)'
              }}
            />
            <h2 className="relative text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="text-orange-600">Our Journey,</span>{" "}
              <span className="italic" style={{ color: '#D84315' }}>Measured</span>
            </h2>
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl font-semibold text-white/95 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Metrics that speak of countless stories of growth across Bharat!
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div 
                className="relative backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                }}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <motion.div 
                  className="text-5xl mb-4 filter drop-shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <div className="relative mb-3">
                  <motion.h3 
                    className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    {stat.isDecimal ? stat.value.toFixed(2) : stat.value}{stat.suffix}
                  </motion.h3>
                </div>

                {/* Label */}
                <p className="text-xl md:text-2xl font-bold text-white/95 tracking-wide">
                  {stat.label}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg font-semibold text-white/80">
            Building India's digital financial future, one milestone at a time
          </p>
        </motion.div>
      </div>
    </section>
  );
};