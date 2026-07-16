import { MapPin, Phone, Instagram, Facebook, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="location" className="bg-charcoal pt-32 pb-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <div className="flex flex-col mb-8">
            <span className="text-2xl font-serif font-bold tracking-tight text-white uppercase">
              THE MASSAGE COMPANY
            </span>
            <span className="text-[10px] font-sans tracking-[0.3em] text-gold uppercase -mt-1 font-bold">
              & SPA KAMPALA
            </span>
          </div>
          <p className="text-white/30 text-xs font-light leading-loose mb-8 tracking-wide">
            Your sanctuary for exclusive wellness in the heart of Uganda. Experience premium 24/7 spa services at our Bukoto location or in the comfort of your space.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/massagespakampala" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.google.com/search?kgmid=/g/11yqcbgn92&q=THE+MASSAGE+COMPANY+%26+SPA+%7C+KAMPALA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10 px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-all"
            >
              Review Us
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-gold">The Collections</h4>
          <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
            <li><Link to="/#services" className="hover:text-white transition-colors">Deep Tissue</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">Swedish Relax</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">Aromatherapy</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">Body Scrub</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-gold">The Location</h4>
           <ul className="space-y-6 text-sm font-light">
             <li className="flex items-start gap-4">
               <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
               <span className="text-white/50 leading-relaxed">Dr. Kiremerwa Rd, Bukoto <br />Behind Kabira Country Club</span>
             </li>
             <li className="flex items-center gap-4">
               <Phone size={18} className="text-gold flex-shrink-0" />
               <a href="tel:+256762331620" className="text-white/50 hover:text-white transition-colors tracking-tight">+256 762 331620</a>
             </li>
             <li className="flex items-center gap-4">
               <Mail size={18} className="text-gold flex-shrink-0" />
               <span className="text-white/50 tracking-tight">bookings@themassagecompany.ug</span>
             </li>
           </ul>
        </div>

        <div>
          <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-gold">Concierge</h4>
          <div className="glass border-white/5 p-8 rounded-[2rem]">
             <div className="flex items-center gap-3 mb-4">
               <Clock size={16} className="text-gold" />
               <span className="font-serif text-lg italic text-white tracking-tight">Open 24/7</span>
             </div>
             <p className="text-[11px] text-white/30 leading-relaxed font-light">
               Ready whenever you are. Day or night, we are available for bookings at our venue or your location.
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-bold">
          © 2026 The Massage Company & Spa Kampala.
        </p>
        <p className="text-white/10 text-[9px] uppercase tracking-[0.3em] font-bold">
          More Of The Exclusive Treats.
        </p>
        <a 
          href="https://wa.me/+256747412427" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/20 hover:text-gold text-[9px] uppercase tracking-[0.3em] font-bold transition-colors"
        >
          Designed by ML MEDIA AGENCY
        </a>
      </div>
    </footer>
  );
}
