import React from 'react';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import { navLinks } from '../../constants/data';

const Navigation = ({ isScrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">Reven</div>
        
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-6">
          <Search className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
          <div className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-[#DAFF00] w-5 h-5 rounded-full flex items-center justify-center text-sm font-medium">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;