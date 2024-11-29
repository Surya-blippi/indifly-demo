import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { services } from '../../constants/data';

const ServiceCard = ({ service }) => {
  const { title, time, price, description, bgColor } = service;
  
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-[400px]">
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor}`}>
        <div className="w-full h-full opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white">
            <Clock className="h-4 w-4 mr-1" />
            {time}
          </div>
          <span className="font-bold text-white">{price}</span>
        </div>
        <button className="mt-4 bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center group-hover:bg-[#DAFF00] transition-colors">
          Get Started <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;