import { motion } from 'motion/react';
import { Waves, Leaf, Thermometer, Flower2, Sparkles, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'CORE SERVICES',
    services: [
      {
        title: 'Swedish Massage',
        description: 'Gentle, rhythmic strokes to improve circulation and melt away everyday stress.',
        duration: '90/120 mins',
        price: '150K',
        icon: <Waves className="text-gold" size={32} />,
        image: 'https://www.vivadayspa.com/wp-content/uploads/2019/08/Viva_Day_Spa_10_GA_170411_638-1_2000x635.jpg'
      },
      {
        title: 'Deep Tissue Therapy',
        description: 'Perfect for chronic aches and pains. We target deep layers of muscle and connective tissue.',
        duration: '90/120 mins',
        price: '150K',
        icon: <Thermometer className="text-gold" size={32} />,
        image: 'https://assets.zeel.com/media/locations/inset/generic/location-right-4.jpg'
      },
      {
        title: 'Signature | Aroma',
        description: 'Our bespoke blend of essential oils and specialized touch for ultimate harmony.',
        duration: '90/120 mins',
        price: '180K',
        icon: <Flower2 className="text-gold" size={32} />,
        image: 'https://sensuosity.co.uk/wp-content/uploads/2022/11/tantric-bg.jpg'
      },
      {
        title: 'Calabash | Warm Towel',
        description: 'An ancient healing ritual using heated calabashes and soothing warm towels.',
        duration: '90/150 mins',
        price: '150K',
        icon: <Leaf className="text-gold" size={32} />,
        image: 'https://images.squarespace-cdn.com/content/v1/6508135e5f377273e4a9a2a8/1695980828672-YJHNVUD4HAKZV5JMS65Y/Hot+Towel+Massage.jpg'
      },
      {
        title: 'Body to Body Massage',
        description: 'Maximum skin contact for a profound sense of connection and relaxation.',
        duration: '90/120 mins',
        price: '200K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_600,h_400/https://www.czech-massage.cz/wp-content/uploads/2022/10/tantra-massage.jpg'
      },
      {
        title: 'Xclusive | Full Package',
        description: 'A comprehensive session featuring our most sought-after private experiences.',
        duration: '120/150 mins',
        price: '300K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://www.bodyline.net.au/wp-content/uploads/2018/01/lingerie-massage1.jpg'
      }
    ]
  },
  {
    name: 'ADVANCED THERAPIES',
    services: [
      {
        title: 'Tantra | Yoni Massage',
        description: 'A sacred meditative ritual focusing on energy flow and profound relaxation.',
        duration: '120/150 mins',
        price: '350K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://images.squarespace-cdn.com/content/v1/5982014c15d5dbb465d66ff5/1728913739294-4KOW2NFTQWG28A4OZRR5/shutterstock_2497508865.jpg'
      },
      {
        title: '4 Hands Nuru & Erotic',
        description: 'The ultimate sensual duet. Two therapists, one profound experience.',
        duration: '120 mins',
        price: '450K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://photos.xgroovy.com/contents/albums/sources/340000/340502/337620.jpg'
      },
      {
        title: '6 Hands Xclusive (Premium)',
        description: 'A masterclass in sensory luxury with three experts in synchronization.',
        duration: '120 mins',
        price: '650K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://cosmosmassage.pl/wp-content/uploads/2025/10/Lingam-masaz-masazystki-w-salonie-Cosmos-scaled.webp'
      },
      {
        title: '6 Hands Xclusive (Elite)',
        description: 'The pinnacle of synchronization, delivering an unparalleled ritual of bliss.',
        duration: '120/150 mins',
        price: '900K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://www.budapestmassage.com/files/uploads/erotic-massage-futon.jpg'
      },
      {
        title: '8 Hands Full Package',
        description: 'Extreme luxury. Four therapists working as one for the ultimate full ritual.',
        duration: '120/150 mins',
        price: '1.20M',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://hegre-black-on-white-girls.com/photo-goro-and-inga-erotic-massage-22/hegre-black-on-white-girls-com-photo-goro-and-inga-erotic-massage-22-content-1600x.jpg'
      }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            A La Carte
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8"
          >
            Specialized <span className="italic text-gold text-gold-gradient">Services</span>
          </motion.h3>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto" />
        </div>

        <div className="space-y-32">
          {categories.map((category) => (
            <div key={category.name} className="relative">
              <div className="flex items-center gap-8 mb-16">
                <h4 className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">{category.name}</h4>
                <div className="w-full h-[1px] bg-white/5" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group glass p-2 rounded-3xl transition-all duration-500 hover:bg-white/5"
                  >
                    <div className="relative h-64 overflow-hidden rounded-[1.25rem] mb-8">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 p-3 glass rounded-xl">
                        {service.icon}
                      </div>
                    </div>
                    <div className="px-6 pb-8">
                      <h4 className="text-2xl font-serif text-white mb-3 tracking-tight">{service.title}</h4>
                      <p className="text-sm text-white/40 mb-6 font-light leading-relaxed min-h-[4rem]">{service.description}</p>
                      <div className="flex justify-between items-center mb-6 pt-6 border-t border-white/5">
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">{service.duration}</span>
                        <span className="text-gold font-serif text-lg tracking-tight">{service.price}</span>
                      </div>
                      <a 
                        href={`https://wa.me/256762331620?text=Hello%20The%20Massage%20Company%20%26%20Spa%20Kampala%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(service.title)}%20treat.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center border border-white/10 hover:border-gold/50 text-[10px] text-white/40 hover:text-gold font-bold uppercase tracking-[0.2em] py-3 rounded-full transition-all"
                      >
                        Book This Treatment
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
