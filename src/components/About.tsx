import { motion } from 'motion/react';
import { User, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 relative">
              {/* Placeholder for actual image */}
              <img
                src="https://picsum.photos/seed/zharfan/800/800?grayscale"
                alt="Zharfan Haifa Kuswantoro"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-400 font-medium">Experience</p>
                  <p className="text-xl font-bold text-white">2+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3">About Me</h2>
              <h3 className="text-4xl font-bold text-white mb-6">Crafting digital experiences with purpose.</h3>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                Hello! I'm Zharfan Haifa Kuswantoro, a passionate UI/UX Designer and Junior Graphic Designer based in Purwakarta, West Java, Indonesia.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mt-4">
                I specialize in creating clean, user-centric interfaces and compelling visual identities. My approach combines analytical thinking with creative problem-solving to deliver designs that not only look beautiful but also function seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
              <div className="flex items-start gap-4">
                <User className="text-indigo-400 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Name</h4>
                  <p className="text-zinc-400 text-sm">Zharfan Haifa Kuswantoro</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-indigo-400 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-zinc-400 text-sm">Purwakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
