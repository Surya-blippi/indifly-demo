import React from 'react';
import { Search, Heart, ShoppingCart, LogIn, LogOut } from 'lucide-react';
import { navLinks } from '../../constants/data';
import { useAuth } from '../../context/AuthContext';

const Navigation = ({ isScrolled }) => {
  const { user, signInWithGoogle, logout } = useAuth();

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

          {user ? (
            <div className="flex items-center gap-4">
              <img 
                src={user.photoURL} 
                alt={user.displayName}
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              <button 
                onClick={logout}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-[#DAFF00] hover:text-black transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={signInWithGoogle}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-[#DAFF00] hover:text-black transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;