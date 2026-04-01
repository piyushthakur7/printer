import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/30 -z-10" />
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-brand-magenta/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-brand-cyan/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-brand-magenta" />
            <span className="text-brand-magenta font-black tracking-[0.3em] uppercase text-[10px]">
              Est. 2001 • Premium Printing
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl xl:text-[8.5rem] font-black leading-[0.85] mb-10 tracking-tighter">
            MODERN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta via-brand-cyan to-brand-yellow">
              OFFSET
            </span>
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed font-medium">
            State-of-the-art printing solutions where attention is given to every pixel. We don't just print; we create lasting impressions.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/services" className="bg-brand-black text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 group hover:bg-brand-magenta transition-all duration-500 hover:shadow-2xl hover:shadow-brand-magenta/30">
              Explore Services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-brand-black/10 px-10 py-5 rounded-full font-bold hover:border-brand-black transition-all duration-500"
            >
              <MessageCircle size={20} className="text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative lg:pl-12"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
            <img 
              src="/images/hero.png" 
              alt="High-tech printing machinery" 
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-12 left-12 text-white">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-1 bg-brand-magenta" />
                <div className="w-8 h-1 bg-brand-cyan" />
                <div className="w-8 h-1 bg-brand-yellow" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.4em] mb-3 opacity-70">Precision Engineering</p>
              <p className="text-4xl font-black tracking-tight">HI-TECH MACHINERY</p>
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl z-20 hidden xl:block border border-brand-gray"
          >
            <p className="text-5xl font-black text-brand-magenta tracking-tighter">25+</p>
            <p className="text-[9px] uppercase tracking-[0.3em] font-black opacity-40 mt-2">Years of <br />Excellence</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    "Hospitals", "Real Estate", "Food", "FMCG", 
    "Manufacturing", "Fashion & Retail", "Jewellery", 
    "Agriculture", "Education"
  ];

  return (
    <section className="py-32 bg-brand-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-magenta rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-cyan rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-magenta font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Our Reach</span>
          <h2 className="text-5xl font-black tracking-tighter mb-6">INDUSTRIES WE SERVE</h2>
          <div className="w-24 h-1 bg-brand-magenta mx-auto" />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind, idx) => (
            <motion.span 
              key={idx} 
              whileHover={{ scale: 1.05, borderColor: '#E6007E' }}
              className="px-10 py-5 border border-white/10 rounded-3xl text-sm font-black uppercase tracking-widest hover:bg-white/5 transition-all cursor-default backdrop-blur-sm"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Years Experience", value: "25+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Daily Prints", value: "10k+" },
    { label: "Global Reach", value: "15+" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-6xl font-black text-brand-black mb-2 group-hover:text-brand-magenta transition-colors">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedServices = () => {
  const featured = [
    { title: "Commercial Printing", desc: "High-volume brochure and catalog production with specialized finishes.", img: "/images/about-2.png" },
    { title: "Medical Stationery", desc: "Precision hospital files, X-ray bags, and medical record systems.", img: "/images/hero.png" },
    { title: "Packaging Solutions", desc: "Custom box design and high-quality product packaging for retail.", img: "/images/about-1.png" },
  ];

  return (
    <section className="py-32 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-brand-magenta font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">What We Do</span>
            <h2 className="text-5xl font-black tracking-tighter">FEATURED EXPERTISE</h2>
          </div>
          <Link to="/services" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-brand-magenta transition-colors group">
            View All Services <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {featured.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-brand-gray group"
            >
              <div className="h-64 overflow-hidden">
                <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              </div>
              <div className="p-10">
                <h3 className="font-black text-2xl mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "Consultation", desc: "Understanding your brand vision and technical requirements." },
    { title: "Pre-Press", desc: "Precise color correction and layout optimization for scale." },
    { title: "Production", desc: "High-speed offset printing on state-of-the-art machinery." },
    { title: "Quality Check", desc: "Individual inspection of every piece before delivery." },
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-magenta/5 -z-10 rounded-[4rem] scale-110 blur-2xl" />
            <img src="/images/prepress.png" alt="Prepress process" loading="lazy" className="rounded-[4rem] shadow-2xl" />
          </div>
          <div>
            <span className="text-brand-magenta font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Process</span>
            <h2 className="text-5xl font-black tracking-tighter mb-12">HOW WE CREATE <br />EXCELLENCE</h2>
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <span className="text-4xl font-black text-brand-magenta/20 group-hover:text-brand-magenta transition-colors duration-500 italic">0{idx + 1}</span>
                  <div>
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tight">{step.title}</h4>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedServices />
      <ProcessSection />
      <IndustriesSection />
    </>
  );
};

export default Home;
