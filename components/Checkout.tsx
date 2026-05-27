/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
  onClearCart?: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, onClearCart }) => {
  const [submitted, setSubmitted] = useState(false);
  const [propertyName, setPropertyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [buildingType, setBuildingType] = useState('Condominium');
  const [storeys, setStoreys] = useState('');
  const [maintenanceQuarter, setMaintenanceQuarter] = useState('Spring');
  const [inspectionDate, setInspectionDate] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!propertyName || !contactName || !email) {
      alert('Please fill out the Property Name, Contact Name, and Business Email fields.');
      return;
    }
    setSubmitted(true);
    if (onClearCart) {
      // Clear cart on parent side after a successful intake submission
      onClearCart();
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-24 px-6 bg-slate-50 flex items-center justify-center animate-fade-in-up">
        <div className="max-w-xl text-center p-12 bg-white shadow-xl shadow-slate-100 rounded-2xl border border-slate-100 space-y-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif text-blue-950 font-bold">Intake Successfully Submitted</h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Thank you, <strong>{contactName}</strong>. Your {maintenanceQuarter} campaign proposal request for <strong>{propertyName}</strong> ({buildingType}) has been logged in our Operations Center.
          </p>
          <div className="bg-slate-50 p-6 text-left my-6 text-sm border-l-4 border-blue-600 rounded-r-lg space-y-2">
            <p className="text-slate-700"><strong>Property Name:</strong> {propertyName}</p>
            <p className="text-slate-700"><strong>Contact Email:</strong> {email}</p>
            {storeys && <p className="text-slate-700"><strong>Building Scale:</strong> {storeys} Floors</p>}
            <p className="text-slate-700"><strong>Preferred Quarter:</strong> {maintenanceQuarter}</p>
            {inspectionDate && <p className="text-slate-700"><strong>Inspection Assigned:</strong> {inspectionDate}</p>}
            <p className="text-blue-600 font-semibold"><strong>Status:</strong> Pending Operations Officer Assignment</p>
          </div>
          <p className="text-slate-500 text-sm font-light">
            An SDA Building Services Technical Consultant will reach out to schedule your physical structure inspection within 1 business day.
          </p>
          <button 
            onClick={onBack}
            className="px-8 py-3.5 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs rounded shadow hover:bg-blue-700 hover:shadow-md transition-all inline-block"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-slate-50 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-950 transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: B2B Quote Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
            <h1 className="text-3xl font-serif text-blue-950 font-bold mb-4">Proposal Intake Form</h1>
            <p className="text-sm text-slate-500 mb-12">Submit your property characteristics next to compile a formal scope quotation.</p>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-lg font-semibold text-blue-950 mb-6 pb-2 border-b border-slate-100">Manager Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Contact Name *" 
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-650 transition-colors" 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-650 transition-colors" 
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Business Email address *" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-655 transition-colors" 
                  />
                </div>
              </div>

              {/* Section 2: Property Metrics */}
              <div>
                <h2 className="text-lg font-semibold text-blue-950 mb-6 pb-2 border-b border-slate-100">Property Specifications</h2>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Condominium Name or Property Address *" 
                    required
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-656 transition-colors" 
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col border-b border-slate-200">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Building Classification</label>
                      <select 
                        value={buildingType}
                        onChange={(e) => setBuildingType(e.target.value)}
                        className="bg-transparent py-2.5 text-blue-950 font-medium outline-none transition-colors"
                      >
                        <option value="Condominium">Condominium</option>
                        <option value="Commercial High-Rise">Commercial High-Rise</option>
                        <option value="Hotel Property">Hotel Property</option>
                        <option value="Rental Estate">Rental Estate</option>
                        <option value="Corporate/Office Park">Corporate/Office Park</option>
                      </select>
                    </div>
                    
                    <input 
                      type="number" 
                      placeholder="Total Floors / Storeys" 
                      value={storeys}
                      onChange={(e) => setStoreys(e.target.value)}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-657 transition-colors" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex flex-col border-b border-slate-200">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Preferred Maintenance Quarter</label>
                      <select 
                        value={maintenanceQuarter}
                        onChange={(e) => setMaintenanceQuarter(e.target.value)}
                        className="bg-transparent py-2.5 text-blue-950 font-medium outline-none transition-colors"
                      >
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                      </select>
                    </div>

                    <div className="flex flex-col border-b border-slate-200">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Preferred Inspection Date</label>
                      <input 
                        type="date" 
                        value={inspectionDate}
                        onChange={(e) => setInspectionDate(e.target.value)}
                        className="bg-transparent py-2.5 text-blue-950 outline-none transition-colors" 
                      />
                    </div>
                  </div>
                  
                  <textarea 
                    placeholder="Special scheduling constraints, high-access difficulties, or custom property notes..."
                    rows={3}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-250 rounded-lg p-3 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-600 focus:bg-white transition-all mt-4 text-sm font-light resize-none animate-fade-in-up"
                  />
                </div>
              </div>

              <div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg font-bold uppercase tracking-widest text-xs transition-all text-center"
                >
                  Submit Proposal Intake — EST. ${subtotal}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Dynamic Proposal Review */}
          <div className="lg:pl-12 lg:border-l border-slate-200 flex flex-col justify-center">
            <h2 className="text-xl font-serif text-blue-950 font-bold mb-8">Selected Campaign Areas</h2>
            
            <div className="space-y-6 mb-8">
               {items.length === 0 ? (
                 <p className="text-sm font-light text-slate-400 italic">No services selected yet. Go back to explore our campaign packages.</p>
               ) : (
                 items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                       <div className="w-16 h-16 bg-slate-100 rounded border border-slate-100 overflow-hidden relative flex-shrink-0 shadow-sm">
                          <img src={item.imageUrl} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-1">
                          <h3 className="font-serif text-blue-950 font-bold text-base leading-tight">{item.name}</h3>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.category}</p>
                       </div>
                       <span className="text-sm font-semibold text-slate-600">${item.price}</span>
                    </div>
                 ))
               )}
            </div>

            <div className="border-t border-slate-200 pt-6 space-y-4">
              <div className="flex justify-between text-sm text-slate-500 font-medium">
                 <span>Baseline Estimate</span>
                 <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-500 font-medium">
                 <span>Consultation Fee</span>
                 <span className="text-emerald-600 font-bold">$0 (Waived)</span>
              </div>
            </div>
            
            <div className="border-t border-slate-200 mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-blue-950 font-bold">Estimated Subtotal</span>
                 <div className="flex items-end gap-2">
                   <span className="text-[10px] font-bold text-slate-400 mb-1">CAD/USD</span>
                   <span className="font-serif text-2xl text-blue-600 font-extrabold">${subtotal}</span>
                 </div>
               </div>
               <p className="text-[11px] text-slate-400 leading-relaxed mt-4">
                 * Final binding pricing represents actual labor hours, surface areas, and access conditions agreed upon during the on-site technical inspection.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
