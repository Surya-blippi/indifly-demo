import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = ({ scrollToSection }) => {
  return (
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
  );
};