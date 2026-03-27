import { motion } from 'framer-motion';

export default function BrowserFrame({ children, className = "" }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Browser Header */}
      <div className="bg-[#1a1a24] border-t border-x border-white/10 rounded-t-2xl p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="h-6 bg-white/5 rounded-md border border-white/5 flex items-center px-3">
             <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="relative overflow-hidden border-x border-b border-white/10 rounded-b-2xl shadow-2xl shadow-black/50">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/5 to-transparent pointer-events-none z-10"></div>
        {children}
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/20 to-accent-purple/20 rounded-[1.2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"></div>
    </div>
  );
}
