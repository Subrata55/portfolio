import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from './MagneticButton';
import ProjectDetails from './ProjectDetails';

const projects = [
     {
          id: 1,
          title: "Daily Habit Tracker",
          description: "A productivity-focused web application to systematically record daily activities and visualize long-term consistency trends. Built responsive UI with React and integrated Firebase for auth/real-time sync.",
          image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
          tags: ["React.js", "Context API", "Firebase"],
          category: "Web Dev",
          github: "https://github.com/yaswanthkumar796/Daily-Habit-Tracker",
          live: "https://daily-habit-tracker-e9980.web.app/login",
          span: "col-span-1 md:col-span-2 row-span-2",
          tech: ["React.js", "Firebase Auth", "Firestore DB", "Framer Motion", "Tailwind CSS"]
     },
     {
          id: 2,
          title: "Sansad Adarsh Gramin Yojana",
          description: "Village development transparency portal replicating a government scheme. Features OAuth 2.0, Google Drive API integration, and digital complaint submission.",
          image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800&auto=format&fit=crop",
          tags: ["PHP", "MySQL", "OAuth 2.0"],
          category: "Web Dev",
          github: "https://github.com/yaswanthkumar796/FULL-project",
          live: "",
          span: "col-span-1 row-span-2",
          tech: ["PHP 8", "MySQL", "Google OAuth 2.0", "Google Drive API", "Bootstrap"]
     },
     {
          id: 3,
          title: "Real-Time Weather App",
          description: "Full-stack application fetching and displaying live weather data based on user location. Includes dynamic UI updates and search history tracking.",
          image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
          tags: ["MERN Stack", "Express.js", "REST API"],
          category: "Web Dev",
          github: "https://github.com/yaswanthkumar796/weather-based-outfit-suggestion",
          live: "",
          span: "col-span-1 md:col-span-2 row-span-1",
          tech: ["React.js", "Node.js", "Express", "MongoDB", "OpenWeatherMap API"]
     },
     {
          id: 4,
          title: "AI Travel Planner Bot",
          description: "An intelligent chatbot assistant that helps users plan conversational itineraries, using natural language processing to suggest flights, hotels, and activities based on preferences.",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
          tags: ["JavaScript", "Node.js", "OpenAI API"],
          category: "Web Dev",
          github: "#",
          live: "",
          span: "col-span-1 row-span-1",
          tech: ["Node.js", "OpenAI GPT-4", "Socket.IO", "React.js"]
     },
     {
          id: 5,
          title: "Bounce Master",
          description: "Interactive arcade game featuring multi-ball physics, collision detection, and dynamic score tracking.",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
          tags: ["Java", "Swing", "AWT", "OOP"],
          category: "Java Swing",
          github: "https://github.com/Subrata55/PongGame",
          live: "",
          span: "col-span-1 md:col-span-2 row-span-2",
          tech: ["Java SE", "Swing UI", "AWT Rendering", "Custom Physics Engine", "Multithreading"]
     },
     {
          id: 6,
          title: "Snake Game",
          description: "Classic Snake Game with real-time movement, increasing difficulty levels, and special timed rewards.",
          image: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=800&auto=format&fit=crop",
          tags: ["Java", "Swing", "Game Logic"],
          category: "Java Swing",
          github: "https://github.com/KuldipRana03/Java-SnakeGame-Project",
          live: "",
          span: "col-span-1 row-span-2",
          tech: ["Java SE", "Swing UI", "Timer Classes", "2D Graphics", "Event Listeners"]
     }
];

