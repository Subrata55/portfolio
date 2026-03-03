import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { X, ExternalLink, Github, ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';
import Tilt from 'react-parallax-tilt';

// Tech Stack Orb Component - Floating in zero gravity
const TechOrb = ({ tech, index }) => {
     const randomDelay = index * 0.2;
     const randomDuration = 3 + (index % 3);

     return (
          <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: randomDuration, repeat: Infinity, ease: "easeInOut", delay: randomDelay }}
          >
               <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1.1}>
                    <motion.div
                         initial={{ opacity: 0, scale: 0 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{
                              delay: 0.8 + (index * 0.1),
                              type: "spring",
                              stiffness: 200,
                              damping: 10
                         }}
                         className="w-28 h-28 rounded-full bg-[#11111a]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:shadow-[0_0_50px_rgba(14,165,233,0.5)] hover:border-accent-blue/50 transition-all duration-300 relative group cursor-pointer"
                    >
                         {/* Orb glowing core */}
                         <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="text-sm font-bold text-gray-300 group-hover:text-white relative z-10 text-center px-4 leading-tight">{tech}</span>
                    </motion.div>
               </Tilt>
          </motion.div>
     );
};

// Feature Card Component - Frosted Glass Sliding Up
const FeatureCard = ({ title, description }) => (
     <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl backdrop-blur-2xl bg-white/5"
     >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -inset-1 rounded-3xl blur-md bg-gradient-to-br from-accent-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

          <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
               {title}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
               {description}
          </p>
     </motion.div>
);

