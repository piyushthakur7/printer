import React from 'react';
import { motion } from 'motion/react';
import { Building2, Layers, Printer, Package, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaterialShowcase = () => {
  const materials = [
    { name: "350gsm Silk Card", use: "Premium Brochures" },
    { name: "Recycled Kraft", use: "Eco-friendly Packaging" },
    { name: "Polypropylene (PP)", use: "Medical Files & Bags" },
    { name: "U-Coated Synthetic", use: "Outdoor Durable Prints" },
  ];

  return (
    <section className="py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-xl">
            <span className="text-brand-magenta font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Quality Substrates</span>
            <h2 className="text-5xl font-black tracking-tighter mb-6">PREMIUM MATERIALS</h2>
            <p className="text-gray-400 font-medium">We source only the finest paper and polymers to ensure your prints don't just look good, but feel premium.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
            {materials.map((m, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-magenta transition-colors">
                <p className="font-black text-lg mb-1 uppercase tracking-tight">{m.name}</p>
                <p className="text-[10px] uppercase font-bold text-brand-magenta tracking-widest">{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteCTA = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-gray/30 rounded-[4rem] p-16 md:p-32 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-magenta/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10">READY TO BRING YOUR <br /><span className="text-brand-magenta">VISION TO LIFE?</span></h2>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">Get a custom quote within 24 hours. Our technical team is ready to assist with your most complex requirements.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-brand-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-brand-magenta transition-all shadow-xl hover:shadow-brand-magenta/20">
                Get a Custom Quote
              </Link>
              <a href="https://wa.me/919420001700" className="bg-[#25D366] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
                <Printer size={20} />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Hospital PP Files (Non Tearable)", icon: <Building2 />, color: "bg-brand-magenta", desc: "Specialized non-tearable polypropylene storage solutions for patient records and lab reports." },
    { title: "PP X-Ray / MRI Bags", icon: <Layers />, color: "bg-brand-cyan", desc: "Long-lasting, high-quality bags designed for medical film storage and easy handling." },
    { title: "Hospital Files", icon: <Building2 />, color: "bg-brand-yellow", desc: "Durable and organized file solutions tailored for healthcare institutions." },
    { title: "Hospital Stationary", icon: <Printer />, color: "bg-brand-black", desc: "Prescription pads, patient registration files, and essential medical forms." },
    { title: "Pathology Lab Report Paper", icon: <Printer />, color: "bg-brand-magenta", desc: "High-quality, standardized paper for clear and professional lab results." },
    { title: "Stationery", icon: <Printer />, color: "bg-brand-cyan", desc: "Premium letterheads, envelopes, and complete corporate identity kits." },
    { title: "Books", icon: <Package />, color: "bg-brand-yellow", desc: "High-volume publication printing with multiple binding options." },
    { title: "Magazines", icon: <Package />, color: "bg-brand-black", desc: "Vibrant, high-resolution printing for glossy and matte magazine finishes." },
    { title: "Publications", icon: <Package />, color: "bg-brand-magenta", desc: "Comprehensive printing for journals, periodicals, and academic publications." },
    { title: "Flyers", icon: <Globe />, color: "bg-brand-cyan", desc: "Eye-catching promotional flyers for events, marketing, and local reach." },
    { title: "Brochures", icon: <Globe />, color: "bg-brand-yellow", desc: "Multi-fold, high-quality brochures to elegantly showcase your offerings." },
    { title: "Box Packaging", icon: <Package />, color: "bg-brand-black", desc: "Custom structural design and premium printing for industrial and retail products." },
    { title: "Posters", icon: <Globe />, color: "bg-brand-magenta", desc: "Large, vibrant prints that command attention in any physical space." },
    { title: "Large Format Print", icon: <Globe />, color: "bg-brand-cyan", desc: "Impactful banners, architectural wraps, and exhibition graphics." },
    { title: "Promotional Merchandise", icon: <Printer />, color: "bg-brand-yellow", desc: "Diverse promotional collateral that increases brand presence." },
    { title: "Calendars", icon: <Layers />, color: "bg-brand-black", desc: "Custom wall and desk calendars for year-round brand visibility." },
    { title: "Annual Reports", icon: <Layers />, color: "bg-brand-magenta", desc: "Sophisticated data presentation with elegant finishing touches." },
  ];

  return (
    <>
      <section className="py-48 bg-brand-gray/50 min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-brand-magenta font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Expertise</span>
              <h2 className="text-6xl font-black tracking-tighter">PREMIUM SERVICES</h2>
              <h3 className="text-2xl font-black text-brand-cyan uppercase mt-2">EVERYTHING IN PRINTING</h3>
            </div>
            <p className="text-gray-400 max-w-md font-medium">From corporate assignments to specialized medical files, we deliver precision at scale.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 4) * 0.05 }}
                whileHover={{ y: -15 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group border border-brand-gray flex flex-col"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform shadow-lg shrink-0`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="font-black text-lg mb-3 tracking-tight uppercase leading-tight">{service.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <div className="w-8 h-1 bg-brand-gray group-hover:w-full group-hover:bg-brand-magenta transition-all duration-500 mt-auto" />
              </motion.div>
            ))}
          </div>
        <div className="mt-32 border-t border-brand-gray pt-20 text-center">
          <span className="text-brand-magenta font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Industries We Serve</span>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["Hospitals", "Real Estate", "Food", "FMCG", "Manufacturing", "Fashion & Retail", "Jewellery", "Agriculture", "Education"].map((industry, i) => (
              <span key={i} className="text-lg font-black uppercase tracking-widest text-brand-black/40 hover:text-brand-magenta transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
      <MaterialShowcase />
      <QuoteCTA />
    </>
  );
};

export default Services;
