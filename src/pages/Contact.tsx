import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { WHATSAPP_LINK } from '../components/WhatsAppButton';

const FAQSection = () => {
  const faqs = [
    { q: "What is your typical turnaround time?", a: "Most standard printing jobs are completed within 3-5 business days. Bulk orders or specialized hospital files may take 7-10 days." },
    { q: "Do you offer design proofing?", a: "Yes, we provide digital proofs for every job. Physical proofs can also be requested for color-critical assignments." },
    { q: "Can you handle bulk hospital orders?", a: "Absolutely. We specialize in high-volume medical stationery and can produce thousands of records weekly." },
    { q: "What file formats do you accept?", a: "We prefer high-resolution PDF files with bleed, but we also accept AI, PSD, and TIFF formats." },
  ];

  return (
    <section className="py-32 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-magenta font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Help Center</span>
          <h2 className="text-5xl font-black tracking-tighter mb-6">FREQUENTLY ASKED</h2>
          <div className="w-24 h-1 bg-brand-magenta mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-brand-gray shadow-sm">
              <h4 className="font-black text-xl mb-4 tracking-tight uppercase">{faq.q}</h4>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="h-[600px] w-full bg-brand-gray relative grayscale hover:grayscale-0 transition-all duration-1000">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1652433550304!2d73.8327!3d20.0385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAyJzE4LjYiTiA3M8KwNDknNTcuNyJF!5e0!3m2!1sen!2sin!4v1647420000000!5m2!1sen!2sin" 
        className="w-full h-full border-0" 
        allowFullScreen 
        loading="lazy"
      />
      <div className="absolute top-12 left-12 bg-brand-black text-white p-10 rounded-3xl shadow-2xl hidden md:block">
        <h4 className="font-black mb-2 uppercase tracking-tight">Corporate Office</h4>
        <p className="text-xs text-gray-400">Adgaon, Nashik 422003</p>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <>
      <section className="py-48 bg-white min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-brand-magenta font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Get In Touch</span>
            <h2 className="text-7xl font-black tracking-tighter mb-6">CONTACT US</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Have a project in mind? We'd love to hear from you. Reach out via any of the channels below.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-brand-gray/30 p-10 rounded-[2.5rem] border border-brand-gray group hover:border-brand-magenta transition-colors">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-magenta group-hover:bg-brand-magenta group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <h4 className="font-black uppercase tracking-tight mb-3">Our Locations</h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-black uppercase text-brand-magenta tracking-widest block mb-1">Corporate Office</span>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">601, Pranav Orchid, Near Jatra Hotel, Adgaon, Nashik 422003</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-brand-magenta tracking-widest block mb-1">Printing Unit</span>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">1-3, Shubham Heights, Soygaon Market, Satana Naka, Malegaon 423203</p>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-gray/30 p-10 rounded-[2.5rem] border border-brand-gray group hover:border-brand-cyan transition-colors">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <h4 className="font-black uppercase tracking-tight mb-3">Phone Numbers</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">+91 9420001700<br />+91 8668427812</p>
                </div>
                <div className="bg-brand-gray/30 p-10 rounded-[2.5rem] border border-brand-gray group hover:border-brand-yellow transition-colors">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <h4 className="font-black uppercase tracking-tight mb-3">Email Address</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">info@modernoffset.com<br />sales@modernoffset.com</p>
                </div>
                <div className="bg-brand-gray/30 p-10 rounded-[2.5rem] border border-brand-gray group hover:border-[#25D366] transition-colors">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <MessageCircle size={24} />
                  </div>
                  <h4 className="font-black uppercase tracking-tight mb-3">WhatsApp</h4>
                  <a href={WHATSAPP_LINK} className="text-sm text-gray-500 font-medium leading-relaxed hover:text-brand-magenta transition-colors">Chat with us now</a>
                </div>
              </div>

              <div className="bg-brand-black text-white p-12 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-magenta opacity-20 blur-[60px]" />
                <h3 className="text-3xl font-black mb-6 tracking-tight">VISIT OUR FACILITY</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Experience our state-of-the-art machinery and meet our expert team in person. We're open Monday to Saturday, 9 AM to 7 PM.</p>
                <button className="bg-white text-brand-black px-8 py-4 rounded-full font-bold hover:bg-brand-magenta hover:text-white transition-all">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-gray/20 p-12 rounded-[3rem] border border-brand-gray">
              <h3 className="text-3xl font-black mb-10 tracking-tight">SEND A MESSAGE</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-4">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white border border-brand-gray rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-magenta transition-colors font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-4">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white border border-brand-gray rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-magenta transition-colors font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-4">Subject</label>
                  <input type="text" placeholder="Inquiry about Hospital Files" className="w-full bg-white border border-brand-gray rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-magenta transition-colors font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-4">Message</label>
                  <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-white border border-brand-gray rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-magenta transition-colors font-medium resize-none"></textarea>
                </div>
                <button className="w-full bg-brand-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-magenta transition-all shadow-xl hover:shadow-brand-magenta/20 group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
      <MapSection />
    </>
  );
};

export default Contact;
