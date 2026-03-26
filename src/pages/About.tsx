import React from 'react';
import { motion } from 'motion/react';
import { Award, Globe } from 'lucide-react';

const PortfolioSection = () => {
  const images = Array.from({ length: 12 }, (_, i) => `/images/portfolio/${i + 1}.jpg`);

  return (
    <section className="py-32 bg-brand-gray/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-magenta font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Our Work</span>
          <h2 className="text-5xl font-black tracking-tighter mb-6 uppercase">PRINTING PORTFOLIO</h2>
          <div className="w-24 h-1 bg-brand-magenta mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-lg border-4 border-white"
            >
              <img 
                src={img} 
                alt={`Portfolio ${idx + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-black scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Award size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    { title: "Integrity", desc: "Honesty in every contract, transparency in every quote." },
    { title: "Precision", desc: "An obsessive focus on detail from first proof to final print." },
    { title: "Innovation", desc: "Investing in the latest tech to provide cutting-edge solutions." },
    { title: "Sustainability", desc: "Responsible sourcing and eco-friendly printing practices." },
  ];

  return (
    <section className="py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-magenta font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Our Foundation</span>
          <h2 className="text-5xl font-black tracking-tighter mb-6 uppercase">CORE VALUES</h2>
          <div className="w-24 h-1 bg-brand-magenta mx-auto" />
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {values.map((v, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-magenta transition-all duration-500">
                <span className="text-2xl font-black">0{idx + 1}</span>
              </div>
              <h4 className="font-black text-xl mb-4 uppercase tracking-tight">{v.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Infrastructure = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-brand-magenta font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Assets</span>
            <h2 className="text-5xl font-black tracking-tighter mb-10">WORLD-CLASS <br />INFRASTRUCTURE</h2>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Our 15,000 sq. ft. facility is equipped with automated offset presses, high-speed binders, and advanced prepress suites. We maintain a climate-controlled environment to ensure substrate stability and color consistency.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-brand-gray pb-6">
                <div className="w-2 h-2 bg-brand-magenta rounded-full" />
                <span className="font-black uppercase tracking-widest text-sm">4-Color Offset Press Suites</span>
              </div>
              <div className="flex items-center gap-4 border-b border-brand-gray pb-6">
                <div className="w-2 h-2 bg-brand-cyan rounded-full" />
                <span className="font-black uppercase tracking-widest text-sm">Automated Finishing Lines</span>
              </div>
              <div className="flex items-center gap-4 border-b border-brand-gray pb-6">
                <div className="w-2 h-2 bg-brand-yellow rounded-full" />
                <span className="font-black uppercase tracking-widest text-sm">Digital Prototype Lab</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/images/factory-floor.png" alt="Factory floor" className="rounded-[4rem] shadow-2xl" />
            <div className="absolute -bottom-10 -left-10 bg-brand-magenta text-white p-10 rounded-[3rem] shadow-2xl hidden md:block">
              <p className="text-4xl font-black mb-1">15k</p>
              <p className="text-[10px] uppercase font-black tracking-widest opacity-70">Square Feet Facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <>
      <section className="py-48 bg-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  whileInView={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="space-y-6"
                >
                  <img src="/images/about-1.png" className="w-full h-auto rounded-[2.5rem] shadow-2xl" />
                  <div className="bg-brand-cyan/10 h-48 rounded-[2.5rem] border-2 border-brand-cyan/20" />
                </motion.div>
                <motion.div 
                  whileInView={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="space-y-6 pt-20"
                >
                  <div className="bg-brand-magenta/10 h-48 rounded-[2.5rem] border-2 border-brand-magenta/20" />
                  <img src="/images/about-2.png" className="w-full h-auto rounded-[2.5rem] shadow-2xl" />
                </motion.div>
              </div>
            </div>

            <div>
              <div className="w-16 h-1 bg-brand-magenta mb-8" />
              <h2 className="text-5xl font-black mb-10 tracking-tight leading-tight">
                INNOVATIVE PRINTING <br />
                <span className="text-brand-magenta">FOR THE MODERN ERA</span>
              </h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                Modern Offset is a budding state-of-the-art full service printing company that was established in 2001. We focus on the printing needs of educational institutions, the corporate sector, and the general public. Our foundation is built on integrity and honesty, with a singular commitment to delivering quality and detail that results in lasting business relationships.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="group">
                  <div className="w-16 h-16 bg-brand-magenta/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-magenta group-hover:text-white transition-all duration-500">
                    <Award size={32} className="text-brand-magenta group-hover:text-white" />
                  </div>
                  <h3 className="font-black text-xl mb-3 uppercase tracking-tight">Our Mission</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">To provide the best printing services to our clientele by demonstrating responsiveness, diligence, judgments and building on our culture of excellence.</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-brand-cyan/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                    <Globe size={32} className="text-brand-cyan group-hover:text-white" />
                  </div>
                  <h3 className="font-black text-xl mb-3 uppercase tracking-tight">Our Vision</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">Modern Offset strives to be the highest quality printing company in the country and exceeds the expectations of those we partner with by being the best printing service provider.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ValuesSection />
      <PortfolioSection />
      <Infrastructure />
    </>
  );
};

export default About;
