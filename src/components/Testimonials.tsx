import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechFlow',
    image: 'https://picsum.photos/seed/sarah/100/100',
    quote: 'Zharfan has an incredible eye for detail. His UI designs completely transformed our app, making it not only beautiful but significantly easier to use.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder of StartupX',
    image: 'https://picsum.photos/seed/michael/100/100',
    quote: 'Working with Zharfan was a breeze. He understood our brand vision perfectly and delivered a stunning visual identity that exceeded our expectations.',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director',
    image: 'https://picsum.photos/seed/emily/100/100',
    quote: 'A talented designer who truly cares about the user experience. His wireframes and prototypes were instrumental in our successful product launch.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3"
          >
            Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            What People Say
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative group hover:border-indigo-500/50 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-zinc-800 group-hover:text-indigo-500/20 transition-colors" size={48} />
              
              <p className="text-zinc-400 font-light leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800 group-hover:border-indigo-500 transition-colors"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
