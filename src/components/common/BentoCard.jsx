import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedGradient } from './AnimatedGradient';
import { cn } from '../../utils/helpers';

export const BentoCard = ({ 
  title, 
  value, 
  subtitle, 
  colors, 
  delay, 
  onClick, 
  children, 
  className = "" 
}) => {
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