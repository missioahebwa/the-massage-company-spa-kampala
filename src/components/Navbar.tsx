import { motion } from 'motion/react';
import { Menu, X, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Packages', href: '#packages' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Mobile Spas', href: '#mobile-spas' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex flex-col group">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-gold transition-all duration-300">
                THE MASSAGE COMPANY
              </span>
              <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] text-gold uppercase -mt-1 font-bold">
                & SPA KAMPALA
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] font-sans uppercase tracking-[0.2em] transition-colors duration-200 ${
                  location.hash === link.href ? 'text-gold font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/256762331620?text=Hello%20The%20Massage%20Company%20%26%20Spa%20Kampala%2C%20I%20would%20like%20to%20book%20an%20exclusive%20treat."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden glass-dark"
      >
        <div className="px-4 pt-2 pb-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-xs uppercase tracking-widest font-sans transition-colors ${
                location.hash === link.href ? 'text-gold font-bold' : 'text-white/70 hover:text-gold'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/256762331620?text=Hello%20The%20Massage%20Company%20%26%20Spa%20Kampala%2C%20I%20would%20like%20to%20book%20an%20exclusive%20treat."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center border border-gold text-gold px-6 py-4 rounded-full text-xs font-bold tracking-widest uppercase"
          >
            Book Now
          </a>
          <div className="pt-6 border-t border-white/5 flex flex-col space-y-4 text-[10px] uppercase tracking-widest text-white/40">
             <div className="flex items-center gap-3">
               <Clock size={14} className="text-gold" />
               <span>Open 24hrs</span>
             </div>
             <div className="flex items-center gap-3">
               <MapPin size={14} className="text-gold" />
               <span>Bukoto, Kampala</span>
             </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
