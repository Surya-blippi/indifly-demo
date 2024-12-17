import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext'; // Importing useAuth

const HeroSection = () => {
  const { user, signInWithGoogle, logout } = useAuth(); // Accessing user and auth methods

  return (
    <div className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#DAFF00]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="relative">
            {/* Year Tag */}
            <div className="group inline-flex items-center bg-black hover:bg-[#DAFF00] text-white hover:text-black px-5 py-2.5 rounded-full mb-12 cursor-pointer transition-all duration-300">
              <span className="w-2.5 h-2.5 bg-[#DAFF00] group-hover:bg-black rounded-full mr-2 transition-colors"></span>
              <span className="text-sm font-medium tracking-wider">#2024</span>
            </div>

            {/* Heading */}
            <div className="relative">
              <h1 className="text-[4.7rem] leading-[1.1] font-bold mb-6">
                <span className="block transform hover:translate-x-2 transition-transform duration-300">Work Done</span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-[#DAFF00] px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300 transform -rotate-1 hover:rotate-0">
                    Faster
                  </span>
                </span>
                <span className="block transform hover:translate-x-2 transition-transform duration-300">Than Ever</span>
              </h1>

              <p className="text-gray-600 text-xl mb-12 max-w-lg leading-relaxed">
                From logo designs to website & apps, we deliver 
                <span className="text-black font-semibold"> professional results </span>
                in hours, not days
              </p>

              {/* Conditional CTA Buttons */}
              <div className="flex items-center gap-12">
                {user ? (
                  <>
                    {/* Logout Button */}
                    <button
                      onClick={logout}
                      className="group bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:bg-[#DAFF00] hover:text-black transform hover:scale-105"
                    >
                      <span className="font-medium">Logout</span>
                      <ChevronRight className="w-5 h-5 group-hover:animate-pulse" />
                    </button>
                    
                    <div className="flex flex-col items-center">
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-12 h-12 rounded-full"
                      />
                      <span className="text-gray-500 font-medium">{user.displayName}</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Sign-In Button */}
                    <button
                      onClick={signInWithGoogle}
                      className="group bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:bg-[#DAFF00] hover:text-black transform hover:scale-105"
                    >
                      <span className="font-medium">Sign In</span>
                      <ChevronRight className="w-5 h-5 group-hover:animate-pulse" />
                    </button>
                    
                    <div className="group cursor-pointer">
                      <div className="text-5xl font-bold mb-1 group-hover:text-[#9d00ff] transition-colors">5K+</div>
                      <div className="text-gray-500 group-hover:text-black transition-colors">Happy Clients</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* Memoji Visual Area */}
            <div className="relative bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-[2rem] overflow-hidden group transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
              {/* Glass Effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              
              <div className="relative p-8">
                {/* Image Container */}
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/memojis.png" 
                    alt="Team Memojis" 
                    className="w-full h-full object-contain brightness-105 contrast-105"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/50 via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#DAFF00]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#DAFF00] rounded-full animate-bounce delay-100"></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#DAFF00] rounded-full animate-bounce delay-500"></div>
    </div>
  );
};

export default HeroSection;
