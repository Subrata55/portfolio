import { Github, Linkedin, Twitter, ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#hero" onClick={scrollToTop} className="inline-block text-2xl font-bold font-mono tracking-tighter mb-4 text-gray-900 dark:text-gray-100">
              Subrata.dev
            </a>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-6">
              Backend Developer passionate about building robust, scalable applications and real-world system architectures.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Subrata55" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/subrata-malgope" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-[#0a66c2] transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="mailto:subrata.malgope@example.com" className="p-2.5 rounded-full bg-surface hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-accent-primary transition-all hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-6">Navigate</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects'].map(link => (
                <li key={link}>
                  <a href={`#${link === 'Home' ? 'hero' : link.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-accent-blue transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-6">Capabilities</h4>
            <ul className="space-y-3">
              {['REST APIs', 'Spring Boot', 'Database Design', 'MERN Stack'].map(skill => (
                <li key={skill} className="text-gray-600 dark:text-gray-400 cursor-default text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Subrata Malgope. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-full bg-surface group-hover:bg-white/10 transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
