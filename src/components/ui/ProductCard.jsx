import React from 'react';
import { motion } from 'framer-motion';
import { getProductColors } from '../../utils/helpers';

export const ProductCard = ({ product, index, isInView, onClick }) => {
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