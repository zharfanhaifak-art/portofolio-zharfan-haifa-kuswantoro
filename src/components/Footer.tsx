import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-white mb-2 block">
            Zharfan<span className="text-indigo-500">.</span>
          </a>
          <p className="text-sm text-zinc-500 font-light">
            UI/UX & Junior Graphic Designer
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-zinc-500 font-light">
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Indonesia
          </p>
          <p>&copy; {currentYear} Zharfan Haifa Kuswantoro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
