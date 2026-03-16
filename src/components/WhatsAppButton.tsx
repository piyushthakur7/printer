import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "919420001700";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-24 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:shadow-[#25D366]/40 transition-shadow group"
  >
    <MessageCircle size={28} fill="currentColor" className="text-white" />
    <span className="absolute right-full mr-4 bg-white text-brand-black px-3 py-1 rounded-lg text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-gray">
      Chat with us
    </span>
  </motion.a>
);

export default WhatsAppButton;
export { WHATSAPP_LINK, WHATSAPP_NUMBER };
