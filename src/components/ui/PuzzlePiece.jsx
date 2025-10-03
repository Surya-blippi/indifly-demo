import React from 'react';
import { motion } from 'framer-motion';
import { getProductColors } from '../../utils/helpers';

export const PuzzlePiece = ({ product, position, animation, onClick, isInView }) => {
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