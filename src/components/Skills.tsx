import { motion } from 'motion/react';
import { PenTool, Layout, Layers, Smartphone, Monitor, Code } from 'lucide-react';

const skills = [
  {
    category: 'UI/UX Design',
    icon: <Layout className="text-indigo-400" size={32} />,
    items: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Usability Testing'],
  },
  {
    category: 'Graphic Design',
    icon: <PenTool className="text-purple-400" size={32} />,
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Branding', 'Typography', 'Visual Identity'],
  },
  {
    category: 'Other Tools & Skills',
    icon: <Code className="text-emerald-400" size={32} />,
    items: ['HTML/CSS Basics', 'Webflow', 'Notion', 'Agile Methodology', 'Collaboration'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-900 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3"
          >
            My Skills
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            Tools & Expertise
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-6">{skill.category}</h4>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-zinc-400 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
