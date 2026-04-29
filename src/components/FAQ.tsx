import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What are your opening hours?',
    answer: 'We are open 24 hours a day, 7 days a week. We understand that your wellness needs don\'t always follow a schedule, so we are always here for you.'
  },
  {
    question: 'Where exactly is The Massage Company located?',
    answer: 'Our main sanctuary is located on Dr. Kiremerwa Rd in Bukoto, right behind Kabira Country Club in Kampala, Uganda.'
  },
  {
    question: 'Do you offer services outside of Kampala?',
    answer: 'Yes! We provide mobile spa services across Uganda, including Entebbe, Jinja, and other major districts. We can set up in your home, hotel room, or apartment.'
  },
  {
    question: 'How do I book an exclusive treat?',
    answer: 'You can book by calling us directly at our hotline, sending a WhatsApp message, or using the booking form on this website. For late-night sessions, we recommend calling for faster confirmation.'
  },
  {
    question: 'Can you handle group bookings?',
    answer: 'Absolutely. We specialize in group spa days for corporate events, bridal parties, and family gatherings, both at our Bukoto location and mobile.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Inquiry</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Frequently Asked <span className="italic text-gold">Questions</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass rounded-3xl overflow-hidden border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-serif text-xl text-white font-light tracking-tight">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-gold" size={18} />
                ) : (
                  <Plus className="text-gold" size={18} />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 text-white/40 font-sans font-light leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