export default function ProjectDetails({ project, onClose }) {
     const containerRef = useRef(null);

     // Lock body scroll when overlay is open
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
               transition={{ duration: 0.5 }}
               className="fixed inset-0 z-50 bg-[#050508] overflow-y-auto overflow-x-hidden"
               ref={containerRef}
          >
               {/* Background Ambience */}
               <div className="fixed inset-0 pointer-events-none -z-20">
                    <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-accent-primary/10 rounded-full blur-[150px] mix-blend-screen opacity-50 animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-accent-blue/10 rounded-full blur-[150px] mix-blend-screen opacity-50"></div>
               </div>

               {/* Close Button */}
               <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={onClose}
                    className="fixed top-8 right-8 z-[60] w-14 h-14 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 shadow-2xl"
               >
                    <X size={24} />
               </motion.button>

               {/* Hero Title Section */}
               <div className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.h1
                         layoutId={`title-${project.title}`}
                         className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter"
                         style={{
                              WebkitTextFillColor: 'transparent',
                              WebkitBackgroundClip: 'text',
                              backgroundImage: 'linear-gradient(to right, #6366f1, #0ea5e9, #8b5cf6)',
                              backgroundSize: '200% auto',
                              animation: 'gradient 5s ease infinite',
                         }}
                    >
                         {project.title}
                    </motion.h1>

                    <motion.p
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.4 }}
                         className="text-xl md:text-3xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed"
                    >
                         {project.description}
                    </motion.p>
               </div>

               {/* Scroll-Jacking Layout */}
               <div className="relative max-w-7xl mx-auto px-6 mt-10 md:mt-20 w-full flex flex-col md:flex-row items-start">

                    {/* Sticky Left Column for Device Mockup */}
                    <div className="md:w-[50%] md:sticky md:top-32 h-auto md:h-[calc(100vh-8rem)] flex items-center justify-center z-20 pb-20 md:pb-0">
                         <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={2000} transitionSpeed={1500} className="w-full">
                              {/* Massive Pulsing Neon Aura */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent-blue/20 rounded-full blur-[120px] -z-10 animate-pulse mix-blend-screen pointer-events-none"></div>

                              {/* Device Mockup */}
                              <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_0_150px_rgba(99,102,241,0.25)] bg-[#11111a] aspect-[16/10] group">
                                   {/* MacBook Camera/Notch area slightly suggested */}
                                   <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-[#1a1a24] border-b border-white/10 flex items-center px-4 gap-2.5 z-10 shadow-lg">
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.6)]"></div>
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.6)]"></div>
                                        <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.6)]"></div>

                                        {/* Fake URL Bar for realism */}
                                        <div className="mx-auto w-1/3 h-4 md:h-6 bg-[#2a2a35] rounded-full border border-white/5"></div>
                                   </div>
                                   <motion.img
                                        layoutId={`image-${project.title}`}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover pt-8 md:pt-12 opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                              </div>
                         </Tilt>
                    </div>

                    {/* Scrolling Right Column for Feature Cards */}
                    <div className="md:w-[50%] md:ml-auto flex flex-col gap-16 md:gap-32 pt-10 pb-32 md:py-32 relative z-30 md:pl-20">
                         <FeatureCard
                              title="Next-Generation Architecture"
                              description="Engineered utilizing an optimal blend of modern frameworks and libraries, guaranteeing exceptional performance and scalability under intense loads."
                         />
                         <FeatureCard
                              title="Immersive User Experience"
                              description="Designed with a ruthless focus on interactivity. Features premium micro-animations, physics-based interactions, and a cinematic visual language."
                         />
                         <FeatureCard
                              title="Real-Time Synchronization"
                              description="Implemented robust data pipelines and cloud architectures to ensure seamless state management across the entire application ecosystem."
                         />
                         <FeatureCard
                              title="Flawless Responsiveness"
                              description="Meticulously crafted to adapt perfectly across all screen sizes and devices, ensuring a consistent and premium experience anywhere."
                         />
                    </div>
               </div>

               {/* Floating 3D Tech Stack Orbs (No background bands) */}
               <div className="py-32 relative overflow-visible z-30 mt-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                         <motion.h2
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-4xl md:text-6xl font-black mb-24 tracking-tight"
                         >
                              Technology <span className="text-gradient">Core</span>
                         </motion.h2>
                         <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                              {project.tech && project.tech.map((tech, index) => (
                                   <TechOrb key={index} tech={tech} index={index} />
                              ))}
                         </div>
                    </div>
               </div>

               {/* The Grand Finale (CTAs) */}
               <div className="min-h-[70vh] flex flex-col items-center justify-center relative py-32 px-6 z-30">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent pointer-events-none"></div>

                    <div className="relative z-20 text-center w-full max-w-5xl">
                         <motion.h2
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8 }}
                              className="text-6xl md:text-8xl lg:text-9xl font-black mb-16 text-white tracking-tighter leading-tight"
                         >
                              Experience it <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-blue animate-pulse pt-2">Live.</span>
                         </motion.h2>

                         <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 mt-12">

                              {/* Animated Sweeping Gradient Glow Button */}
                              {project.live && project.live !== "#" && (
                                   <MagneticButton className="w-full sm:w-auto">
                                        <a
                                             href={project.live}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="relative flex items-center justify-center gap-4 px-12 py-6 rounded-full font-bold text-xl md:text-2xl text-white group overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_80px_rgba(99,102,241,0.8)] transition-all duration-500 hover:scale-105"
                                        >
                                             <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-blue to-accent-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] group-hover:bg-[length:100%_auto] transition-all duration-500"></div>
                                             <div className="absolute inset-[2px] bg-[#0a0a0f] rounded-full z-0 group-hover:bg-opacity-0 transition-all duration-500"></div>
                                             <div className="relative z-10 flex items-center gap-3">
                                                  <ExternalLink size={28} />
                                                  <span>Launch Live Demo</span>
                                             </div>
                                        </a>
                                   </MagneticButton>
                              )}

                              {/* Magnetic Hover Source Code Button */}
                              {project.github && project.github !== "#" && (
                                   <MagneticButton className="w-full sm:w-auto">
                                        <a
                                             href={project.github}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="flex items-center justify-center gap-4 px-12 py-6 bg-white/5 backdrop-blur-2xl rounded-full text-white font-bold text-xl md:text-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-500 group shadow-2xl"
                                        >
                                             <Github size={28} className="group-hover:text-accent-blue transition-colors duration-300" />
                                             <span>View Source Code</span>
                                        </a>
                                   </MagneticButton>
                              )}

                         </div>
                    </div>
               </div>

               {/* Custom CSS for gradient animation inside the mask texts */}
               <style dangerouslySetInnerHTML={{
                    __html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
          </motion.div>
     );
}
