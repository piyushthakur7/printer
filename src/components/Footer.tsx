import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Globe, Mail } from 'lucide-react';
import { WHATSAPP_LINK } from './WhatsAppButton';

const Footer = () => {
  return (
    <footer className="bg-brand-gray/30 pt-32 pb-12 border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-8 bg-brand-magenta rounded-full" />
                <div className="w-1.5 h-8 bg-brand-cyan rounded-full" />
                <div className="w-1.5 h-8 bg-brand-yellow rounded-full" />
                <div className="w-1.5 h-8 bg-brand-black rounded-full" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter uppercase">Modern Offset</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Lasting Impressions</span>
              </div>
            </div>
            <p className="text-gray-500 max-w-md mb-12 text-lg font-medium leading-relaxed">
              Providing state-of-the-art full service printing solutions since 2001. We take pride in the client relationships that have developed resulting in interdependency and mutual growth.
            </p>
            <div className="flex gap-5">
              <a href={WHATSAPP_LINK} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-[#25D366] hover:text-white transition-all duration-500 group">
                <MessageCircle size={24} />
              </a>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-brand-magenta hover:text-white transition-all duration-500 group">
                <Globe size={24} />
              </div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-brand-cyan hover:text-white transition-all duration-500 group">
                <Mail size={24} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-10 uppercase tracking-[0.3em] text-[10px] text-brand-magenta">Contact Info</h4>
            <ul className="space-y-8 text-sm font-bold text-gray-600">
              <li className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm"><MapPin size={18} className="text-brand-magenta" /></div>
                <span className="leading-relaxed">601, Pranav Orchid, Near Jatra Hotel, Adgaon, Nashik 422003</span>
              </li>
              <li className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm"><Phone size={18} className="text-brand-magenta" /></div>
                <div className="flex flex-col">
                  <span>+91 9420001700</span>
                  <span>+91 8668427812</span>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm"><MessageCircle size={18} className="text-[#25D366]" /></div>
                <a href={WHATSAPP_LINK} className="hover:text-brand-magenta transition-colors">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-10 uppercase tracking-[0.3em] text-[10px] text-brand-magenta">Navigation</h4>
            <ul className="space-y-5 text-sm font-bold text-gray-600 uppercase tracking-widest">
              <li><Link to="/" className="hover:text-brand-magenta transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-magenta transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-magenta transition-colors">Services</Link></li>
              <li><Link to="/strength" className="hover:text-brand-magenta transition-colors">Our Strength</Link></li>
              <li><Link to="/contact" className="hover:text-brand-magenta transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-gray flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
          <p>© 2026 Modern Offset. Crafted for Excellence.</p>
          <div className="flex gap-10">
            <span className="hover:text-brand-magenta cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-magenta cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
