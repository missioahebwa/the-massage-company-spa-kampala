import { motion } from 'motion/react';
import { Leaf, Flower2, Sparkles, Clock, ChevronRight } from 'lucide-react';

const packageCategories = [
  {
    name: 'STANDARD PACKAGES',
    services: [
      {
        title: 'Standard Package',
        description: 'Swedish, Deep Tissue, Aromatherapy. Perfect for relaxation and muscle recovery. Session: Single therapist.',
        duration: '90 mins',
        price: '150K',
        icon: <Leaf className="text-gold" size={32} />,
        image: 'https://goodspaguide--live.s3.amazonaws.com/_AUTOxAUTO_fit_center-center_100_none/868603/Swedish-Massage_2023-12-11-162956_uhoh.webp'
      },
      {
        title: 'Standard Plus Package',
        description: 'Erotic, Nuru, B2B, Signature. Enhanced sensory experience. Session: Single therapist.',
        duration: '90 mins',
        price: '200K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://onthe9spa.com/erotic-massage.jpg'
      }
    ]
  },
  {
    name: 'FULL PACKAGES',
    services: [
      {
        title: 'Basic Full Package',
        description: 'Erotic • Nuru • Extras • Scrubs. Complete rejuvenation. Session: Single therapist. (Best Seller)',
        duration: '120 mins',
        price: '350K',
        icon: <Leaf className="text-gold" size={32} />,
        image: 'https://pragueforadults.com/wp-content/uploads/2015/03/eroticmassage.jpg'
      },
      {
        title: 'Premium Full Package',
        description: 'Nuru, Tantra, Extras, Korean Bath. Luxury deep relaxation. Session: Single therapist.',
        duration: '150 mins',
        price: '400K',
        icon: <Flower2 className="text-gold" size={32} />,
        image: 'https://hegre-black-on-white-girls.com/photo-goro-and-inga-erotic-massage-18/hegre-black-on-white-girls-com-photo-goro-and-inga-erotic-massage-18-content-1600x.jpg'
      }
    ]
  },
  {
    name: 'LUXURY PACKAGES',
    services: [
      {
        title: 'Privée Noir Package',
        description: 'Nuru, Erotic, Extras, Scrubs. Private luxury experience. Session: Duo therapists.',
        duration: '120 mins',
        price: '500K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://photos.xgroovy.com/contents/albums/preview/320x999/340000/340502/preview.jpg'
      },
      {
        title: 'Privée Plus Package',
        description: 'Tantra, Nuru, Extras, Korean Bath. Premium indulgence. Session: Duo therapists. (Best Seller)',
        duration: '120 mins',
        price: '650K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://massagebyhabileny.com/wp-content/uploads/2016/07/4-hands-massage-4.jpg'
      },
      {
        title: 'Royale Treats Package',
        description: 'Erotic, Nuru, Extras, Scrubs. Elite multi-therapist experience. Session: Trio therapists.',
        duration: '120 mins',
        price: '750K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://europeanspa.ae/wp-content/uploads/2025/11/Six-Hands-Massage.webp'
      },
      {
        title: 'Black Lotus Package',
        description: 'Nuru, Tantra, Extras, Korean Bath. Ultimate luxury package. Session: Four therapists.',
        duration: '150 mins',
        price: '900K',
        icon: <Sparkles className="text-gold" size={32} />,
        image: 'https://luxslondon.com/wp-content/uploads/2023/07/sensual-massage-london.jpg'
      }
    ]
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            Curated Experiences
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8"
          >
            Our Exclusive <span className="italic text-gold text-gold-gradient">Packages</span>
          </motion.h3>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto" />
        </div>

        <div className="space-y-32">
          {packageCategories.map((category) => (
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
                        Book This Package
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
