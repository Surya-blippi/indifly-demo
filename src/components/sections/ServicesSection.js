import React from 'react';
import { 
  Clock, 
  ChevronRight, 
  Palette, 
  Users, 
  Megaphone,
  Globe
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext'; // Importing useAuth

const services = [
  {
    title: "Logo Design",
    time: "2 hours",
    price: "₹499",
    description: "AI-powered logo creation with expert refinement",
    bgColor: "from-blue-500 to-purple-500",
    icon: <Palette className="h-12 w-12 text-white" />
  },
  {
    title: "Lead Generation",
    time: "3 hours",
    price: "₹1299",
    description: "Qualified leads with detailed company info",
    bgColor: "from-purple-500 to-pink-500",
    icon: <Users className="h-12 w-12 text-white" />
  },
  {
    title: "AI Ad Creation",
    time: "2 hours",
    price: "₹1599",
    description: "High-converting ads for all platforms",
    bgColor: "from-pink-500 to-red-500",
    icon: <Megaphone className="h-12 w-12 text-white" />
  },
  {
    title: "Website Dev",
    time: "4 hours",
    price: "₹1999",
    description: "Professional sites built at lightning speed",
    bgColor: "from-red-500 to-orange-500",
    icon: <Globe className="h-12 w-12 text-white" />
  }
];

const ServiceCard = ({ service, onGetStarted }) => {
  const { title, time, price, description, bgColor, icon } = service;
  
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-[400px]">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor}`}>
        <div className="w-full h-full opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col">
        {/* Icon Container */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex-grow text-center">
          <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-200 text-lg">{description}</p>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          <div className="flex justify-between items-center bg-black/20 backdrop-blur-sm rounded-xl px-4 py-3 mb-4">
            <div className="flex items-center text-white">
              <Clock className="h-5 w-5 mr-2" />
              <span className="text-lg">{time}</span>
            </div>
            <span className="font-bold text-white text-lg">{price}</span>
          </div>
          
          {/* Get Started Button */}
          <button
            onClick={onGetStarted} // Call signInWithGoogle
            className="w-full bg-white text-black px-6 py-3.5 rounded-full font-semibold flex items-center justify-center group-hover:bg-[#DAFF00] transition-all duration-300 transform group-hover:scale-105"
          >
            <span className="text-lg">Get Started</span>
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { signInWithGoogle } = useAuth(); // Access signInWithGoogle function

  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              onGetStarted={signInWithGoogle} // Pass signInWithGoogle function
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
