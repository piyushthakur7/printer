import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from './WhatsAppButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Strength', href: '/strength' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex gap-0.5">
            <div className="w-1.5 h-8 bg-brand-magenta rounded-full group-hover:scale-y-110 transition-transform" />
            <div className="w-1.5 h-8 bg-brand-cyan rounded-full group-hover:scale-y-125 transition-transform delay-75" />
            <div className="w-1.5 h-8 bg-brand-yellow rounded-full group-hover:scale-y-110 transition-transform delay-150" />
            <div className="w-1.5 h-8 bg-brand-black rounded-full group-hover:scale-y-90 transition-transform delay-200" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter uppercase">Modern Offset</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Lasting Impressions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `text-[13px] uppercase tracking-widest font-bold transition-colors relative group ${isActive ? 'text-brand-magenta' : 'hover:text-brand-magenta'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-magenta transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-black text-white px-7 py-2.5 rounded-full text-xs font-bold hover:bg-brand-magenta transition-all duration-500 hover:shadow-lg hover:shadow-brand-magenta/20"
          >
            WHATSAPP US
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col gap-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-black uppercase">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href} 
                className={({ isActive }) => 
                  `text-4xl font-black uppercase tracking-tighter transition-colors ${isActive ? 'text-brand-magenta' : 'hover:text-brand-magenta'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-auto space-y-4">
              <a 
                href={WHATSAPP_LINK}
                className="block bg-[#25D366] text-white px-6 py-5 rounded-2xl text-center font-bold text-lg shadow-xl shadow-[#25D366]/20"
              >
                Chat on WhatsApp
              </a>
              <button className="w-full bg-brand-black text-white px-6 py-5 rounded-2xl text-center font-bold text-lg">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
