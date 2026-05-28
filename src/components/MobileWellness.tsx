import { motion } from 'motion/react';
import { Sparkles, PhoneCall, ShieldCheck, Heart } from 'lucide-react';

const therapistImages = [
  {
    url: 'https://i.postimg.cc/N0w6WT1T/Whats-App-Image-2026-05-04-at-10-01-07.jpg',
    name: 'Elena',
    specialty: 'Swedish & Aromatherapy'
  },
  {
    url: 'https://i.postimg.cc/SKp6w8Wz/Whats-App-Image-2026-05-04-at-10-01-07-(1).jpg',
    name: 'Maya',
    specialty: 'Deep Tissue & Calabash'
  },
  {
    url: 'https://i.postimg.cc/bvjxKbQq/Whats-App-Image-2026-05-04-at-10-01-07-(2).jpg',
    name: 'Chloe',
    specialty: 'Sensual & Tantra'
  },
  {
    url: 'https://i.postimg.cc/1zZGL6px/Whats-App-Image-2026-05-04-at-10-01-07-(3).jpg',
    name: 'Bella',
    specialty: 'Nuru Ritual Specialist'
  },
  {
    url: 'https://i.postimg.cc/jSf6gvJt/Whats-App-Image-2026-05-04-at-10-01-08.jpg',
    name: 'Sophia',
    specialty: 'Warm Towel & Relaxation'
  },
  {
    url: 'https://i.postimg.cc/sgWP6KZr/Whats-App-Image-2026-05-04-at-10-01-08-(1).jpg',
    name: 'Zara',
    specialty: 'Body to Body Therapy'
  },
  {
    url: 'https://i.postimg.cc/13F0CMVJ/Whats-App-Image-2026-05-04-at-10-01-08-(2).jpg',
    name: 'Kiara',
    specialty: 'Elite Duo/Trio Synchrony'
  },
  {
    url: 'https://i.postimg.cc/sDq94bxh/Whats-App-Image-2026-05-04-at-10-01-11.jpg',
    name: 'Layla',
    specialty: 'Luxury Aroma Expert'
  },
  {
    url: 'https://i.postimg.cc/ZK2FxXn5/Whats-App-Image-2026-05-04-at-10-01-11-(1).jpg',
    name: 'Amara',
    specialty: 'Remedial Tissue Specialist'
  },
  {
    url: 'https://i.postimg.cc/ZKCx3JbW/Whats-App-Image-2026-05-04-at-10-01-11-(2).jpg',
    name: 'Mia',
    specialty: 'Classic Swedish Artist'
  },
  {
    url: 'https://i.postimg.cc/59Pm6XMG/Whats-App-Image-2026-05-04-at-10-01-11-(3).jpg',
    name: 'Jasmine',
    specialty: 'Sacred Tantric Rituals'
  },
  {
    url: 'https://i.postimg.cc/D0YQDMgz/Whats-App-Image-2026-05-04-at-10-01-11-(4).jpg',
    name: 'Naomi',
    specialty: 'Exclusive VIP Concierge'
  }
];

