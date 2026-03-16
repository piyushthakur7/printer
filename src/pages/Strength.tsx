import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Clock, Package, Zap, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../components/WhatsAppButton';

const QCSection = () => {
  const points = [
    { title: "Color Management", desc: "Using G7-certified processes to ensure brand-accurate colors every time." },
    { title: "Material Testing", desc: "Stress-testing substrates for durability, especially for medical files." },
    { title: "Final Inspection", desc: "A 5-point manual check of every batch before it leaves our floor." },
    { title: "Waste Reduction", desc: "Optimizing layouts to minimize environmental impact and costs." },
  ];

  return (
    <section className="py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-brand-magenta font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Zero Tolerance</span>
            <h2 className="text-5xl font-black tracking-tighter mb-10 uppercase">QUALITY CONTROL</h2>
            <div className="space-y-8">
              {points.map((p, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-1.5 h-12 bg-brand-magenta shrink-0" />
                  <div>
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tight">{p.title}</h4>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
              <p className="text-6xl font-black text-brand-magenta mb-2">99.8%</p>
              <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40">Client Retention</p>
            </div>
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center pt-24 mt-12">
              <p className="text-6xl font-black text-brand-cyan mb-2">0</p>
              <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40">Defect Tolerance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Strength = () => {
  const strengths = [
    { title: "Quality Printing", desc: "Prints that leave a lasting impression with depth and vibrance.", icon: <CheckCircle2 /> },
    { title: "Best Service", desc: "We believe that good service is the heart of good business.", icon: <Users /> },
    { title: "Quick Delivery", desc: "Speed meets care in every logistical step we take.", icon: <Clock /> },
    { title: "Perfect Packing", desc: "Protecting your products and elevating your brand presentation.", icon: <Package /> },
    { title: "Reasonable Rates", desc: "Premium quality delivered at competitive, transparent prices.", icon: <Zap /> },
  ];

  return (
    <>
      <section className="py-48 bg-white min-h-[80vh] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-brand-magenta font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Why Us</span>
              <h2 className="text-6xl font-black tracking-tighter mb-16">OUR STRENGTH</h2>
              
              <div className="space-y-4">
                {strengths.map((s, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-8 p-6 rounded-3xl hover:bg-brand-gray transition-all duration-500 group border border-transparent hover:border-brand-gray"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-brand-gray flex items-center justify-center text-brand-black group-hover:bg-brand-magenta group-hover:text-white transition-all duration-500 shadow-sm">
                      {React.cloneElement(s.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="font-black text-xl tracking-tight uppercase">{s.title}</h4>
                      <p className="text-sm text-gray-400 font-medium">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-brand-magenta/5 rounded-[2.5rem] border border-brand-magenta/10 flex items-center justify-between">
                <div>
                  <p className="font-black text-lg mb-1 uppercase tracking-tight">Ready to start?</p>
                  <p className="text-sm text-gray-500">Chat with our experts now.</p>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-[#25D366]/20"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-cyan/5 rounded-full blur-[100px]" />
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src="/images/strength.png" 
                  alt="Our professional team" 
                  className="w-full h-auto"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 -right-12 bg-brand-black text-white p-12 rounded-[3.5rem] z-20 max-w-sm shadow-2xl border border-white/10"
              >
                <div className="text-brand-magenta mb-6"><Users size={40} /></div>
                <p className="text-xl font-medium leading-relaxed mb-8 italic">"We look forward for a productive discussion to take your brand to the next level."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-brand-magenta" />
                  <p className="font-black uppercase tracking-widest text-xs">Modern Offset Team</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <QCSection />
    </>
  );
};

export default Strength;
