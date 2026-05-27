import React, { useState } from 'react';
import { Product } from '../types';

const SPRING_REFRESH_SCOPE = [
  {
    area: 'Exterior & Hardscape',
    image: '/images/sda_exterior_wash_1779840623753.png',
    services: [
      'Windows Cleaning (Heights/High-rise)',
      'Landscaping & Leaf Removal',
      'Garage Powerwashing',
    ]
  },
  {
    area: 'Floors & Common Areas',
    image: '/images/sda_floor_care_1779840641574.png',
    services: [
      'Carpet Cleaning (Deep extraction)',
      'Floor Scrubbing (Mechanical)',
      'Strip and Wax Floors',
      'Floor Finishing (Polishing & Buffing)',
    ]
  },
  {
    area: 'Specialized Facilities',
    image: '/images/sda_facilities_sanitize_1779840656309.png',
    services: [
      'Changerooms (Deep scrubbing & disinfection)',
      'Pool Areas (Deck scrubbing & tile cleaning)',
      'High Dusting (Chandeliers, ducts, etc.)',
      'Garbage Chute & Duct Cleaning',
    ]
  },
  {
    area: 'Units & Technical',
    image: '/images/sda_technical_upkeep_1779840670329.png',
    services: [
      'Unit & Balcony Cleaning',
      'Content Removal (Lockers/Garages)',
      'Painting, Plumbing, and Electrical jobs',
    ]
  }
];

const SPRING_ROADMAP = [
  {
    week: 'Week 1',
    title: 'Exterior Restoration',
    tasks: [
      { name: 'Garage Powerwashing', desc: 'Removal of winter salts, sand, and oil.' },
      { name: 'Window Cleaning', desc: 'Specialized height access cleaning for all facades.' },
      { name: 'Landscaping', desc: 'Perimeter leaf removal and garden debris cleanup.' },
    ]
  },
  {
    week: 'Week 2',
    title: 'Facilities & Amenities',
    tasks: [
      { name: 'Changerooms & Pool Areas', desc: 'Mechanical floor scrub and high-grade disinfection.' },
      { name: 'Garbage Chute Cleaning', desc: 'Sanitizing and deodorizing the entire system.' },
      { name: 'Balcony Cleaning', desc: 'Removing exterior soot and winter buildup from units.' },
    ]
  },
  {
    week: 'Week 3',
    title: 'Deep Interior Cleaning',
    tasks: [
      { name: 'High Dusting', desc: 'Cleaning chandeliers and architectural details.' },
      { name: 'Carpet Cleaning', desc: 'Steam extraction for hallways and lobbies.' },
      { name: 'Content Removal', desc: 'Clearing abandoned items in lockers and common areas.' },
    ]
  },
  {
    week: 'Week 4',
    title: 'Final Finishes & Technical Maintenance',
    tasks: [
      { name: 'Floor Scrubbing, Strip & Wax', desc: 'Final protective coating for all hard floors.' },
      { name: 'Painting & Repairs', desc: 'Wall touch-ups, plumbing checks, and electrical maintenance.' },
    ]
  }
];

const ANNUAL_CARE_PHASES = [
  {
    phase: 'PHASE 1: SPRING REFRESH',
    months: 'April - May',
    desc: 'Post-winter restoration focusing on exterior façades, garage salt removal, landscaping, and window clarity.',
  },
  {
    phase: 'PHASE 2: MID-YEAR MAINTENANCE',
    months: 'July - August',
    desc: 'Deep interior sanitation including amenities, changerooms, pool decks, and high-traffic common area restoration.',
  },
  {
    phase: 'PHASE 3: WINTER READINESS',
    months: 'November',
    desc: 'Surface fortification (Strip & Wax), professional winter mat installation, and technical winterization of systems.',
  }
];

const ANNUAL_CATALOG = [
  {
    category: 'Flooring Excellence',
    services: 'Deep Carpet Cleaning (Steam), Mechanical Floor Scrubbing, Strip & Wax, and Professional Floor Finishing.',
  },
  {
    category: 'High-Access & Glass',
    services: 'Window Cleaning (Heights), High Dusting (Chandeliers, Vents, Decorative Fixtures).',
  },
  {
    category: 'Exterior & Structure',
    services: 'Garage Powerwashing, Landscaping, Leaf Removal, and Balcony Cleaning.',
  },
  {
    category: 'Specialized Sanitation',
    services: 'Garbage Chute Disinfection, Changeroom Deep Cleaning, and Pool Area Scrubbing.',
  },
  {
    category: 'Technical Trades',
    services: 'Painting Touch-ups, Plumbing Preventive Checks, Electrical Maintenance, and Content/Junk Removal.',
  },
  {
    category: 'Winter Safety',
    services: 'Strategic Winter Mat Installation and Non-slip floor treatments.',
  }
];

