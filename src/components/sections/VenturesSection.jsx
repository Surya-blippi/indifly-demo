import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BentoCard } from '../common/BentoCard';

export const VenturesSection = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ventures" ref={ref} className="py-32 px-6 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
          
          {/* Our Ventures - Large Card with Description */}
          <BentoCard
            title="Our Ventures"
            subtitle="Learn more about our portfolio brands in the BFSI sector in India."
            colors={["#F59E0B", "#D97706", "#FCD34D"]}
            delay={0.2}
            onClick={() => scrollToSection('ventures')}
            className="md:col-span-2 min-h-[240px] rounded-3xl shadow-xl border border-orange-100/50"
          />

          {/* inCORE Card */}
          <BentoCard
            title="inCORE"
            colors={["#3B82F6", "#1D4ED8", "#60A5FA"]}
            delay={0.4}
            onClick={() => scrollToSection('incore')}
            className="min-h-[240px] rounded-3xl shadow-xl border border-blue-100/50"
            hideExploreText
          />

          {/* INDsights Card */}
          <BentoCard
            title="INDsights"
            colors={["#8B5CF6", "#7C3AED", "#A78BFA"]}
            delay={0.6}
            onClick={() => scrollToSection('incore')}
            className="min-h-[200px] rounded-3xl shadow-xl border border-purple-100/50"
            hideExploreText
          />

          {/* Life at Indifly Card */}
          <BentoCard
            title="Life at Indifly"
            colors={["#DC2626", "#EF4444", "#F87171"]}
            delay={0.8}
            onClick={() => scrollToSection('contact')}
            className="min-h-[200px] rounded-3xl shadow-xl border border-red-100/50"
            hideExploreText
          />

          {/* Let's Talk Card */}
          <BentoCard
            title="Let's Talk"
            colors={["#10B981", "#059669", "#34D399"]}
            delay={1.0}
            onClick={() => scrollToSection('contact')}
            className="min-h-[200px] rounded-3xl shadow-xl border border-green-100/50"
            hideExploreText
          />

        </div>
      </div>
    </section>
  );
};