import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useConfig } from '../lib/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const config = useConfig();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Services', path: '/#projects' },
    { name: 'FAQ', path: '/#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm">
      <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-black text-zinc-900 leading-none tracking-tight uppercase">
            {config.business.name}
          </span>
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mt-1 ml-0.5">
            Legacy Builders
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-display font-medium text-sm uppercase tracking-wider transition-all duration-300 pb-1 border-b-2 ${
                location.pathname === link.path.split('#')[0] 
                ? 'text-primary border-primary' 
                : 'text-zinc-600 border-transparent hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/#contact"
            className="bg-primary text-white px-6 py-3 font-display font-bold text-sm uppercase tracking-widest active:scale-95 transform transition-transform shadow-md text-center inline-block"
          >
            Book Free Consultation
          </Link>
        </div>

        <button 
          className="md:hidden text-zinc-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-display font-medium text-zinc-600 uppercase tracking-wider text-sm"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white px-6 py-4 font-display font-bold text-center uppercase tracking-widest"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