interface ProgramsProps {
  onAddToCart: (product: Product) => void;
}

const Programs: React.FC<ProgramsProps> = ({ onAddToCart }) => {
  const handleAddSpringToCart = () => {
    onAddToCart({
      id: 'plan-spring-refresh',
      name: 'Spring Refresh Program',
      tagline: 'Complete Maintenance & Restoration',
      description: 'Comprehensive 4-week program for post-winter building restoration.',
      price: 2500, // Example placeholder price
      category: 'Packages',
      imageUrl: '/images/sda_exterior_wash_1779840623753.png',
      features: ['Exterior Restoration', 'Facilities & Amenities', 'Deep Interior Cleaning', 'Final Finishes']
    });
  };

  const handleAddAnnualToCart = () => {
    onAddToCart({
      id: 'plan-annual-care',
      name: 'Annual Facility Care Plan 2026',
      tagline: 'Comprehensive 3-Phase Asset Preservation',
      description: 'A strategic partnership to preserve the structural integrity and market value of your property.',
      price: 12000, // Example placeholder price
      category: 'Packages',
      imageUrl: '/images/modern_clean_condo_1779843405268.png',
      features: ['Budget Predictability', 'Strategic Sequencing', 'Risk Mitigation']
    });
  };

  return (
    <section id="programs" className="py-24 bg-slate-50 relative overflow-hidden text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Service Programs</span>
          <h2 className="text-4xl md:text-5xl font-serif text-blue-950 font-bold max-w-3xl">Comprehensive Maintenance Plans</h2>
          <p className="max-w-2xl text-slate-600 font-medium text-lg leading-relaxed">
            Professional reliability for premium properties. Review our core programs below.
          </p>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
            <div id="spring-refresh" className="pt-8 mb-32 group">
              {/* PDF Title Header */}
              <div className="bg-blue-900 border border-blue-800/60 rounded-3xl p-10 md:p-16 mb-12 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent"></div>
                <div className="relative z-10 max-w-3xl">
                  <h3 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight mb-4 tracking-tight">SDA PREMIUM SPRING REFRESH PROGRAM</h3>
                  <p className="text-blue-200 text-lg md:text-xl font-medium tracking-wide">Complete Maintenance & Restoration for Condominiums & Commercial Properties</p>
                </div>
              </div>

              {/* Scope Table Wrapper */}
              <div className="mb-20">
                <h4 className="text-2xl font-serif font-bold text-blue-950 mb-6 flex items-center border-b border-slate-300 pb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-extrabold tracking-widest uppercase mr-4">1</span>
                  Program Scope
                </h4>
                <p className="text-slate-600 mb-8 font-medium">Our comprehensive program integrates high-level cleaning with technical maintenance to ensure your property transitions seamlessly into the new season.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SPRING_REFRESH_SCOPE.map((scope, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden w-full">
                        <img src={scope.image} alt={scope.area} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-6">
                        <div className="text-blue-700 mb-4 flex items-center min-h-[3rem]">
                          <h5 className="font-bold text-lg leading-tight">{scope.area}</h5>
                        </div>
                        <ul className="space-y-3">
                          {scope.services.map((svc, j) => (
                            <li key={j} className="text-slate-600 text-sm flex items-start">
                              <span className="text-blue-500 mr-3 font-bold">•</span>
                              <span className="leading-snug">{svc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roadmap Timeline */}
              <div className="mb-12">
                <h4 className="text-2xl font-serif font-bold text-blue-950 mb-10 flex items-center border-b border-slate-300 pb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-extrabold tracking-widest uppercase mr-4">2</span>
                  4-Week Implementation Roadmap
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SPRING_ROADMAP.map((week, i) => (
                    <div key={i} className="bg-white border-l-4 border-blue-600 rounded-r-2xl p-8 shadow-sm border-y border-r border-slate-200">
                      <span className="text-xs font-black tracking-widest text-blue-500 uppercase block mb-1">{week.week}</span>
                      <h5 className="text-xl font-serif font-bold text-slate-800 mb-5">{week.title}</h5>
                      <ul className="space-y-4">
                        {week.tasks.map((task, j) => (
                          <li key={j} className="text-sm">
                            <strong className="text-slate-900 block font-semibold mb-0.5">{task.name}:</strong>
                            <span className="text-slate-500">{task.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center border-t border-slate-200 pt-10">
                <button
                  onClick={handleAddSpringToCart}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-widest uppercase text-sm py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Request Spring Refresh
                </button>
              </div>

            </div>

            <div id="annual-plan" className="pt-24 mt-8">
              {/* Header Title Box */}
              <div className="bg-blue-950 border border-blue-900/60 rounded-3xl p-10 md:p-16 mb-12 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <h3 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight mb-4 tracking-tight">SDA BUILDING SERVICES<br/><span className="text-blue-300 font-medium font-sans mt-2 block text-2xl md:text-3xl">Annual Facility Care Plan 2026</span></h3>
                  <p className="text-blue-200 text-sm md:text-base font-bold tracking-[0.2em] uppercase border-t border-blue-800/50 pt-6 mt-6 max-w-2xl mx-auto inline-block">Comprehensive 3-Phase Asset Preservation Plan</p>
                </div>
              </div>

              {/* The Strategy and Value */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-blue-950 mb-4 border-b-2 border-blue-600 pb-2 inline-block">The Annual Strategy</h4>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    Our <strong>Annual Facility Care Plan</strong> moves beyond reactive maintenance. It is a strategic partnership designed to preserve the aesthetic appeal, structural integrity, and market value of your property through a 3-phase execution roadmap.
                  </p>
                  <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl text-slate-700 italic shadow-sm">
                    "By integrating seasonal requirements into a single master schedule, we ensure your building is perpetually clean, safe, and protected against the specific environmental stressors of the Canadian climate."
                  </blockquote>
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-blue-950 mb-4 border-b-2 border-blue-600 pb-2 inline-block">The Value of Proactive Partnership</h4>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1 font-black leading-none">•</span>
                      <p className="text-slate-600 text-base leading-relaxed"><strong className="text-slate-900">Budget Predictability:</strong> Fixed annual costs allow for precise financial planning.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1 font-black leading-none">•</span>
                      <p className="text-slate-600 text-base leading-relaxed"><strong className="text-slate-900">Strategic Sequencing:</strong> Services are scheduled so that Phase 1 prepares the surface for Phase 2, maximizing the lifespan of all finishes.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1 font-black leading-none">•</span>
                      <p className="text-slate-600 text-base leading-relaxed"><strong className="text-slate-900">Risk Mitigation:</strong> Regular technical inspections (Plumbing/Electrical) identify minor issues before they become emergency expenses.</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phases */}
              <div className="mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ANNUAL_CARE_PHASES.map((phase, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-start hover:-translate-y-1 transition-transform">
                      <span className="text-xs font-bold tracking-widest text-blue-600 mb-2 uppercase block">{phase.months}</span>
                      <h5 className="font-serif font-bold text-xl text-slate-800 mb-4 leading-snug">{phase.phase}</h5>
                      <p className="text-slate-600 text-sm">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Catalog Formatted like Table */}
              <div className="mb-12">
                <h4 className="text-2xl font-serif font-bold text-blue-950 border-b-2 border-blue-600 pb-2 inline-block mb-8">Consolidated Service Catalog</h4>
                
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 bg-blue-950 text-white p-6 tracking-wide font-bold uppercase text-sm">
                    <div className="md:col-span-1">Category</div>
                    <div className="md:col-span-2">Included Services</div>
                  </div>
                  {ANNUAL_CATALOG.map((item, i) => (
                    <div key={i} className={`grid grid-cols-1 md:grid-cols-3 p-6 ${i !== ANNUAL_CATALOG.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}>
                      <div className="md:col-span-1 font-bold text-blue-900 mb-2 md:mb-0 pr-4">{item.category}</div>
                      <div className="md:col-span-2 text-slate-600 text-sm leading-relaxed">{item.services}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outro */}
              <div className="bg-slate-100 rounded-2xl p-8 md:p-12 text-center mb-10 border border-slate-200">
                <h4 className="text-xl md:text-2xl font-serif font-bold text-blue-900 mb-4">Customized Site Implementation</h4>
                <p className="text-slate-600 max-w-3xl mx-auto mb-8 font-medium">
                  Every property has unique requirements. SDA Building Services will conduct a comprehensive site audit to tailor the frequencies and specific technical requirements of this 3-phase plan to your facility's footprint.
                </p>
                <div className="bg-blue-950 text-white rounded-xl p-6 inline-block shadow-lg">
                  <h5 className="text-xl font-bold mb-1">SDA Building Services</h5>
                  <p className="text-blue-300 text-sm tracking-wide">Professional Reliability. Every Time.</p>
                </div>
              </div>

              <div className="flex justify-center border-t border-slate-200 pt-10">
                <button
                  onClick={handleAddAnnualToCart}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-widest uppercase text-sm py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Request Annual Plan
                </button>
              </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;
