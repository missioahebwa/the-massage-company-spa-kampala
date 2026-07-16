import { motion } from 'motion/react';
import { Clock, Users, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'MASSAGE SERVICES',
    items: [
      { name: 'Swedish Massage', price: '100K | 150K', duration: '60 | 120 mins' },
      { name: 'Deep Tissue Therapy', price: '120K | 150K', duration: '60 | 120 mins' },
      { name: 'Signature | Aroma', price: '150K | 180K', duration: '90 | 120 mins' },
      { name: 'Sports | Thai Massage', price: '150K | 200K', duration: '90 | 120 mins' },
      { name: 'Calabash | Warm Towel', price: '150K | 200K', duration: '90 | 150 mins' },
      { name: 'Extra Services Only', price: '200K | 250K', duration: '90 | 120 mins' },
      { name: 'Erotic & B2B Massage', price: '200K | 250K', duration: '90 | 120 mins' },
      { name: 'Xclusive Sessions', price: '300K | 350K', duration: '120 | 150 mins' },
      { name: 'Tantra | Yoni Massage', price: '350K | 400K', duration: '120 | 150 mins' },
    ]
  },
  {
    name: '👥 DUO THERAPIST SESSIONS',
    items: [
      { name: '4 Hands Swedish Massage', price: '250K', duration: '90 mins' },
      { name: '4 Hands Nuru & Erotic', price: '450K', duration: '120 mins' },
      { name: '4 Hands Full Package Service', price: '650K', duration: '150 mins' },
      { name: '4 Hands Tantra Service', price: '750K', duration: '180 mins' },
    ]
  },
  {
    name: '👑 TRIO THERAPIST SESSIONS',
    items: [
      { name: '6 Hands Swedish Massage', price: '300K', duration: '90 | 120 mins' },
      { name: '6 Hands Nuru & Erotic', price: '650K', duration: '90 | 120 mins' },
      { name: '6 Hands Xclusive Session', price: '850K', duration: '120 | 150 mins' },
      { name: '8 Hands Full Package Service', price: '1.20M', duration: '120 | 150 mins' },
    ]
  }
];

export default function PriceList() {
  return (
    <section id="pricing" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-8"
          >
            <Sparkles size={12} fill="currentColor" />
            <span>Investment In Yourself</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tight">Massage Co. & Spa <br/><span className="italic text-gold text-gold-gradient">Price List</span></h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2.5rem] border-white/5 h-full flex flex-col"
            >
              <h3 className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-10 pb-4 border-b border-white/5 flex items-center gap-3">
                {idx === 1 ? <Users size={14} /> : null}
                {category.name}
              </h3>
              
              <div className="space-y-8 flex-grow">
                {category.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <h4 className="text-sm font-sans text-white/80 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">{item.name}</h4>
                      <div className="flex-grow border-b border-dotted border-white/10 mx-2" />
                      <span className="text-gold font-serif text-lg whitespace-nowrap">{item.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-white/30 font-bold tracking-widest uppercase">
                      <Clock size={10} />
                      {item.duration}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a 
                  href="https://wa.me/256762331620?text=Hello%20The%20Massage%20Company%20%26%20Spa%20Kampala%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border border-white/10 hover:border-gold/50 text-[10px] text-white/40 hover:text-gold font-bold uppercase tracking-[0.2em] py-4 rounded-full transition-all bg-white/5"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
