import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { Target, Award, Code2, Heart, GraduationCap, Briefcase, Zap, Star, Layout, Database, Box, FileText, AlertTriangle } from 'lucide-react';
import {
     SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

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

const softSkills = ["Problem-Solving", "Analytical Thinking", "Adaptability", "Team Collaboration"];

const timeline = [
     {
          title: "B.Tech in Computer Science",
          institution: "Lovely Professional University",
          date: "Aug 2023 - Present",
          description: "Pursuing bachelor's degree in CSE. Current CGPA: 6.97.",
          icon: <GraduationCap size={20} className="text-accent-primary" />
     },
     {
          title: "Summer Training – Java",
          institution: "LPU",
          date: "Jun 2025 - Jul 2025",
          description: "Focus: Java OOP, Swing, JDBC, Event-Driven Programming. Built multiple GUI applications.",
          icon: <Code2 size={20} className="text-accent-blue" />
     },
     {
          title: "Intermediate (92%)",
          institution: "Vivekananda Siksha Niketan High School",
          date: "Apr 2020 - Mar 2022",
          description: "Completed higher secondary education with a strong academic foundation.",
          icon: <Target size={20} className="text-purple-400" />
     },
     {
          title: "Matriculation (84%)",
          institution: "Vivekananda Siksha Niketan High School",
          date: "Apr 2019 - Mar 2020",
          description: "Completed primary secondary education, building core foundations.",
          icon: <Award size={20} className="text-green-400" />
     }
];

const achievements = [
     {
          title: "Top 1000 Rank",
          subtitle: "LeetCode Weekly Contest 473 (Among 27k+)",
          span: "col-span-1 md:col-span-2 row-span-1",
          color: "from-yellow-400/20 to-orange-500/20",
          border: "group-hover:border-yellow-500/50",
          icon: <Award size={24} className="text-yellow-400" />
     },
     {
          title: "Top 10%",
          subtitle: "Binary Blitz (Coding Ninjas)",
          span: "col-span-1 row-span-1",
          color: "from-blue-400/20 to-cyan-500/20",
          border: "group-hover:border-blue-500/50",
          icon: <Zap size={24} className="text-cyan-400" />
     },
     {
          title: "Cloud Computing",
          subtitle: "NPTEL Certification (Oct '25)",
          span: "col-span-1 row-span-2",
          color: "from-purple-400/20 to-pink-500/20",
          border: "group-hover:border-purple-500/50",
          icon: <Star size={24} className="text-purple-400" />
     },
     {
          title: "Java App Dev",
          subtitle: "LPU Certification (Jul '25)",
          span: "col-span-1 row-span-1",
          color: "from-accent-primary/20 to-accent-blue/20",
          border: "group-hover:border-accent-primary/50",
          icon: <Briefcase size={24} className="text-accent-primary" />
     }
];

const SkillBadge = ({ tech }) => (
     <MagneticButton className="flex items-center justify-center gap-3 px-6 py-3 bg-surface border border-white/5 rounded-full cursor-pointer hover:border-accent-blue/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:text-white text-gray-400 transition-all duration-300">
          <span className="text-xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
          <span className="font-semibold">{tech.name}</span>
     </MagneticButton>
);

const SoftSkillBadge = ({ skill, index }) => (
     <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
               y: [0, -10, 0],
               boxShadow: ["0 0 0px rgba(139,92,246,0)", "0 0 20px rgba(139,92,246,0.3)", "0 0 0px rgba(139,92,246,0)"]
          }}
          transition={{
               opacity: { duration: 0.5, delay: index * 0.1 },
               y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
               boxShadow: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="px-5 py-2.5 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-medium backdrop-blur-sm"
     >
          {skill}
     </motion.div>
);

export default function About() {
     const containerRef = useRef(null);
     const { scrollYProgress } = useScroll({
          target: containerRef,
          offset: ["start end", "end start"]
     });

     const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

     return (
          <section id="about" className="py-32 relative overflow-hidden" ref={containerRef}>
               <div className="container mx-auto px-6 relative z-10">

                    {/* Section Title */}
                    <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8 }}
                         className="text-center mb-24"
                    >
                         <h2 className="text-4xl md:text-5xl font-bold mb-4">
                              About & <span className="text-gradient">Experience</span>
                         </h2>
                         <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                              My technical arsenal, evolution as a developer, and milestones achieved along the journey.
                         </p>
                    </motion.div>

                    {/* 1. Technical Arsenal */}
                    <div className="mb-32">
                         <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                              <Zap className="text-yellow-400" /> Technical Arsenal
                         </h3>

                         <div className="relative overflow-hidden mb-16 py-4 flex flex-col gap-6 before:absolute before:left-0 before:top-0 before:w-16 before:h-full before:bg-gradient-to-r before:from-[#0a0a0f] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-16 after:h-full after:bg-gradient-to-l after:from-[#0a0a0f] after:to-transparent after:z-10">
                              {/* Languages Track */}
                              <motion.div
                                   className="flex gap-4 shrink-0 w-max"
                                   animate={{ x: ["0%", "-50%"] }}
                                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                              >
                                   {[...skills.languages, ...skills.languages, ...skills.languages, ...skills.languages].map((skill, index) => (
                                        <SkillBadge key={`lang-${skill.name}-${index}`} tech={skill} />
                                   ))}
                              </motion.div>

                              {/* Frameworks Track (Reverse direction) */}
                              <motion.div
                                   className="flex gap-4 shrink-0 w-max ml-12"
                                   animate={{ x: ["-50%", "0%"] }}
                                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                              >
                                   {[...skills.frameworks, ...skills.frameworks, ...skills.frameworks, ...skills.frameworks].map((skill, index) => (
                                        <SkillBadge key={`fw-${skill.name}-${index}`} tech={skill} />
                                   ))}
                              </motion.div>

                              {/* Tools Track */}
                              <motion.div
                                   className="flex gap-4 shrink-0 w-max ml-6"
                                   animate={{ x: ["0%", "-50%"] }}
                                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              >
                                   {[...skills.tools, ...skills.tools, ...skills.tools, ...skills.tools].map((skill, index) => (
                                        <SkillBadge key={`tool-${skill.name}-${index}`} tech={skill} />
                                   ))}
                              </motion.div>
                         </div>

                         <div className="relative p-8 rounded-3xl bg-surface border border-white/5 overflow-hidden group">
                              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6 font-bold text-center">Core Attributes</h4>
                              <div className="flex flex-wrap gap-6 justify-center">
                                   {softSkills.map((skill, index) => (
                                        <SoftSkillBadge key={skill} skill={skill} index={index} />
                                   ))}
                              </div>
                         </div>
                    </div>

                    {/* 2. Evolution Tracker & 3. Trophy Room Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

                         {/* Evolution Tracker (Timeline) */}
                         <div>
                              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
                                   <Code2 className="text-accent-blue" /> Evolution Tracker
                              </h3>

                              <div className="relative pl-8 md:pl-0">
                                   {/* The glowing line */}
                                   <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-white/5">
                                        <motion.div
                                             className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-accent-primary via-accent-blue to-accent-purple transform origin-top shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                                             style={{ scaleY: pathLength }}
                                        />
                                   </div>

                                   {/* Timeline Nodes */}
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
                                                  {/* Center Node Dot */}
                                                  <div className="absolute left-[-24px] md:left-1/2 md:-ml-[16px] w-8 h-8 rounded-full bg-background border-4 border-surface z-10 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                                       <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></div>
                                                  </div>

                                                  {/* Content Card */}
                                                  <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                                                       <div className="glass-panel p-6 rounded-2xl group hover:border-accent-primary/50 transition-colors duration-500">
                                                            <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                                                 {index % 2 !== 0 && item.icon}
                                                                 <h4 className="text-xl font-bold group-hover:text-accent-primary transition-colors">{item.title}</h4>
                                                                 {index % 2 === 0 && item.icon}
                                                            </div>
                                                            <h5 className="text-accent-blue font-medium mb-1">{item.institution}</h5>
                                                            <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 mb-4 border border-white/5">
                                                                 {item.date}
                                                            </span>
                                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                                 {item.description}
                                                            </p>
                                                       </div>
                                                  </div>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         {/* Trophy Room (Bento Box) */}
                         <div>
                              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
                                   <Award className="text-yellow-400" /> Trophy Room
                              </h3>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[160px]">
                                   {achievements.map((achievement, index) => (
                                        <Tilt
                                             key={index}
                                             tiltMaxAngleX={10}
                                             tiltMaxAngleY={10}
                                             glareEnable={true}
                                             glareMaxOpacity={0.1}
                                             className={`glass-panel p-6 rounded-2xl ${achievement.span} border border-white/5 flex flex-col justify-between group overflow-hidden cursor-pointer ${achievement.border} transition-colors duration-500`}
                                        >
                                             <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                             <div className="relative z-10 flex justify-between items-start">
                                                  <div className="p-3 bg-surface rounded-xl border border-white/5 shadow-lg">
                                                       {achievement.icon}
                                                  </div>
                                             </div>
                                             <div className="relative z-10 mt-4">
                                                  <h4 className="text-lg font-black tracking-wide text-white mb-1 group-hover:scale-105 transform origin-left transition-transform duration-300">
                                                       {achievement.title}
                                                  </h4>
                                                  <p className="text-gray-400 text-sm font-medium">{achievement.subtitle}</p>
                                             </div>
                                        </Tilt>
                                   ))}
                              </div>

                              {/* Beyond Code */}
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.95 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   viewport={{ once: true, margin: "-50px" }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="mt-8"
                              >
                                   <div className="glass-panel p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent relative overflow-hidden group">
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
                                        <div className="flex items-center gap-4 mb-4 relative z-10">
                                             <div className="p-3 bg-orange-500/20 rounded-xl">
                                                  <Heart className="text-orange-400" size={24} />
                                             </div>
                                             <h4 className="text-xl font-bold text-orange-50">Beyond Code</h4>
                                        </div>
                                        <h5 className="font-semibold text-orange-200 mb-2 relative z-10">TOSS NGO Community Volunteer</h5>
                                        <p className="text-orange-100/70 text-sm leading-relaxed relative z-10">
                                             Dedicated time and effort towards community development and social welfare programs, reflecting a deep empathetic commitment outside the realm of technology.
                                        </p>
                                   </div>
                              </motion.div>

                         </div>
                    </div>

               </div>
          </section>
     );
}
