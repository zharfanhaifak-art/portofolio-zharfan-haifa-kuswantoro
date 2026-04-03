import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ZHAX Apparel Branding',
    category: 'Apparel Design',
    image: '/images/zhax-apparel.png',
    description: 'A bold and modern apparel branding project, focusing on street aesthetics and premium design quality.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Branding'],
    link: '#',
  },
  {
    title: 'HUT RI 80th Celebration Poster',
    category: 'Graphic Design',
    image: '/images/hut-ri-80.png',
    description: 'A vibrant and patriotic poster design for the 80th Independence Day of Indonesia, featuring national elements.',
    tools: ['Adobe Illustrator', 'Graphic Design', 'Typography'],
    link: '#',
  },
  {
    title: 'Color Theory Educational Infographic',
    category: 'Information Design',
    image: '/images/color-theory.png',
    description: 'A clean and educational infographic explaining the fundamentals of color theory, including color wheels and schemes.',
    tools: ['Adobe Illustrator', 'Information Design', 'Educational'],
    link: '#',
  },
  {
    title: '3D Product Visualization - Mug',
    category: '3D Design',
    image: '/images/3d-mug.png',
    description: 'A realistic 3D mockup of a simple ceramic mug, showcasing lighting, textures, and clean product rendering.',
    tools: ['Blender', '3D Modeling', 'Rendering'],
    link: '#',
  },
  {
    title: 'E-Commerce Mobile App',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    description: 'A modern and intuitive e-commerce mobile application designed to enhance the shopping experience.',
    tools: ['Figma', 'Prototyping', 'User Research'],
    link: '#',
  },
  {
    title: 'Fintech Dashboard',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/fintech/800/600',
    description: 'A comprehensive financial dashboard providing users with clear insights into their spending habits.',
    tools: ['Figma', 'Design System', 'Wireframing'],
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-900 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            Selected Works
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors hover:scale-110">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm font-medium text-indigo-400 mb-2">{project.category}</p>
                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
