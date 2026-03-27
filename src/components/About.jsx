import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Target, Award, Code2, Heart, GraduationCap, Briefcase, Zap, Star, Layout, Database, Box, FileText, AlertTriangle, ArrowRight, Brain, Cpu, X, ChevronRight, ChevronLeft } from 'lucide-react';
import trainingCert from '../assets/training_certificate.png';
import nptelCert from '../assets/nptel_certificate.png';
import tocCert from '../assets/toc_certificate.png';
import ngoCert from '../assets/NGO_certificate.jpg';
import genAiCert from '../assets/gen_ai_certificate.png';
import promptCert from '../assets/prompt_engineering_certificate.png';
import {
     SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import MagneticButton from './MagneticButton';
import schoolLogo from '../assets/school_logo.png';
import collegeLogo from '../assets/college_logo.png';

const skills = {
     languages: [
          { name: "Java", icon: <FaJava className="text-[#007396]" /> },
          { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
          { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
          { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> }
     ],
     frameworks: [
          { name: "Swing", icon: <Layout className="text-[#FF9800]" /> },
          { name: "AWT", icon: <Layout className="text-[#FF9800]" /> },
          { name: "JDBC", icon: <Database className="text-[#4CAF50]" /> }
     ],
     tools: [
          { name: "OOP", icon: <Box className="text-[#9C27B0]" /> },
          { name: "File I/O", icon: <FileText className="text-[#607D8B]" /> },
          { name: "Exception Handling", icon: <AlertTriangle className="text-[#F44336]" /> }
     ]
};

const timeline = [
     {
          title: "B.Tech in Computer Science",
          institution: "Lovely Professional University",
          date: "Aug 2023 - Present",
          description: "Pursuing bachelor's degree in CSE. Current CGPA: 6.97.",
          icon: <GraduationCap size={20} className="text-accent-primary" />,
          logo: collegeLogo
     },
     {
          title: "Intermediate (92%)",
          institution: "Vivekananda Siksha Niketan High School",
          date: "Apr 2020 - Mar 2022",
          description: "Completed higher secondary education with a strong academic foundation.",
          icon: <Target size={20} className="text-purple-400" />,
          logo: schoolLogo
     },
     {
          title: "Matriculation (84%)",
          institution: "Vivekananda Siksha Niketan High School",
          date: "Apr 2019 - Mar 2020",
          description: "Completed primary secondary education, building core foundations.",
          icon: <Award size={20} className="text-green-400" />,
          logo: schoolLogo
     }
];

const certifications = [
     {
          title: "Summer Training – Java Application Development",
          subtitle: "Jun' 25",
          icon: <Award className="text-accent-primary shrink-0 mt-0.5" size={18} />,
          isDetailed: true,
          points: [
             "Completed hands-on training in Java OOP, Swing, JDBC, Exception Handling, and File I/O to strengthen application development skills",
             "Applied SDLC practices and clean coding standards to improve software quality and maintainability",
             "Tech Used: Java, Swing, AWT, JDBC, OOP, File I/O, Exception Handling"
          ],
          color: "accent-primary"
     },
     {
          title: "NPTEL Cloud Computing",
          subtitle: "Completed with Elite Certification",
          icon: <Award size={24} />,
          color: "green"
     },
     {
          title: "Coursera Networks",
          subtitle: "Fundamentals of Network Communication",
          icon: <Star size={24} />,
          color: "purple"
     }
];

const certificateImages = [
    { id: 1, src: trainingCert, title: "Summer Training" },
    { id: 2, src: nptelCert, title: "NPTEL Cloud Computing" },
    { id: 3, src: tocCert, title: "Coursera Networks" },
    { id: 4, src: ngoCert, title: "TOSS NGO Community Volunteer" },
    { id: 5, src: genAiCert, title: "Generative AI" },
    { id: 6, src: promptCert, title: "Prompt Engineering" }
];

const SkillBadge = ({ tech }) => (
     <MagneticButton className="flex items-center justify-center gap-3 px-6 py-3 bg-surface border border-white/5 rounded-full cursor-pointer hover:border-accent-blue/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:text-white text-[var(--text-muted)] transition-all duration-300">
          <span className="text-xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
          <span className="font-semibold">{tech.name}</span>
     </MagneticButton>
);

export default function About() {
     const containerRef = useRef(null);
     const [isGalleryOpen, setIsGalleryOpen] = useState(false);
     const [activeCert, setActiveCert] = useState(0);
     const { scrollYProgress } = useScroll({
          target: containerRef,
          offset: ["start end", "end start"]
     });

     const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

     return (
          <section id="about" className="py-32 relative overflow-hidden" ref={containerRef}>
               <div className="container mx-auto px-6 relative z-10">
                    {/* Header: About Me centered with underline (Image 1 style) */}
                    <div className="text-center mb-24">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-bold mb-4 text-[var(--text-primary)]"
                        >
                            About <span className="text-gradient">Me</span>
                        </motion.h2>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-[4px] bg-gradient-to-r from-accent-indigo via-accent-blue to-accent-cyan mx-auto rounded-full"
                        />
                    </div>

                    {/* Split Content: Text Left, Attributes Right (Image 1/2 Hybrid) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
                         {/* Left: Text Content */}
                         <motion.div
                               initial={{ opacity: 0, x: -50 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               viewport={{ once: true }}
                               transition={{ duration: 0.8 }}
                               className="lg:col-span-7"
                          >
                               <div className="text-[var(--text-secondary)] text-lg md:text-xl font-medium leading-relaxed space-y-6">
                                    <p>
                                         What started as curiosity about how websites work has grown into a deeper pursuit of building systems that power real-world applications.
                                    </p>
                                    <p>
                                         Now a <span className="text-[var(--text-primary)] font-bold border-b-2 border-accent-blue/30">Computer Science student</span> at <span className="text-accent-blue font-bold">Lovely Professional University</span>, I explore full-stack development, backend architecture, and algorithmic problem-solving. I enjoy designing solutions that are not only efficient and scalable, but also clean, maintainable, and built with purpose.
                                    </p>
                                    <p>
                                         I’m driven by the process of turning complex ideas into structured, reliable systems where <span className="text-accent-cyan font-bold">performance meets simplicity</span>.
                                    </p>
                               </div>
                          </motion.div>

                          <motion.div
                               initial={{ opacity: 0, x: 50 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               viewport={{ once: true }}
                               transition={{ duration: 0.8 }}
                               className="lg:col-span-5"
                          >
                             <h3 className="text-[var(--text-muted)] text-xs font-bold tracking-[0.3em] uppercase mb-8 text-center lg:text-left">
                                 Core Attributes
                             </h3>
                             <div className="grid grid-cols-2 gap-4">
                                 {[
                                     { title: "Problem Solving", icon: <Brain size={28} />, color: "accent-purple" },
                                     { title: "Team Collaboration", icon: <Cpu size={28} />, color: "accent-blue" },
                                     { title: "Adaptability", icon: <Target size={28} />, color: "white" },
                                     { title: "Analytical Thinking", icon: <Code2 size={28} />, color: "accent-cyan" }
                                 ].map((item, i) => (
                                     <motion.div 
                                         key={i}
                                         initial={{ opacity: 0, y: 20 }}
                                         whileInView={{ opacity: 1, y: 0 }}
                                         viewport={{ once: true }}
                                         transition={{ delay: i * 0.1 }}
                                         className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:border-accent-primary/50 transition-all duration-500"
                                     >
                                         <div className={`mb-4 p-4 rounded-xl ${item.color === 'white' ? 'bg-white/10 text-white' : `bg-${item.color}/10 text-${item.color}`} group-hover:scale-110 transition-transform duration-500`}>
                                             {item.icon}
                                         </div>
                                         <h4 className="text-sm font-bold text-[var(--text-primary)]">{item.title}</h4>
                                     </motion.div>
                                 ))}
                             </div>
                          </motion.div>
                    </div>

                    {/* 2. Evolution Tracker & 3. Trophy Room Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

                         {/* Evolution Tracker (Timeline) */}
                         <div>
                              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3 text-[var(--text-primary)]">
                                   <Code2 className="text-accent-blue" /> Evolution Tracker
                              </h3>

                              <div className="relative pl-8 md:pl-0">
                                   <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-white/5">
                                        <motion.div
                                             className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-accent-primary via-accent-blue to-accent-purple transform origin-top shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                                             style={{ scaleY: pathLength }}
                                        />
                                   </div>

                                   <div className="space-y-12">
                                        {timeline.map((item, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                                  whileInView={{ opacity: 1, x: 0 }}
                                                  viewport={{ once: true, margin: "-100px" }}
                                                  transition={{ duration: 0.6, type: "spring" }}
                                                  className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                                             >
                                                  <div className="absolute left-[-26px] md:left-1/2 md:-ml-[20px] w-10 h-10 rounded-full bg-white border-4 border-surface z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] overflow-hidden">
                                                        {item.logo ? (
                                                             <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" />
                                                        ) : (
                                                             <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></div>
                                                        )}
                                                  </div>

                                                  <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                                                       <div className="glass-panel p-6 rounded-2xl group hover:border-accent-primary/50 transition-colors duration-500">
                                                            <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                                                 {index % 2 !== 0 && item.icon}
                                                                 <h4 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-accent-primary transition-colors">{item.title}</h4>
                                                                 {index % 2 === 0 && item.icon}
                                                            </div>
                                                            <h5 className="text-accent-blue font-medium mb-1">{item.institution}</h5>
                                                            <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-[var(--text-secondary)] mb-4 border border-white/5">
                                                                 {item.date}
                                                            </span>
                                                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                                                 {item.description}
                                                            </p>
                                                       </div>
                                                  </div>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         {/* Training & Certifications */}
                         <div>
                              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3 text-[var(--text-primary)]">
                                   <Award className="text-yellow-400" /> Training & Certifications
                              </h3>

                              <div className="space-y-4">
                                   {certifications.map((cert, index) => {
                                        if (cert.isDetailed) {
                                             return (
                                                  <motion.div 
                                                       key={index}
                                                       initial={{ opacity: 0, y: 20 }}
                                                       whileInView={{ opacity: 1, y: 0 }}
                                                       viewport={{ once: true }}
                                                       className="glass-panel p-6 md:p-8 rounded-3xl border border-border bg-surface dark:bg-black/20 hover:border-accent-primary/50 transition-colors group mb-6"
                                                  >
                                                       <div className="flex justify-between items-start mb-6">
                                                            <div>
                                                                 <h4 className="text-2xl font-bold text-[var(--text-primary)]">{cert.title}</h4>
                                                                 <p className="text-accent-purple font-medium mt-1">{cert.subtitle}</p>
                                                            </div>
                                                            <button 
                                                                 onClick={() => { setActiveCert(index); setIsGalleryOpen(true); }}
                                                                 className="p-3 rounded-full border border-border bg-white dark:bg-white/5 group-hover:bg-accent-primary/10 group-hover:border-accent-primary group-hover:text-accent-primary transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center cursor-pointer"
                                                            >
                                                                 <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                                            </button>
                                                       </div>
                                                       <ul className="space-y-4">
                                                            {cert.points.map((point, i) => (
                                                                 <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                                                      <ArrowRight size={18} className="text-accent-primary shrink-0 mt-0.5" />
                                                                      <span>{point}</span>
                                                                 </li>
                                                            ))}
                                                       </ul>
                                                  </motion.div>
                                             );
                                        }

                                        return (
                                             <motion.div 
                                                  key={index}
                                                  onClick={() => { setActiveCert(index); setIsGalleryOpen(true); }}
                                                  initial={{ opacity: 0, y: 20 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  viewport={{ once: true }}
                                                  transition={{ delay: index * 0.1 }}
                                                  className={`flex items-center justify-between p-5 glass-panel rounded-2xl border border-border bg-surface dark:bg-black/20 hover:border-${cert.color}-500/50 transition-colors group cursor-pointer`}
                                             >
                                                  <div className="flex items-center gap-4">
                                                       <div className={`p-3 bg-${cert.color}-500/10 rounded-xl text-${cert.color}-500`}>
                                                            {cert.icon}
                                                       </div>
                                                       <div>
                                                            <h4 className={`font-bold text-[var(--text-primary)] transition-colors group-hover:text-${cert.color}-500`}>{cert.title}</h4>
                                                            <p className="text-sm text-[var(--text-secondary)] mt-1">{cert.subtitle}</p>
                                                       </div>
                                                  </div>
                                                  <div className={`p-2.5 rounded-full border border-border bg-white dark:bg-white/5 group-hover:bg-${cert.color}-500/10 group-hover:border-${cert.color}-500 group-hover:text-${cert.color}-500 transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center`}>
                                                       <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                                  </div>
                                             </motion.div>
                                        );
                                   })}

                                   {/* View All Certificates Button */}
                                   <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        onClick={() => setIsGalleryOpen(true)}
                                        className="w-full mt-4 py-4 rounded-2xl border border-accent-indigo/30 bg-accent-indigo/5 hover:bg-accent-indigo/10 text-accent-indigo font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_4px_15px_rgba(79,70,229,0.1)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.2)]"
                                   >
                                        <Award size={20} className="group-hover:scale-110 transition-transform" />
                                        View All Certificates
                                   </motion.button>
                              </div>

                              {/* Beyond Code */}
                              <motion.button
                                   onClick={() => { setActiveCert(3); setIsGalleryOpen(true); }}
                                   initial={{ opacity: 0, scale: 0.95 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   viewport={{ once: true, margin: "-50px" }}
                                   transition={{ duration: 0.8, delay: 0.4 }}
                                   className="mt-8 block w-full text-left"
                              >
                                   <div className="glass-panel p-8 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent relative overflow-hidden group hover:border-orange-500/40 transition-colors">
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
                                        <div className="flex justify-between items-start relative z-10">
                                            <div className="w-full pr-12">
                                                 <div className="flex items-center gap-4 mb-4">
                                                      <div className="p-3 bg-orange-500/10 rounded-xl">
                                                           <Heart className="text-orange-500" size={24} />
                                                      </div>                                                       <h4 className="text-xl font-bold text-[var(--text-primary)]">Beyond Code</h4>
                                                  </div>
                                                  <h5 className="font-bold text-[var(--text-primary)] mb-2 group-hover:text-orange-500 transition-colors">TOSS NGO Community Volunteer</h5>
                                                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                                       Dedicated time and effort towards community development and social welfare programs, reflecting a deep empathetic commitment outside the realm of technology.
                                                  </p>
                                             </div>
                                             <div className="p-2.5 rounded-full border border-border bg-white dark:bg-white/5 group-hover:bg-orange-500/10 group-hover:border-orange-500 group-hover:text-orange-500 transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center shrink-0">
                                                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                            </div>
                                        </div>
                                   </div>
                              </motion.button>

                         </div>
                    </div>
               </div>

               {/* Certificates Gallery Modal */}
               <AnimatePresence>
                    {isGalleryOpen && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-0 md:p-8 bg-black/95 backdrop-blur-3xl overflow-hidden"
                         >
                              {/* Close Button */}
                              <button 
                                   onClick={() => setIsGalleryOpen(false)}
                                   className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110] group"
                              >
                                   <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                              </button>

                              <h3 className="absolute top-8 left-8 text-2xl font-bold text-white z-[110] hidden md:block">
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo to-accent-cyan tracking-wider">My Certificates</span>
                              </h3>

                              <div className="relative w-full h-[70vh] flex items-center justify-center" style={{ perspective: 1200 }}>
                                   {certificateImages.map((cert, i) => {
                                        const isActive = i === activeCert;
                                        let offset = i - activeCert;
                                        
                                        // Handle wrap-around for infinite feeling
                                        if (offset > certificateImages.length / 2) offset -= certificateImages.length;
                                        if (offset < -certificateImages.length / 2) offset += certificateImages.length;
                                        
                                        const absOffset = Math.abs(offset);
                                        const isVisible = absOffset <= 2; 

                                        if (!isVisible) return null;

                                        return (
                                              <motion.div
                                                  key={cert.id}
                                                  initial={false}
                                                  animate={{ 
                                                       opacity: isActive ? 1 : 1 - (absOffset * 0.4),
                                                       scale: isActive ? 1 : 1 - (absOffset * 0.15),
                                                       x: `calc(${offset * 100}% + ${offset * 20}px)`,
                                                       z: isActive ? 0 : -absOffset * 150,
                                                       rotateY: offset * -25
                                                  }}
                                                  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 25 }}
                                                  className={`absolute w-[80%] md:w-[50%] lg:w-[45%] xl:w-[35%] aspect-[1.3/1] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-black/80 flex flex-col items-center justify-center p-3 cursor-pointer ${isActive ? 'cursor-default ring-2 ring-accent-primary' : 'hover:border-accent-primary/50'}`}
                                                  onClick={() => !isActive && setActiveCert(i)}
                                                  style={{ zIndex: 100 - absOffset }}
                                              >
                                                  {isActive && (
                                                       <div className="absolute -inset-4 bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-cyan rounded-3xl opacity-20 blur-2xl -z-10 animate-pulse"></div>
                                                  )}
                                                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background">
                                                       <img 
                                                            src={cert.src} 
                                                            alt={cert.title}
                                                            className="w-full h-full object-contain"
                                                            draggable="false"
                                                       />
                                                  </div>
                                                  
                                                  <motion.div 
                                                       initial={{ opacity: 0, y: 20 }}
                                                       animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                                                       className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-black/80 backdrop-blur-xl rounded-full border border-white/10 text-white font-bold whitespace-nowrap shadow-2xl z-20 pointer-events-none"
                                                  >
                                                       {cert.title}
                                                  </motion.div>
                                              </motion.div>
                                        );
                                   })}
                              </div>

                              {/* Controls */}
                              <button 
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       setActiveCert(prev => (prev === 0 ? certificateImages.length - 1 : prev - 1));
                                   }}
                                   className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 transition-all z-[110] group shadow-xl"
                              >
                                   <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                              </button>
                              
                              <button 
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       setActiveCert(prev => (prev === certificateImages.length - 1 ? 0 : prev + 1));
                                   }}
                                   className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 transition-all z-[110] group shadow-xl"
                              >
                                   <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                              </button>

                              {/* Progress bar */}
                              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-white/10 rounded-full overflow-hidden z-[110] shadow-lg">
                                   <motion.div 
                                       className="h-full bg-gradient-to-r from-accent-indigo to-accent-cyan"
                                       animate={{ width: `${((activeCert + 1) / certificateImages.length) * 100}%` }}
                                       transition={{ duration: 0.3 }}
                                   />
                              </div>

                              {/* Interactive indicators */}
                              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 z-[110]">
                                   {certificateImages.map((_, i) => (
                                        <button
                                             key={i}
                                             onClick={() => setActiveCert(i)}
                                             className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeCert === i ? 'bg-accent-cyan w-6' : 'bg-white/30 hover:bg-white/50'}`}
                                        />
                                   ))}
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </section>
     );
}
