import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function BookingSection() {
  return (
    <section className="py-32 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center text-white overflow-hidden border border-white/5">
          {/* Subtle backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal-light to-charcoal opacity-50" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl"
          >
            <h2 className="text-4xl md:text-7xl font-serif mb-8 tracking-tight">Experience True <span className="italic text-gold">Serenity</span></h2>
            <p className="text-lg md:text-xl text-white/40 font-sans font-light mb-16 leading-relaxed">
              Ready for your exclusive treat? Whether it's 2 AM or mid-day, our team is ready to serve you in Bukoto or anywhere in Uganda.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href="tel:+256762331620"
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:scale-105 transition-all"
              >
                <Phone size={18} />
                Call To Book
              </a>
              <a 
                href="https://wa.me/256762331620?text=Hello%20The%20Massage%20Company%20%26%20Spa%20Kampala%2C%20I%20would%20like%20to%20book%20an%20exclusive%20treat."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-4 border border-white/10 glass text-white px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
            
            <p className="mt-12 text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
              24/7 Availability • Discreet Service • Professional Excellence
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
