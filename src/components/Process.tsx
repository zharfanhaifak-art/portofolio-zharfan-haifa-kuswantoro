import { motion } from 'motion/react';
import { Search, PenTool, Layout, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search size={24} />,
    title: '1. Discover',
    description: 'Understanding the problem, user needs, and business goals through research and analysis.',
  },
  {
    icon: <PenTool size={24} />,
    title: '2. Define',
    description: 'Creating user personas, journey maps, and wireframes to establish the foundation.',
  },
  {
    icon: <Layout size={24} />,
    title: '3. Design',
    description: 'Crafting high-fidelity UI designs, interactive prototypes, and visual assets.',
  },
  {
    icon: <Rocket size={24} />,
    title: '4. Deliver',
    description: 'Testing, iterating, and handing over the final designs to developers.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3"
          >
            My Design Process
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            How I Work
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-zinc-800 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-950 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xl">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-zinc-400 font-light leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
