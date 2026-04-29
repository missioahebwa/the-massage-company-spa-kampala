import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Nakato',
    role: 'Local Guide',
    content: 'Best massage experience in Kampala. The team is professional, and the environment is extremely serene. I loved the 24/7 service as I could book a late session after work.',
    rating: 5
  },
  {
    name: 'David Omondi',
    role: 'Traveler',
    content: 'Very convenient mobile service. They came to my hotel in Entebbe and set up everything perfectly. It felt like a high-end spa in my own room.',
    rating: 5
  },
  {
    name: 'Brenda K.',
    role: 'Regular Client',
    content: 'The Deep Tissue massage here is unmatched. They really know how to target the right spots. Highly recommended for anyone looking for quality wellness.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Testimonials</h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif text-white mb-8"
          >
            Client <span className="italic text-gold">Experiences</span>
          </motion.h3>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative group border-white/5"
            >
              <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-gold/20 transition-colors" size={64} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold" fill="currentColor" />
                ))}
              </div>

              <p className="text-lg text-white/60 font-light leading-relaxed mb-8 relative z-10 italic">
                "{review.content}"
              </p>

              <div className="flex flex-col">
                <span className="text-white font-serif text-xl tracking-tight">{review.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold mt-1">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://www.google.com/search?kgmid=/g/11yqcbgn92&q=THE+MASSAGE+COMPANY+%26+SPA+%7C+KAMPALA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            View More On Google Business Profile
          </a>
        </div>
      </div>
    </section>
  );
}
