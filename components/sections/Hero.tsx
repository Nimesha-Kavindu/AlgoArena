import React, { useState } from "react";
import { motion } from "framer-motion";
import Plasma from "../ui/Plasma";
import BlurText from "../ui/BlurText";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  const [startTextGenerate, setStartTextGenerate] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleAnimationComplete = () => {
    console.log("BlurText animation completed!");
    setStartTextGenerate(true);
    // Show buttons after a short delay
    setTimeout(() => setShowButtons(true), 800);
  };

  return (
    <section className="relative min-h-screen overflow-hidden will-change-transform bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 transform-gpu">
        <Plasma
          color="#002EBA"
          speed={0.3}
          direction="forward"
          scale={2.8}
          opacity={0.8}
        />
      </div>

      {/* Content Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center transform-gpu">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center min-h-screen lg:min-h-0">
            
            <div className="text-center max-w-4xl mx-auto">
              <BlurText
                text="ALGOARENA"
                delay={150}
                animateBy="letters"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider mb-4 text-white w-full justify-center"
              />
              
              <TextGenerateEffect
                words="A Journey from Learning to Building"
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-8 lg:mb-10"
                duration={0.6}
                delay={0.15}
                startAnimation={startTextGenerate}
              />

              {/* Buttons with Fade Animation - Registration Disabled */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Primary Button - Disabled Registration */}
                <div 
                  className="px-8 py-4 lg:px-10 lg:py-5 bg-gray-600 text-gray-300 text-lg rounded-xl font-semibold flex items-center justify-center  opacity-60"
                >
                  <span className="flex items-center gap-2">
                    Registration Coming Soon
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                </div>

                {/* Secondary Button - Learn More (Active) */}
                <a 
                  href="#about"
                  className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-transparent border-2 border-[#002EBA] text-white hover:bg-[#002EBA]/10 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center will-change-transform backdrop-blur-sm hover:shadow-lg hover:shadow-[#002EBA]/10"
                >
                  <span className="relative flex items-center gap-2">
                    Learn More
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;