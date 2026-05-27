/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-24 pb-12 px-6 text-slate-500">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-blue-950 font-bold mb-6">SDA Building Services</h4>
          <p className="max-w-xs font-light leading-relaxed">
            Professional Reliability. Every Time. Complete maintenance, restoration, and seasonal campaign strategies for high-end properties in Mississauga and Ontario.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold text-blue-950 mb-6 tracking-wide text-sm uppercase">Services</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#programs" onClick={(e) => onLinkClick(e, 'programs')} className="hover:text-blue-600 transition-colors underline-offset-4 hover:underline">Service Programs</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          {/* Empty column placeholder to maintain grid, or could be removed to stretch others */}
        </div>

        <div className="md:col-span-4">
          <h4 className="font-semibold text-blue-950 mb-6 tracking-wide text-sm uppercase">Newsletter</h4>
          <p className="text-sm font-light mb-4">Stay informed on seasonal maintenance standards and campaign periods.</p>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="property-manager@address.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-slate-300 py-2 text-lg outline-none focus:border-blue-600 transition-colors placeholder-slate-400 text-blue-950 disabled:opacity-50" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start text-xs font-bold uppercase tracking-widest mt-2 hover:text-blue-600 disabled:cursor-default disabled:hover:text-slate-500 disabled:opacity-50 transition-opacity bg-blue-600 text-white px-6 py-2 rounded-full shadow-sm hover:bg-blue-700 hover:shadow-md"
            >
              {subscribeStatus === 'idle' && 'Subscribe'}
              {subscribeStatus === 'loading' && 'Subscribing...'}
              {subscribeStatus === 'success' && 'Subscribed'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>© 2026 SDA Building Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
