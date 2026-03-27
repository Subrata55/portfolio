import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);

      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (currentScrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 md:px-8 flex justify-center pointer-events-none`}
    >
      <div 
        className={`pointer-events-auto relative w-full container flex flex-col md:flex-row items-center justify-between rounded-3xl md:rounded-[2.5rem] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-white/95 dark:bg-[#050508]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
            : 'bg-white/60 dark:bg-[#050508]/50 backdrop-blur-md'
        }`}
      >
        {/* Gradient Border Overlay perfectly matching the photo */}
        <div className={`absolute inset-0 rounded-3xl md:rounded-[2.5rem] border border-transparent [background:linear-gradient(to_right,rgba(99,102,241,1),rgba(6,182,212,1))_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:destination-out] [mask-composite:exclude] pointer-events-none transition-opacity duration-500 ${isScrolled || isMobileMenuOpen ? 'opacity-100' : 'opacity-30'}`}></div>

        <div className="w-full flex items-center justify-between px-6 md:px-10 h-20 md:h-[88px] relative">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="relative z-10 text-2xl font-bold font-mono tracking-tighter flex items-center gap-2 group shrink-0">
            <span className="text-accent-indigo group-hover:text-accent-cyan transition-colors duration-300">&gt;</span>
            <span className="text-[var(--text-primary)] group-hover:text-accent-indigo transition-colors duration-300">Subrata.dev</span>
            <span className="w-2 h-5 bg-accent-indigo animate-[blink-cursor_0.8s_step-end_infinite]"></span>
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 z-10">
            <ul className="flex items-center gap-2 lg:gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`nav-link text-base font-semibold transition-colors duration-300 px-3 py-2 hover:text-white`}
                      style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-muted)' }}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-2.5 left-3 right-3 h-[2.5px] rounded-t-lg bg-accent-cyan"
                          transition={{ type: "spring", stiffness: 450, damping: 40 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4 relative z-10 shrink-0">
            <motion.button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Theme"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden w-full bg-transparent border-t border-slate-200/20 dark:border-white/10 overflow-hidden relative z-10"
            >
              <ul className="flex flex-col px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block text-xl font-medium transition-colors hover:text-[var(--text-primary)]`}
                      style={{ color: activeSection === link.href.substring(1) ? 'var(--text-primary)' : 'var(--text-muted)' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
