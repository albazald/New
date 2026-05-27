/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import SdaLogo from './SdaLogo';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping, safely ignoring errors in sandboxed environments
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-slate-100">
      
      {/* Modern, Clean Luxury Condominium Background with smooth slow pan animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
            src="/src/assets/images/modern_clean_condo_1779843405268.png" 
            alt="SDA Premium Serviced Modern Condominium Building" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-110 animate-slow-pan brightness-[0.88] contrast-[1.05]"
        />
        {/* Dynamic, clean overlays that guarantee stellar text readability while keeping the building visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/45"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6 max-w-7xl mx-auto w-full">
        <div className="animate-fade-in-up w-full md:max-w-4xl md:mx-auto flex flex-col items-start md:items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white tracking-tight mb-8 drop-shadow-[0_4px_12px_rgba(15,23,42,0.3)] leading-none select-none">
            Spring <span className="text-blue-300 font-normal italic drop-shadow-[0_2px_8px_rgba(28,172,76,0.2)]">Refresh.</span>
          </h1>
          
          <a 
            href="#programs" 
            onClick={(e) => handleNavClick(e, 'programs')}
            className="group relative px-10 py-4 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl inline-block"
          >
            <span className="relative z-10">Explore Scope</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
