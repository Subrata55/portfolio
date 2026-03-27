import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import profileImg from '../assets/profile.png';
import cvFile from '../assets/Subrata_CV.pdf';

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(prev => prev.substring(0, prev.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

export default function Hero() {
  const typedText = useTypingEffect(["Full Stack Developer"]);

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-background pointer-events-none overflow-hidden">
        {/* Environment-aware gradient tint */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--hero-grad-start), var(--hero-grad-mid), var(--hero-grad-end))' }}></div>
        {/* Environment-aware dot grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(79,70,229,var(--dot-grid-opacity)) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Indigo Glow - Top Left */}
        <motion.div 
          className="absolute -top-[10%] -left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full opacity-[0.07] dark:opacity-[0.15] blur-[120px] dark:mix-blend-screen"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.8), transparent 70%)' }}
          animate={{ x: ["0%", "5%", "-5%", "0%"], y: ["0%", "-5%", "5%", "0%"], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Cyan Glow - Bottom Right */}
        <motion.div 
          className="absolute bottom-[0%] -right-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full opacity-[0.05] dark:opacity-[0.15] blur-[120px] dark:mix-blend-screen"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.8), transparent 70%)' }}
          animate={{ x: ["0%", "-5%", "5%", "0%"], y: ["0%", "5%", "-5%", "0%"], scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Center purple glow — dark mode only */}
        <motion.div 
          className="absolute top-[30%] left-[40%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full hidden dark:block opacity-[0.08] blur-[120px] mix-blend-screen"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[calc(100vh-80px)]">
        {/* Text Content */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
        >


          <div className="mb-4 relative z-20">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold tracking-tighter leading-tight mb-2 relative">
                <span className="text-[var(--text-primary)] relative z-10 transition-colors duration-300">Subrata Malgope</span>
              </h1>
              
              <div className="h-10 md:h-14 mt-5 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-sm dark:drop-shadow-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo via-accent-blue to-accent-cyan">{typedText}</span>
                  <span className="typing-cursor"></span>
                </h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-xl font-medium tracking-wide max-w-2xl lg:mx-0 mx-auto text-[var(--text-secondary)] transition-colors duration-300"
              >
                I like to build the logic behind applications that people rely on...
              </motion.p>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-12"
          >
              {/* Primary Button — Gradient */}
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}} className="group relative px-8 py-3.5 bg-gradient-to-r from-accent-indigo to-accent-cyan text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.4)]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                      View Projects
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
              </a>
              {/* Secondary Button */}
              <a href={cvFile} download="Subrata_Malgope_CV.pdf" target="_blank" rel="noopener noreferrer" 
                className="px-8 py-3.5 font-bold rounded-full transition-all duration-300 w-full sm:w-auto group relative overflow-hidden flex items-center justify-center gap-2 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--bg-button)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                    Download CV
                  </span>
              </a>
              {/* Tertiary Button */}
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}
                className="px-8 py-3.5 font-bold rounded-full transition-all duration-300 w-full sm:w-auto group border hover:bg-surface"
                style={{
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)'
                }}
              >
                  <span className="group-hover:text-[var(--text-primary)] transition-colors">Contact Me</span>
              </a>
          </motion.div>
        </motion.div>

        {/* Profile Image Column */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end items-center relative"
        >
            <div className="relative group">
                {/* Floating Glows */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent-indigo via-accent-purple to-accent-cyan rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                
                {/* Image Container with Animated Border */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-tr from-accent-indigo via-accent-blue to-accent-cyan shadow-2xl z-20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-background p-1">
                        <img 
                          src={profileImg} 
                          alt="Subrata Malgope" 
                          className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </div>


            </div>
        </motion.div>
      </div>


    </section>
  );
}
