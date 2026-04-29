import { motion } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Spa Treatment"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/80 to-charcoal" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
              <Star size={12} fill="currentColor" />
              <span>Kampala's Premier Wellness Hub</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-white leading-[0.85] mb-8 tracking-[-0.03em]">
              More Of The <br />
              <span className="italic text-gold text-gold-gradient">Exclusive</span> Treats
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 font-sans font-light mb-12 leading-relaxed max-w-xl">
              Unwind with world-class massage and spa treatments. 
              Available 24/7 at our Bukoto sanctuary or wherever you are in Uganda.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://wa.me/256762331620?text=Hello%20The%20Massage%20Company%20%26%20Spa%20Kampala%2C%20I%20would%20like%20to%20book%20an%20exclusive%20treat."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-white text-black px-12 py-5 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
              >
                Book Experience
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="flex items-center justify-center gap-3 glass hover:bg-white/5 text-white px-12 py-5 rounded-full text-xs font-bold tracking-widest uppercase transition-all"
              >
                The Collections
              </a>
            </div>

            <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-12 max-w-2xl">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-serif text-white tracking-tight">24/7</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Always Available</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-serif text-white tracking-tight">Anywhere</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Uganda Service</span>
              </div>
              <div className="flex flex-col gap-2 hidden lg:flex">
                <span className="text-3xl font-serif text-white tracking-tight">5-Star</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Excellence Rated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative pulse element */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="w-32 h-32 rounded-full border border-gold/40 flex items-center justify-center p-4"
        >
          <div className="text-center">
            <span className="block text-[8px] tracking-[0.3em] uppercase text-gold">Excellence</span>
            <span className="block text-2xl font-serif text-white">Since '15</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
