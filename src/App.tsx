import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages lazy-loaded for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Strength = lazy(() => import('./pages/Strength'));
const Contact = lazy(() => import('./pages/Contact'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Simple Fallback Loader for Suspense
const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-brand-gray border-t-brand-magenta rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="selection:bg-brand-magenta selection:text-white min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/strength" element={<Strength />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        
        {/* Floating Buttons */}
        <WhatsAppButton />
        
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-brand-black text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:bg-brand-magenta transition-all duration-500"
        >
          <ChevronRight className="-rotate-90" />
        </motion.button>
      </div>
    </Router>
  );
}