export default function MobileWellness() {
  return (
    <section id="mobile-wellness" className="py-24 md:py-32 bg-charcoal-light text-white overflow-hidden relative border-t border-b border-white/5">
      {/* Background graphic touch */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,160,89,0.12)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Collage of overlapping therapist photos exactly like the screenshot */}
          <div className="lg:col-span-6 relative h-[500px] sm:h-[650px] w-full flex items-center justify-center">
            
            {/* Base Container representing the circular/organic positions */}
            <div className="relative w-full h-full max-w-lg mx-auto">
              
              {/* Shape 1: Top circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-[28%] w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden border-4 border-charcoal shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20"
              >
                <img
                  src={therapistImages[0].url}
                  alt={therapistImages[0].name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Shape 2: Left tall squircle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-[12%] left-[8%] w-[120px] h-[180px] sm:w-[170px] sm:h-[240px] rounded-[3.5rem] overflow-hidden border-4 border-charcoal shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10"
              >
                <img
                  src={therapistImages[1].url}
                  alt={therapistImages[1].name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Shape 3: Center squircle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-[32%] left-[34%] w-[130px] h-[100px] sm:w-[180px] sm:h-[130px] rounded-[2.5rem] overflow-hidden border-4 border-charcoal shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-30"
              >
                <img
                  src={therapistImages[2].url}
                  alt={therapistImages[2].name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Shape 4: Far left small circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[48%] left-0 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full overflow-hidden border-4 border-charcoal shadow-[0_15px_35px_rgba(0,0,0,0.8)] z-20"
              >
                <img
                  src={therapistImages[3].url}
                  alt={therapistImages[3].name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Shape 5: Middle right squircle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-[22%] right-[8%] w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] rounded-[2.5rem] overflow-hidden border-3 border-charcoal shadow-[0_20px_45px_rgba(0,0,0,0.8)] z-20"
              >
                <img
                  src={therapistImages[4].url}
                  alt={therapistImages[4].name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Shape 6: Large central bottom capsule */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-[4%] right-[10%] w-[140px] h-[210px] sm:w-[200px] sm:h-[300px] rounded-[4.5rem] overflow-hidden border-4 border-charcoal shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-10"
              >
                <img
                  src={therapistImages[5].url}
                  alt={therapistImages[5].name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Shape 7: Bottom left wide/tall capsule */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="absolute bottom-0 left-[20%] w-[110px] h-[140px] sm:w-[155px] sm:h-[200px] rounded-[3.5rem] overflow-hidden border-4 border-charcoal shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-20"
              >
                <img
                  src={therapistImages[6].url}
                  alt={therapistImages[6].name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

            </div>
          </div>

          {/* RIGHT COLUMN: Luxury message exactly matching screenshot details */}
          <div className="lg:col-span-6 flex flex-col justify-center pl-0 lg:pl-12">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#c5a059] text-[10px] sm:text-xs font-serif font-semibold tracking-[0.4em] uppercase mb-6 block"
            >
              MOBILE WELLNESS
            </motion.span>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-[1.12] mb-8 tracking-tight"
            >
              Luxury <span className="italic text-gold text-gold-gradient font-serif">Brought to</span> <br />
              <span className="italic text-gold text-gold-gradient font-serif font-light">Your</span> Doorstep
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-white/70 font-sans font-light mb-12 leading-relaxed max-w-xl"
            >
              Forget the commute. We transform your home, hotel, or office into a private sanctuary of relaxation. Our expert therapists bring everything needed for a 5-star spa experience.
            </motion.p>

            {/* Perks grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-serif italic text-xl text-gold mb-2 font-medium">Professional</h4>
                <p className="text-xs sm:text-sm text-white/40 font-light">Licensed and experienced therapists only.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-serif italic text-xl text-gold mb-2 font-medium">Convenient</h4>
                <p className="text-xs sm:text-sm text-white/40 font-light">Available 24/7 across Kampala.</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://wa.me/256762331620?text=Hello%20The%20Massage%20Company%20%26%20Spa%20Kampala%2C%20I%20would%20like%20to%20book%20a%20Premium%20Mobile%20Wellness%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal py-4 px-10 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl"
              >
                <Sparkles size={14} />
                Book Mobile Session
              </a>
            </motion.div>
          </div>
        </div>

        {/* EXTRA VALUE ADDITION: "Meet Our Elite Staff" Carousel grid showing ALL 12 images so none are missed! */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h4 className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">OUR SPECIALISTS</h4>
            <h3 className="text-3xl sm:text-4xl font-serif text-white">Meet The Elite Therapist Team</h3>
            <p className="text-white/40 text-xs sm:text-sm font-light mt-2">World-class luxury professionals committed to your absolute rejuvenation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
            {therapistImages.map((therapist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/10 shadow-md group-hover:border-[#c5a059] transition-all duration-300 mb-4 bg-charcoal">
                  <img
                    src={therapist.url}
                    alt={therapist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Heart size={16} className="text-[#e6d5b8] fill-[#c5a059]" />
                  </div>
                </div>
                <h5 className="font-serif text-base sm:text-lg text-white font-medium group-hover:text-[#c5a059] transition-colors">{therapist.name}</h5>
                <span className="text-[10px] font-light text-white/40 uppercase tracking-wider block mt-1 leading-tight">{therapist.specialty}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
