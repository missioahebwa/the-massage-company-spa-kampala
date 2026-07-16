import { motion } from 'motion/react';
import { Heart, Sparkles, Clock, Users } from 'lucide-react';

const couplesPackages = [
  {
    category: 'Relaxation Sessions',
    title: 'Swedish Massage | Aromatherapy',
    price: '250K',
    duration: '90 mins',
    description: 'A soothing and aromatic journey designed for couples to unwind and reconnect in a serene environment.',
    image: 'https://pknpk.com/wp-content/uploads/2019/07/couples-treatments-img.jpg'
  },
  {
    category: 'Body Tissue Sessions',
    title: 'Deep Tissue | Calabash Massage',
    price: '300K',
    duration: '90 mins',
    description: 'Intensive muscle work combined with traditional calabash techniques for deep physical and mental release.',
    image: 'https://images.squarespace-cdn.com/content/v1/5b1aee81b10598865396aae4/1529937624596-ASNUIMEIDOC2PU8P0MY1/Red-Door-Spas-Couples-Massage.jpg'
  },
  {
    category: 'Erotic Sessions',
    title: 'Sensual | Arousal Massage',
    price: '350K',
    duration: '90 mins',
    description: 'An intimate experience focused on sensory awakening and shared pleasure between partners.',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/V6Z3htDsD9MTThm2lwbhsQ/348s.jpg'
  },
  {
    category: 'Nuru | B2B Massage',
    title: 'Body to Body | Tantra Massage',
    price: '450K',
    duration: '120 mins',
    description: 'The ultimate intimate treat involving skin-on-skin contact and tantric techniques for a profound connection.',
    image: 'https://static.wixstatic.com/media/72ff08_79ea93d9b2c7442ab8f0a37a4f6705c6~mv2.jpg/v1/fill/w_568,h_406,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/72ff08_79ea93d9b2c7442ab8f0a37a4f6705c6~mv2.jpg'
  }
];

export default function CouplesPackages() {
  return (
    <section id="couples" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            Romantic Retreats
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8"
          >
            Couples <span className="italic text-gold text-gold-gradient">Packages</span>
          </motion.h3>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto" />
          <p className="mt-8 text-white/40 font-light max-w-2xl mx-auto uppercase tracking-widest text-[10px]">
            The Massage Company & Spa – Price List <br/> More of the Exclusive Treats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {couplesPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass p-3 rounded-[3rem] transition-all duration-500 hover:bg-white/5"
            >
              <div className="relative h-80 overflow-hidden rounded-[2.5rem] mb-8">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 p-4 glass rounded-2xl">
                  <Users className="text-gold" size={24} />
                </div>
                <div className="absolute top-6 right-6 p-4 glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="text-gold fill-gold" size={20} />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="glass-dark px-6 py-3 rounded-full backdrop-blur-md border border-white/5 inline-flex items-center gap-3">
                      <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">{pkg.category}</span>
                   </div>
                </div>
              </div>
              
              <div className="px-8 pb-10">
                <h4 className="text-3xl font-serif text-white mb-4 tracking-tight">{pkg.title}</h4>
                <p className="text-sm text-white/40 mb-8 font-light leading-relaxed min-h-[4rem]">{pkg.description}</p>
                
                <div className="flex justify-between items-center mb-10 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-white/20" />
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">{pkg.duration}</span>
                  </div>
                  <span className="text-gold font-serif text-2xl tracking-tight">{pkg.price}</span>
                </div>

                <a 
                  href={`https://wa.me/256762331620?text=Hello%20The%20Massage%20Company%20%26%20Spa%20Kampala%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20Couples%20Treat.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-white/10 hover:border-gold/50 text-[10px] text-white/40 hover:text-gold font-bold uppercase tracking-[0.2em] py-4 rounded-full transition-all bg-white/5 group-hover:border-gold/30"
                >
                  Book Experience
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
