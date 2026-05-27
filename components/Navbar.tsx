/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';
import SdaLogo from './SdaLogo';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  // Determine text color based on state
  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-blue-950 font-bold' : 'text-white font-medium';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-md border-b border-slate-100' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); // Pass empty string to just reset to home
            }}
            className="z-50 relative block transition-transform duration-300 hover:scale-105 select-none"
          >
            <div className="flex items-center">
              <SdaLogo className="h-8 md:h-10" showSlogan={false} theme={scrolled || mobileMenuOpen ? 'dark' : 'light'} />
            </div>
          </a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-12 text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="#spring-refresh" onClick={(e) => handleLinkClick(e, 'spring-refresh')} className="hover:text-blue-500 transition-colors">Spring Refresh</a>
            <a href="#annual-plan" onClick={(e) => handleLinkClick(e, 'annual-plan')} className="hover:text-blue-500 transition-colors">Annual Plan</a>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            <button 
              onClick={handleCartClick}
              className={`relative p-3 rounded-full transition-all duration-300 shadow-sm hover:scale-105 ${
                scrolled || mobileMenuOpen 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md' 
                  : 'bg-white text-blue-950 hover:bg-slate-50 hover:text-blue-600 hover:shadow-md border border-slate-100'
              }`}
              aria-label="Toggle Cart"
            >
              <ShoppingCart className="w-5 h-5 flex-shrink-0" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-transform duration-350 scale-100 hover:scale-110">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-xl font-serif font-bold text-blue-950">
            <a href="#spring-refresh" onClick={(e) => handleLinkClick(e, 'spring-refresh')} className="hover:text-blue-600 transition-colors">Spring Refresh</a>
            <a href="#annual-plan" onClick={(e) => handleLinkClick(e, 'annual-plan')} className="hover:text-blue-600 transition-colors">Annual Plan</a>
            <button 
                onClick={handleCartClick} 
                className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-xs uppercase tracking-widest font-bold mt-8"
            >
                Quote Cart ({cartCount})
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
