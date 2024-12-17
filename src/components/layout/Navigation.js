import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext'; // Importing useAuth for authentication

const Navigation = ({ isScrolled }) => {
  const { user, signInWithGoogle, logout } = useAuth(); // Accessing user and auth methods

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Reven</div>

        {/* Conditional Buttons */}
        <div>
          {user ? (
            <div className="flex items-center gap-6">
              {/* Logout Button */}
              <button
                onClick={logout}
                className="group bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:bg-[#DAFF00] hover:text-black transform hover:scale-105"
              >
                <span className="font-medium">Logout</span>
                <ChevronRight className="w-5 h-5 group-hover:animate-pulse" />
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-700 font-medium">{user.displayName}</span>
              </div>
            </div>
          ) : (
            /* Sign In Button */
            <button
              onClick={signInWithGoogle}
              className="group bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:bg-[#DAFF00] hover:text-black transform hover:scale-105"
            >
              <span className="font-medium">Sign In</span>
              <ChevronRight className="w-5 h-5 group-hover:animate-pulse" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
