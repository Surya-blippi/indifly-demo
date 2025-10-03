import React from 'react';

export const Footer = ({ navItems, coreProducts, scrollToSection, setActiveModal }) => (
  <footer className="bg-gray-900 text-white py-16 px-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="text-2xl font-bold mb-4">
            indi<span style={{ color: '#FF681E' }}>fly</span>
          </div>
          <p className="text-gray-300 font-medium mb-6 leading-relaxed">
            Indifly Ventures is dedicated to fostering entrepreneurship to bring about inclusive growth 
            in Bharat with the philosophy, "For the people, to the people, and by the people."
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-300 font-medium">
              <span>📧</span>
              <span>info@indiflyventures.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 font-medium">
              <span>📞</span>
              <span>+91 91307 88799</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: '#FF681E' }}>Quick Links</h3>
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-gray-300 font-medium transition-colors hover:text-orange-500 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: '#FF681E' }}>Our Products</h3>
          <div className="space-y-2">
            {coreProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveModal(product.id)}
                className="block text-gray-300 font-medium transition-colors hover:text-orange-500 text-left"
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 mb-6">
        <div className="text-center">
          <h4 className="font-semibold mb-2" style={{ color: '#FF681E' }}>Registered Office</h4>
          <p className="text-gray-400 font-medium text-sm max-w-xl mx-auto">
            Office No. 412, 4th Floor, Tower 2, World Trade Center, 
            Kharadi, Pune, Maharashtra 411014, India
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-400 font-medium text-sm">
          © 2025 Indifly Ventures Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);