import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getModalColors } from '../../utils/helpers';

export const Modal = ({ product, onClose }) => {
  if (!product) return null;

  const colors = getModalColors(product.color);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
        onClick={onClose}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl text-white"
                style={{ background: `linear-gradient(135deg, ${colors.bg}, ${colors.bg}dd)` }}
              >
                {product.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
                <p className="text-lg font-semibold text-gray-600">{product.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors font-bold"
            >
              ✕
            </button>
          </div>

          <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {product.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className={`text-2xl font-bold mb-1 ${colors.text}`}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div 
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: colors.bg }}
                  />
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};