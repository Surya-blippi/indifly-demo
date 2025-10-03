import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function InCorePage() {
  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const comprisesRef = useRef(null);
  const stackRef = useRef(null);
  const journeyRef = useRef(null);
  const casesRef = useRef(null);
  const insightsRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" });
  const comprisesInView = useInView(comprisesRef, { once: true, margin: "-100px" });
  const stackInView = useInView(stackRef, { once: true, margin: "-100px" });
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" });
  const casesInView = useInView(casesRef, { once: true, margin: "-100px" });
  const insightsInView = useInView(insightsRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Orange Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium tracking-wide">inCORE</span>
            </div>

            {/* Main Heading with Animation */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
              {"Integrated ".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.03,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="text-transparent bg-clip-text inline-block"
                style={{ 
                  background: 'linear-gradient(135deg, #FF681E, #E04A00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 150 }}
              >
                Expertise
              </motion.span>
              <br />
              {"for Startup Success".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 1.2 + index * 0.02,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            {/* Dynamic Underline */}
            <motion.div
              className="relative mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.div
                className="h-2 mx-auto rounded-full w-72"
                style={{ 
                  background: 'linear-gradient(90deg, #FF681E, #E04A00)',
                }}
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ delay: 2, duration: 1, type: "spring", stiffness: 100 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Not another agency. A partner in the trenches. We think like insiders, act like owners, and scale like operators.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.4 }}
              onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="group relative text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #FF681E, #E04A00)',
                boxShadow: '0 20px 40px rgba(255, 104, 30, 0.3)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Let's Build Together</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-32 md:py-40 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32">
                <div className="w-16 h-1 rounded-full mb-8" style={{ background: 'linear-gradient(90deg, #FF681E, #E04A00)' }}></div>
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
                  The Philosophy
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Building partnerships that transform startups into industry leaders
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="space-y-12">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight font-light"
                >
                  The startup ecosystem does not need another agency.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight font-semibold"
                >
                  It needs a partner in the trenches.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
                >
                  {[
                    { label: 'Co-create', desc: 'We do not consult from the sidelines' },
                    { label: 'Think & Act', desc: 'Like insiders and owners' },
                    { label: 'Scale', desc: 'Like operators who have been there' }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4 group-hover:w-16 transition-all duration-300"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Comprises Section */}
      <section ref={comprisesRef} className="py-32 md:py-40 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={comprisesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">
              What Comprises inCORE
            </h2>
            <p className="text-2xl md:text-3xl text-white max-w-4xl mx-auto font-light leading-relaxed">
              Every startup moves through phases — spark, build, scale, transform. 
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> At each stage, inCORE plugs in as an engine.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'CxO Leadership',
                subtitle: 'Strategic leaders on demand',
                desc: 'Fractional CxOs bring experience in product, growth, and operations — guiding critical decisions without the full-time overhead.'
              },
              {
                num: '02',
                title: 'Functional Pods',
                subtitle: 'Specialists who plug right in',
                desc: 'Agile pods across tech, marketing, HR, and legal — built to deliver outcomes, fast and focused.'
              },
              {
                num: '03',
                title: 'Execution Muscle',
                subtitle: 'From strategy to shipped',
                desc: 'Hands-on operators who turn plans into products, campaigns, hires, and real traction.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={comprisesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-10 h-full hover:border-orange-500/50 transition-all duration-500 relative overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-7xl font-black text-white/10 group-hover:text-orange-500/20 transition-colors duration-500">{item.num}</span>
                      <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-6 italic">{item.subtitle}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Stack Section */}
      <section ref={stackRef} className="py-32 md:py-40 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">
              The CORE Stack
            </h2>
            <p className="text-2xl text-gray-900 font-semibold">Four pillars of startup success</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'inSTACK',
                subtitle: 'Product & Technology',
                desc: 'Build, scale, and secure your tech with agile product engineering, cloud, and compliance support tailored for startups.',
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'inSURGE',
                subtitle: 'Marketing & Growth',
                desc: 'From brand positioning to performance campaigns, fuel your visibility and demand to drive sustainable growth.',
                color: 'from-red-500 to-pink-500'
              },
              {
                title: 'inVOLVE',
                subtitle: 'People & Culture',
                desc: 'HR that goes beyond hiring—helping you attract, nurture, and retain talent while shaping resilient company culture.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'inSURE',
                subtitle: 'Legal & Compliance',
                desc: 'Simplify the complex. Robust legal frameworks and compliance services to safeguard your venture at every stage.',
                color: 'from-emerald-500 to-green-500'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={stackInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 p-10 hover:border-orange-500 transition-all duration-500 h-full">
                  <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${item.color} mb-8`}></div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-6">{item.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section ref={journeyRef} className="py-32 md:py-40 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">
              From Idea to Evolution
            </h2>
            <p className="text-2xl text-white font-semibold">Your journey, our expertise at every stage</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { num: '01', stage: 'Idea', desc: 'Validate and refine' },
              { num: '02', stage: 'Build', desc: 'Create MVP' },
              { num: '03', stage: 'Launch', desc: 'Go to market' },
              { num: '04', stage: 'Scale', desc: 'Grow sustainably' },
              { num: '05', stage: 'Evolution', desc: 'Transform and lead' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/10 group-hover:from-orange-500/50 group-hover:to-orange-600/50 mb-4 transition-all duration-300">
                    {item.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">{item.stage}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={casesRef} className="py-32 md:py-40 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={casesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">
              Case Studies
            </h2>
            <p className="text-3xl text-gray-900 font-semibold">Real startups. Real challenges. Real results.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Fintech Startup',
                metric: '100K+',
                label: 'Users in 6 months',
                challenge: 'Needed compliant payment infrastructure',
                solution: 'Built UPI-enabled wallet with RBI compliance',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                title: 'SaaS Platform',
                metric: '300%',
                label: 'Increase in leads',
                challenge: 'Struggled with user acquisition',
                solution: 'Performance marketing and SEO strategy',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Healthcare Tech',
                metric: '15→80',
                label: 'Team scaling',
                challenge: 'Rapid team scaling needed',
                solution: 'End-to-end recruitment and HR setup',
                gradient: 'from-emerald-500 to-green-500'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={casesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group"
              >
                <div className="border-l-4 border-gray-200 pl-8 group-hover:border-orange-500 transition-all duration-300">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} rounded-full mb-6`}>
                    <div className="text-4xl font-black text-white">{item.metric}</div>
                  </div>
                  <div className="text-sm text-gray-500 font-medium mb-6">{item.label}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section ref={insightsRef} className="py-32 md:py-40 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">
              INDsights
            </h2>
            <p className="text-3xl text-gray-900 font-semibold">Lessons from building with founders</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Why Fractional Leadership Works for Early-Stage Startups', 
                category: 'Leadership', 
                readTime: '5 min'
              },
              { 
                title: 'The Hidden Costs of DIY Legal for Founders', 
                category: 'Legal', 
                readTime: '7 min'
              },
              { 
                title: 'Building a Tech Stack That Scales: Lessons from 50+ Startups', 
                category: 'Technology', 
                readTime: '10 min'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={insightsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white border-2 border-gray-200 p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold tracking-wider uppercase rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-32 md:py-40 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Let's Build Together
            </h2>
            <p className="text-xl text-gray-400">Ready to partner with experts in the trenches?</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-3 tracking-wider uppercase">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-3 tracking-wider uppercase">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-3 tracking-wider uppercase">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-3 tracking-wider uppercase">Message</label>
              <textarea
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
                placeholder="Tell us about your startup journey..."
              ></textarea>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="group relative text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden w-full md:w-auto"
                style={{ 
                  background: 'linear-gradient(135deg, #FF681E, #E04A00)',
                  boxShadow: '0 20px 40px rgba(255, 104, 30, 0.3)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start the Conversation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}