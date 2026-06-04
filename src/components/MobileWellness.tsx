import { motion } from 'motion/react';
import { Sparkles, PhoneCall, ShieldCheck, Heart } from 'lucide-react';

const therapistImages = [
  {
    url: 'https://i.postimg.cc/hjvbVqD4/Whats-App-Image-2026-05-31-at-9-22-40-AM-(1).jpg',
    name: 'Precious',
    specialty: 'Lomi Lomi & Royal Touch',
    badge: 'ROYAL WELLNESS',
    desc: 'Gentle rhythmic Hawaiian pressure and soft tissue manipulation tailored for profound cellular rejuvenation and peace of mind.'
  },
  {
    url: 'https://i.postimg.cc/d13mGKsK/Whats-App-Image-2026-05-31-at-9-23-30-AM-(1).jpg',
    name: 'Imani',
    specialty: 'Deep Tissue & Hot Stones',
    badge: 'THERAPEUTIC',
    desc: 'Expert at target tension release utilizing volcanic basalt heat to deeply melt chronic muscular spasms and stiffness.'
  },
  {
    url: 'https://i.postimg.cc/d04j70YP/Whats-App-Image-2026-05-31-at-11-08-51-AM.jpg',
    name: 'Aria',
    specialty: 'Authentic Nuru & Silk Glides',
    badge: 'NURU EXPERT',
    desc: 'Highly skilled in authentic warm gel glides that offer continuous sensory relaxation and total muscular posture alignment.'
  },
  {
    url: 'https://i.postimg.cc/LX5BjM9p/Whats-App-Image-2026-05-31-at-9-23-09-AM.jpg',
    name: 'Kendra',
    specialty: 'Sensory Tantra Healing',
    badge: 'SACRED HEALING',
    desc: 'Deeply restorative rituals centered on slow breathing, touch therapy, and energetic alignment to relieve deep-rooted stress.'
  },
  {
    url: 'https://i.postimg.cc/qRqX2dJk/Whats-App-Image-2026-05-31-at-9-22-41-AM.jpg',
    name: 'Nalia',
    specialty: 'Tension Relief & Bamboo',
    badge: 'STRESS DISCHARGE',
    desc: 'Utilizes warmed bamboo contours and firm pressure for lymphatic drainage, localized recovery, and circulatory lift.'
  },
  {
    url: 'https://i.postimg.cc/4dybpTfx/Whats-App-Image-2026-05-31-at-9-22-40-AM.jpg',
    name: 'Gabriella',
    specialty: 'Aromatherapy & Calm Sleep',
    badge: 'DEEP SLUMBER',
    desc: 'Induces profound neurological peace through customized botanical essence blends and custom-targeted facial-to-sole massage strokes.'
  },
  {
    url: 'https://i.postimg.cc/QtCkcr8L/Whats-App-Image-2026-05-31-at-9-35-09-AM.jpg',
    name: 'Zuri',
    specialty: 'Four-Hands Executive Ritual',
    badge: 'VIP SYNERGY',
    desc: 'Unrivaled expertise in synchronized duet therapies, guiding clients into effortless theta state relaxation and muscular relief.'
  },
  {
    url: 'https://i.postimg.cc/N0w6WT1T/Whats-App-Image-2026-05-04-at-10-01-07.jpg',
    name: 'Elena',
    specialty: 'Swedish & Aromatherapy',
    badge: 'SPA PRIVÉ',
    desc: 'Expert in soothing, customized Swedish strokes integrated with curated essential organic oils for deep, holistic rejuvenation.'
  },
  {
    url: 'https://i.postimg.cc/SKp6w8Wz/Whats-App-Image-2026-05-04-at-10-01-07-(1).jpg',
    name: 'Maya',
    specialty: 'Deep Tissue & Calabash',
    badge: 'DEEP TENSION',
    desc: 'Focuses on deep tissue precision, releasing stubborn knots and muscle spasms using pure Shea butter.'
  },
  {
    url: 'https://i.postimg.cc/bvjxKbQq/Whats-App-Image-2026-05-04-at-10-01-07-(2).jpg',
    name: 'Chloe',
    specialty: 'Sensual & Tantra',
    badge: 'SACRED TANTRA',
    desc: 'Delivers serene, energy-restoring tantra rituals tailored to release anxiety, stress, and promote mental peace.'
  },
  {
    url: 'https://i.postimg.cc/1zZGL6px/Whats-App-Image-2026-05-04-at-10-01-07-(3).jpg',
    name: 'Bella',
    specialty: 'Nuru Ritual Specialist',
    badge: 'NURU COMFORT',
    desc: 'Artistic practitioner specialized in authentic Nuru therapies providing continuous, graceful full-body coverage.'
  },
  {
    url: 'https://i.postimg.cc/jSf6gvJt/Whats-App-Image-2026-05-04-at-10-01-08.jpg',
    name: 'Sophia',
    specialty: 'Warm Towel & Relaxation',
    badge: 'SPA RELAX',
    desc: 'Combines signature slow strokes with therapeutic warm towels to boost cellular detoxification and deep slumber.'
  },
  {
    url: 'https://i.postimg.cc/sgWP6KZr/Whats-App-Image-2026-05-04-at-10-01-08-(1).jpg',
    name: 'Zara',
    specialty: 'Body to Body Therapy',
    badge: 'SENSORY IMMERSION',
    desc: 'A physical restoration experience using specialized gliding techniques to restore muscular posture and flow.'
  },
  {
    url: 'https://i.postimg.cc/13F0CMVJ/Whats-App-Image-2026-05-04-at-10-01-08-(2).jpg',
    name: 'Kiara',
    specialty: 'Elite Duo/Trio Synchrony',
    badge: 'FOUR-HANDS EXPERT',
    desc: 'Specialized in multi-therapist synchrony to create complete sensory disengagement and profound relief.'
  },
  {
    url: 'https://i.postimg.cc/sDq94bxh/Whats-App-Image-2026-05-04-at-10-01-11.jpg',
    name: 'Layla',
    specialty: 'Luxury Aroma Expert',
    badge: 'AROMATHERAPY',
    desc: 'Expert in pure plant extract aroma-therapy, blending tactile touch with olfactory sensory enhancement.'
  },
  {
    url: 'https://i.postimg.cc/ZK2FxXn5/Whats-App-Image-2026-05-04-at-10-01-11-(1).jpg',
    name: 'Amara',
    specialty: 'Remedial Tissue Specialist',
    badge: 'REMEDIAL SPA',
    desc: 'Focuses in musculoskeletal assessment, clinical deep work, and targeted rehabilitation.'
  },
  {
    url: 'https://i.postimg.cc/ZKCx3JbW/Whats-App-Image-2026-05-04-at-10-01-11-(2).jpg',
    name: 'Mia',
    specialty: 'Classic Swedish Artist',
    badge: 'CLASSIC MASSAGE',
    desc: 'Traditional Swedish strokes tailored to promote smooth blood flow and dissolve minor muscle tension.'
  },
  {
    url: 'https://i.postimg.cc/59Pm6XMG/Whats-App-Image-2026-05-04-at-10-01-11-(3).jpg',
    name: 'Jasmine',
    specialty: 'Sacred Tantric Rituals',
    badge: 'SACRED RITUALS',
    desc: 'Calming meditations and slow energy massage targeting total spiritual and mental harmony.'
  },
  {
    url: 'https://i.postimg.cc/D0YQDMgz/Whats-App-Image-2026-05-04-at-10-01-11-(4).jpg',
    name: 'Naomi',
    specialty: 'Exclusive VIP Concierge',
    badge: 'VIP EXECUTIVE',
    desc: 'Premium personalized therapy sessions for exclusive hotel calls, VIP corporate, and high-profile clients.'
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

        {/* OUR THERAPISTS & EXPERIENCE Section: Horizontal swipe slider on mobile, responsive grid on desktop */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h4 className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">OUR SPECIALISTS</h4>
            <h3 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Our Therapists <span className="italic text-gold">&amp; Experience</span>
            </h3>
            <p className="text-white/40 text-xs sm:text-sm font-light mt-3 max-w-xl mx-auto leading-relaxed">
              World-class luxury professionals committed to your absolute physical rejuvenation and spiritual restoration.
            </p>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {/* Slider list - swipeable on mobile, beautiful grids on desktop */}
          <div 
            className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 snap-x snap-mandatory pb-12 px-2 md:px-0 scrollbar-none scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {therapistImages.map((therapist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.05, 0.3) }}
                className="group flex flex-col bg-[#1E1A18] text-white rounded-[2.5rem] border border-white/5 p-4 w-[82vw] sm:w-[340px] md:w-auto shrink-0 snap-center shadow-2xl relative transition-all duration-300 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(197,160,89,0.08)]"
              >
                {/* Rectangular Image aspect ratio 4:5 exactly similar to screenshot block */}
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-charcoal mb-6">
                  <img
                    src={therapist.url}
                    alt={therapist.name}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {therapist.badge}
                  </div>
                </div>

                {/* Content Block */}
                <div className="px-2 pb-2 flex-grow flex flex-col justify-between">
                  <div>
                    <h5 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-gold transition-colors duration-300">
                      Elite Therapist {therapist.name}
                    </h5>
                    <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-sans font-semibold block mt-1.5 mb-3">
                      {therapist.specialty}
                    </span>
                    <p className="text-white/50 text-xs sm:text-sm font-light font-sans leading-relaxed mt-2 line-clamp-3">
                      {therapist.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Authentic Swipe indicator mimicking first/second screenshot indicator layout */}
          <div className="flex md:hidden flex-col items-center justify-center mt-6">
            <span className="text-[9px] font-sans font-semibold tracking-[0.4em] text-gold/60 uppercase mb-3">
              SWIPE TO PREVIEW SETUP
            </span>
            <div className="flex gap-1.5 items-center justify-center">
              <span className="h-[3px] w-8 rounded-full bg-gold/80" />
              <span className="h-[2px] w-4 rounded-full bg-white/20" />
              <span className="h-[2px] w-2 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
