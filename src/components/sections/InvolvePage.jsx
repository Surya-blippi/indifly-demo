import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const InvolvePage = () => {
  const heroRef = useRef(null);
  const approachRef = useRef(null);
  const whyRef = useRef(null);
  const offeringsRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const offeringsInView = useInView(offeringsRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const approaches = [
    {
      title: 'Discover',
      description: 'Understand business goals and talent needs.',
      icon: '🔍',
      color: '#3B82F6'
    },
    {
      title: 'Design',
      description: 'Structure policies, processes, and people strategy.',
      icon: '📐',
      color: '#2563EB'
    },
    {
      title: 'Deliver',
      description: 'Execute hiring, compliance, and culture initiatives.',
      icon: '✨',
      color: '#1D4ED8'
    }
  ];

  const problems = [
    'Talent gaps slow down execution.',
    'Compliance gets overlooked until it hurts.',
    'Culture fades as teams grow.',
    'Processes lag behind scale.',
    'Onboarding isn\'t built for retention.'
  ];

  const offerings = [
    {
      title: 'Recruitment & Talent Acquisition',
      description: 'Permanent hiring across IT and non-IT, tailored to business needs at every stage.',
      icon: '👥',
      color: '#3B82F6'
    },
    {
      title: 'Employee Lifecycle Management',
      description: 'Seamless onboarding, documentation, payroll, exits, and everything in between.',
      icon: '🔄',
      color: '#2563EB'
    },
    {
      title: 'Compliance & Payroll',
      description: 'Statutory compliance (PF, ESI, LWF, POSH, Maternity, etc.) with accurate and timely payroll processing.',
      icon: '📋',
      color: '#1D4ED8'
    },
    {
      title: 'HR Outsourcing & Shared Services',
      description: 'Plug-and-play HR support — from hire to retire.',
      icon: '🤝',
      color: '#1E40AF'
    },
    {
      title: 'Policy & Culture Design',
      description: 'Drafting HR policies, SOPs, and frameworks that align with growth and compliance.',
      icon: '📖',
      color: '#3B82F6'
    },
    {
      title: 'HR Tech Setup',
      description: 'HRMS, attendance, leave, and exit workflows — designed for efficiency.',
      icon: '💻',
      color: '#2563EB'
    },
    {
      title: 'Labor Law Audits & Consulting',
      description: 'Audits and advisory to keep your organization future-ready.',
      icon: '⚖️',
      color: '#1D4ED8'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-cyan-600/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm font-bold tracking-wider uppercase">inVOLVE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              From teams of 10
              <br />
              to 100,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                scale people
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover. Design. Deliver. Teams don't just grow — they need to be built with intent. We shape culture, talent, and systems that scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Book an HR Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300">
                View Services
              </button>
            </div>
          </motion.div>

          {/* Visual Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mt-16"
          >
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
              {['👥', '📊', '🎯'].map((icon, i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center text-4xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section ref={approachRef} className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold max-w-3xl mx-auto">
              Teams don't just grow — they need to be built with intent. At inVOLVE, we shape culture, talent, and systems that scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={approachInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${approach.color}20, ${approach.color}10)` }}
                >
                  {approach.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{approach.description}</p>
                
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${approach.color}, transparent)` }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section ref={whyRef} className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Why it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">matters?</span>
            </h2>
            <p className="text-xl text-gray-300 font-semibold max-w-3xl mx-auto mb-8">
              Startups face people challenges like:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={whyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 font-black text-xl">✕</span>
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={whyInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                inVOLVE solves all of this!
              </h3>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <p className="text-blue-300 font-bold">Ready to build your dream team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section ref={offeringsRef} className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Offerings</span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold italic max-w-3xl mx-auto">
              A strong product needs strong people — inVOLVE builds both.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${offering.color}, ${offering.color}dd)` }}
                >
                  <span className="filter drop-shadow-lg">{offering.icon}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section ref={formRef} className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Let's Grow!
            </h2>
            <p className="text-xl text-gray-300">Ready to build your team?</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-bold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white font-bold mb-2">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your company name"
              />
            </div>
            <div className="mb-8">
              <label className="block text-white font-bold mb-2">Message</label>
              <textarea
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Tell us about your team needs..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};