const ProjectCard = ({ project, onClick }) => {
     return (
          <Tilt
               tiltMaxAngleX={5}
               tiltMaxAngleY={5}
               glareEnable={true}
               glareMaxOpacity={0.15}
               glareColor="#ffffff"
               glarePosition="all"
               transitionSpeed={1500}
               scale={1.02}
               className={`glass-panel group cursor-pointer overflow-hidden ${project.span} flex flex-col h-full min-h-[300px] border border-border hover:border-accent-primary/50 transition-colors duration-500`}
          >
               <motion.div
                    layoutId={`card-${project.title}`}
                    className="absolute inset-0 z-0 bg-[#0a0a0f]"
                    onClick={onClick}
               >
                    <motion.img
                         layoutId={`image-${project.title}`}
                         src={project.image}
                         alt={project.title}
                         className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent"></div>
               </motion.div>

               <div className="relative z-10 p-8 flex flex-col h-full justify-end pointer-events-none">
                    <div className="mb-4 flex flex-wrap gap-2">
                         {project.tags.map(tag => (
                              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-white/5 backdrop-blur-md text-gray-300 group-hover:border-accent-blue/50 group-hover:text-white group-hover:shadow-[0_0_10px_rgba(14,165,233,0.5)] transition-all duration-500">
                                   {tag}
                              </span>
                         ))}
                    </div>

                    <motion.h3 layoutId={`title-${project.title}`} className="text-2xl font-black mb-2 tracking-wide group-hover:text-accent-blue transition-colors duration-300 pointer-events-auto w-fit" onClick={onClick}>
                         {project.title}
                    </motion.h3>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors pointer-events-auto" onClick={onClick}>
                         {project.description}
                    </p>

                    <div className="flex items-center gap-4 mt-auto pointer-events-auto">
                         {project.github && project.github !== "#" && (
                              <MagneticButton href={project.github} className="p-3 rounded-full bg-surface hover:bg-white/10 border border-white/5 hover:border-white/20 transition-colors backdrop-blur-md text-white shadow-lg">
                                   <Github size={20} />
                              </MagneticButton>
                         )}
                         {project.live && project.live !== "#" && (
                              <MagneticButton href={project.live} className="p-3 rounded-full bg-surface hover:bg-accent-primary border border-white/5 hover:border-accent-primary/50 transition-colors backdrop-blur-md text-white shadow-lg">
                                   <ExternalLink size={20} />
                              </MagneticButton>
                         )}
                    </div>
               </div>

               {/* Decorative glowing gradient border */}
               <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-accent-blue/30 transition-all duration-700"></div>
               <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(99,102,241,1)] transition-all duration-500"></div>
          </Tilt>
     );
};

export default function Projects() {
     const [filter, setFilter] = useState("Web Dev");
     const [selectedProject, setSelectedProject] = useState(null);

     const filteredProjects = projects.filter(project => project.category === filter);

     return (
          <section id="projects" className="py-32 relative">
               <div className="container mx-auto px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8 }}
                         className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                    >
                         <div>
                              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                   Featured <span className="text-gradient">Work</span>
                              </h2>
                              <p className="text-gray-400 text-lg max-w-2xl">
                                   A selection of my recent projects exploring modern frontend engineering, robust backend architectures, and stunning design.
                              </p>
                         </div>

                         {/* Glowing Tab Menu */}
                         <div className="glass-panel p-1.5 flex rounded-full shrink-0 relative z-20">
                              {["Web Dev", "Java Swing"].map((category) => (
                                   <button
                                        key={category}
                                        onClick={() => setFilter(category)}
                                        className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${filter === category ? "text-white" : "text-gray-400 hover:text-gray-200"
                                             }`}
                                   >
                                        {filter === category && (
                                             <motion.div
                                                  layoutId="activeTabIndicator"
                                                  className="absolute inset-0 bg-accent-primary/20 border border-accent-primary/50 shadow-[0_0_15px_rgba(99,102,241,0.5)] rounded-full -z-10"
                                                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                             />
                                        )}
                                        <span className="relative z-10">{category === "Web Dev" ? "Web Dev (MERN/JS)" : "Software & Games"}</span>
                                   </button>
                              ))}
                         </div>
                    </motion.div>

                    {/* Animated Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                         <AnimatePresence mode="popLayout">
                              {filteredProjects.map((project, index) => (
                                   <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 0.8, y: -50, filter: "blur(10px)" }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                             type: "spring",
                                             stiffness: 100,
                                             damping: 15
                                        }}
                                        className={project.span}
                                   >
                                        <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                                   </motion.div>
                              ))}
                         </AnimatePresence>
                    </motion.div>
               </div>

               <AnimatePresence>
                    {selectedProject && (
                         <ProjectDetails
                              project={selectedProject}
                              onClose={() => setSelectedProject(null)}
                         />
                    )}
               </AnimatePresence>
          </section>
     );
}
