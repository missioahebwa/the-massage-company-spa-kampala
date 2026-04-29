import { motion } from 'motion/react';
import { Home, Hotel, Building2, MapPin, Truck } from 'lucide-react';

export default function HomeService() {
  const locations = [
    { name: 'Hotels', icon: <Hotel size={24} /> },
    { name: 'Apartments', icon: <Building2 size={24} /> },
    { name: 'Private Homes', icon: <Home size={24} /> },
    { name: 'Anywhere in Uganda', icon: <Truck size={24} /> },
  ];

  return (
    <section id="mobile-spas" className="py-32 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white/[0.02] skew-x-12 -mr-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Concierge Spa</h2>
            <h3 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              Expert Spa Care, Delivered <br />
              <span className="italic text-gold text-gold-gradient">To Your Doorstep</span>
            </h3>
            <p className="text-lg text-white/40 font-sans font-light mb-12 leading-relaxed max-w-lg">
              Why travel when the sanctuary can come to you? 
              Our mobile spa team services Kampala, Entebbe, and Jinja daily, providing world-class therapy in your private space.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {locations.map((loc) => (
                <div key={loc.name} className="flex items-center gap-5 group">
                  <div className="p-4 glass rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    {loc.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/60">{loc.name}</span>
                </div>
              ))}
            </div>

            <div className="glass p-8 rounded-[2rem] flex items-start gap-6 border-white/5">
              <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-serif text-xl text-white mb-2 tracking-tight">Prime Coverage</p>
                <p className="text-sm text-white/40 font-light">Kampala • Entebbe • Mbale • Mbarara • Jinja • Gulu and across Uganda.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" 
                 alt="Mobile Spa Setup"
                 className="w-full aspect-[4/5] object-cover grayscale-[30%]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
               <div className="absolute bottom-10 left-10 flex items-center gap-3 glass py-3 px-6 rounded-full text-white">
                 <div className="w-2 h-2 bg-gold animate-pulse rounded-full" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Mobile Teams Live</span>
               </div>
            </div>
            {/* Decors */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
