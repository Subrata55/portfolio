import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { X, ExternalLink, Github, Target, Lightbulb, Server, ShieldAlert, BarChart3, Layout, Cpu } from 'lucide-react';
import BrowserFrame from './BrowserFrame';

const CaseStudySection = ({ title, icon, content, delay, variant = "default" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`glass-panel p-8 rounded-3xl border border-white/5 bg-surface dark:bg-[#0a0a14]/60 backdrop-blur-xl hover:border-accent-primary/50 transition-all duration-500 group shadow-2xl ${variant === 'compact' ? 'p-6' : 'p-8'}`}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-accent-primary/10 rounded-2xl text-accent-primary group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent-primary transition-colors">{title}</h3>
    </div>
    {Array.isArray(content) ? (
      <ul className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
        {content.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">{content}</p>
    )}
  </motion.div>
);

export default function ProjectDetails({ project, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-[#f8fafc] dark:bg-[#050508] overflow-y-auto overflow-x-hidden"
      ref={containerRef}
    >
      {/* Background Gradients */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-accent-primary/10 rounded-full blur-[150px] mix-blend-screen opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-accent-purple/10 rounded-full blur-[150px] mix-blend-screen opacity-30 pointer-events-none"></div>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={onClose}
        className="fixed top-6 right-6 z-[60] w-12 h-12 bg-white/50 dark:bg-white/10 backdrop-blur-xl rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-accent-primary/20 hover:scale-110 transition-all shadow-xl"
      >
        <X size={24} />
      </motion.button>

      {/* Hero Header */}
      <div className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h1 layoutId={`title-${project.title}`} className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-blue to-accent-purple tracking-tight">
          {project.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          {project.description}
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        
        {/* Main Grid: Image Left, Top Sections Right (Image 2 Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left: Image with Browser Frame */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-24"
            >
                <BrowserFrame>
                    <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
                </BrowserFrame>
            </motion.div>

            {/* Right: Feature Cards */}
            <div className="space-y-6">
                {project.caseStudy && (
                    <>
                        <CaseStudySection 
                            title="Problem Statement" 
                            icon={<Target />} 
                            content={project.caseStudy.problem} 
                            delay={0.1} 
                        />
                        <CaseStudySection 
                            title="The Approach" 
                            icon={<Lightbulb />} 
                            content={project.caseStudy.approach} 
                            delay={0.2} 
                        />
                    </>
                )}
                
                {/* Visual Flair Cards from reference image */}
                <div className="space-y-6">
                    <CaseStudySection 
                        title="Architecture" 
                        icon={<Server />} 
                        content={project.caseStudy?.architecture} 
                        delay={0.3}
                        variant="compact"
                    />
                    {project.caseStudy?.challenges && (
                        <CaseStudySection 
                            title="Challenges & Solutions" 
                            icon={<ShieldAlert />} 
                            content={project.caseStudy.challenges} 
                            delay={0.4} 
                            variant="compact"
                        />
                    )}
                    {project.caseStudy?.impact && (
                        <CaseStudySection 
                            title="Impact & Results" 
                            icon={<BarChart3 />} 
                            content={project.caseStudy.impact} 
                            delay={0.5} 
                            variant="compact"
                        />
                    )}
                </div>
            </div>
        </div>

        {/* Tech Stack & Links */}
        <div className="glass-panel p-10 rounded-[2.5rem] text-center border-white/5 bg-surface dark:bg-[#0a0a14]/40 backdrop-blur-xl">
           <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Powering the Experience</h3>
           <div className="flex flex-wrap justify-center gap-8 mb-12">
             {project.tech && project.tech.map((tech, index) => (
               <motion.div
                 key={tech}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 whileHover={{ 
                   y: -10,
                   scale: 1.1,
                   boxShadow: "0 20px 40px rgba(79, 70, 229, 0.2)"
                 }}
                 viewport={{ once: true }}
                 transition={{ 
                   type: "spring",
                   stiffness: 300,
                   damping: 15,
                   delay: index * 0.1 
                 }}
                 className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white dark:bg-white/5 border border-white/10 shadow-xl group cursor-default"
               >
                 <span className="text-gray-700 dark:text-[var(--text-secondary)] text-sm font-bold group-hover:text-accent-primary transition-colors text-center px-4">
                   {tech}
                 </span>
                 <motion.div
                   animate={{
                     scale: [1, 1.2, 1],
                     opacity: [0.1, 0.3, 0.1],
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                   className="absolute inset-0 rounded-full bg-accent-primary/10 pointer-events-none"
                 />
               </motion.div>
             ))}
           </div>
           
           <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10 border-t border-white/5">
             {project.github && project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-10 py-4 bg-surface dark:bg-white/5 hover:bg-accent-primary/10 rounded-2xl text-gray-900 dark:text-white font-bold transition-all border border-white/10 hover:border-accent-primary/50">
                  <Github size={22} /> View Source
                </a>
             )}
             {project.live && project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-accent-primary to-accent-blue hover:scale-[1.02] active:scale-95 rounded-2xl text-white font-bold transition-all shadow-xl shadow-accent-primary/20">
                  <ExternalLink size={22} /> Experience Live
                </a>
             )}
           </div>
        </div>
      </div>
    </motion.div>
  );
}
