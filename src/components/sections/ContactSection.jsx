import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-orange-50/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50/40 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
            <span className="text-sm font-medium text-orange-500 tracking-wider uppercase">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Partner{" "}
            <span className="text-transparent bg-clip-text italic relative" style={{ 
              background: 'linear-gradient(135deg, #FF681E, #E04A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              With Us
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-4xl leading-relaxed">
            Have a transformative idea or want to integrate our solutions? 
            We'd love to hear from you and explore endless possibilities together.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Transform?</h3>
                <p className="text-lg font-medium text-gray-600 leading-relaxed mb-8">
                  Join hundreds of businesses already transforming their financial services 
                  with our cutting-edge solutions.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-orange-600 font-medium">+91 91307 88799</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    ✉️
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-blue-600 font-medium">info@indiflyventures.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-green-50 rounded-2xl border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    🏢
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office</div>
                    <div className="text-green-600 font-medium">Pune, Maharashtra</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="pt-8 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-orange-600 mb-1">24h</div>
                    <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-blue-600 mb-1">500+</div>
                    <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-green-600 mb-1">99%</div>
                    <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                    <input
                      type="text"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                    <input
                      type="email"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Company Name *</label>
                    <input
                      type="text"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Project Details</label>
                  <textarea
                    rows={5}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 resize-none font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none"
                    placeholder="Tell us about your project or how you'd like to partner with us..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #FF681E, #E04A00)' }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <span>Send Message</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};