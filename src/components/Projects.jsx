import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    id: 1,
    title: "Daily Habit Tracker",
    description: "A productivity-focused web application to systematically record daily activities and visualize long-term consistency trends.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    tags: ["React.js", "Context API", "Firebase"],
    category: "Web Dev",
    live: "https://daily-habit-tracker-e9980.web.app/login",
    span: "col-span-1 md:col-span-2",
    tech: ["React.js", "Firebase Auth", "Firestore DB", "Framer Motion", "Tailwind CSS"],
    caseStudy: {
      problem: "People struggle to maintain consistency without visual feedback and accountability mechanisms.",
      approach: "Built a reactive frontend with centralized state management and real-time cloud database synchronization.",
      architecture: "React Context API manages global state, connected to Firebase Auth for session management and Firestore to sync daily completion data in real-time.",
      challenges: ["Synchronizing offline states with cloud database", "Optimizing React re-renders on large calendar grids"],
      impact: "Provided a seamless, zero-latency habit logging experience with secure authentication."
    }
  },
  {
    id: 2,
    title: "Sansad Adarsh Gramin",
    description: "Village development transparency portal replicating a government scheme. Features OAuth 2.0 and Google Drive integration.",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "OAuth 2.0"],
    category: "Web Dev",
    live: "",
    span: "col-span-1",
    tech: ["PHP 8", "MySQL", "Google OAuth 2.0", "Google Drive API", "Bootstrap"],
    caseStudy: {
      problem: "Lack of transparency and digital record-keeping in rural village development projects.",
      approach: "Developed a full-stack portal with secure authentication and structured relational data storage.",
      architecture: "Client → PHP Backend → Google OAuth for secure login → MySQL for complaint/status tracking. Files synced to Google Drive.",
      challenges: ["Implementing secure OAuth 2.0 flow natively in PHP", "Designing relational DB for complex village hierarchy"],
      impact: "Digitized workflow replacing manual paper registers, improving accountability."
    }
  },
  {
    id: 3,
    title: "Bounce Master",
    description: "Interactive arcade game featuring multi-ball physics, collision detection, and dynamic score tracking.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    tags: ["Java", "Swing", "AWT", "OOP"],
    category: "Software & Games",
    live: "",
    span: "col-span-1 md:col-span-3",
    tech: ["Java SE", "Swing UI", "AWT Rendering", "Custom Physics Engine", "Multithreading"],
    caseStudy: {
      problem: "Needed to demonstrate mastery of core Java, OOP principles, and multithreading.",
      approach: "Built a completely custom game engine from scratch using standard Java libraries without external game frameworks.",
      architecture: "Event-driven architecture. Main game loop runs on a dedicated thread, updating entity positions and resolving collisions before repainting via AWT.",
      challenges: ["Jittery rendering fixed with Double Buffering", "Complex collision math for dynamic ball bouncing"],
      impact: "A performant, zero-dependency Java application showcasing deep language understanding."
    }
  },
  {
    id: 4,
    title: "Movie Booking App",
    description: "A full-stack movie ticket booking platform with real-time seat selection, theatre management, and secure payment flow.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    tags: ["React.js", "Node.js", "MongoDB"],
    category: "Web Dev",
    live: "",
    span: "col-span-1 md:col-span-2",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "CSS"],
    caseStudy: {
      problem: "Users need a seamless way to browse movies, select showtimes across multiple theatres, and book seats in real-time.",
      approach: "Built a full-stack MERN application with a React frontend for interactive seat selection and a Node.js/Express backend with MongoDB for data persistence.",
      architecture: "React frontend communicates with Express REST API. MongoDB stores movies, theatres, showtimes, and booking data. JWT-based authentication secures user sessions.",
      challenges: ["Real-time seat availability and preventing double bookings", "Designing a flexible schema to map movies to multiple theatres and showtimes"],
      impact: "Delivered a production-ready booking flow with role-based access for admins and users."
    }
  },
  {
    id: 5,
    title: "Wellness Platform",
    description: "A comprehensive mental health and wellness platform connecting users with therapists, featuring session booking, community forums, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    tags: ["Spring Boot", "React.js", "MySQL"],
    category: "Web Dev",
    live: "",
    span: "col-span-1",
    tech: ["Spring Boot", "React.js", "MySQL", "Spring Security", "JWT", "JPA/Hibernate", "REST API"],
    caseStudy: {
      problem: "Mental health services lack accessible digital platforms for session booking, practitioner discovery, and peer support communities.",
      approach: "Developed a full-stack application with a Spring Boot backend providing secure REST APIs and a React frontend with role-based dashboards for users, practitioners, and admins.",
      architecture: "Spring Boot backend with JPA/Hibernate connects to PostgreSQL. Spring Security with JWT handles authentication and role-based authorization. React frontend with Context API manages state.",
      challenges: ["Implementing role-based access control across user, practitioner, and admin roles", "Building a real-time notification system for session reminders and forum activity"],
      impact: "Created a holistic wellness ecosystem with therapy sessions, community forums, mood tracking, and practitioner management."
    }
  },
  {
    id: 6,
    title: "Java Snake Game",
    description: "A classic desktop Snake game built natively in Java utilizing Object-Oriented Principles and custom rendering logic.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    tags: ["Java", "Swing", "AWT", "Game Dev"],
    category: "Software & Games",
    live: "",
    span: "col-span-1 md:col-span-3",
    tech: ["Java SE", "Swing UI", "AWT Rendering", "Event Listeners", "Timers"],
    caseStudy: {
      problem: "Needed to build a nostalgic arcade classic to solidify understanding of desktop UI event lifecycles and game loops in Java.",
      approach: "Developed a completely self-contained desktop application using standard Java Swing and AWT drawing components.",
      architecture: "A Timer-driven game loop constantly updates the snake's vector, triggering collision detection against boundaries and the apple entity, repainting the canvas at 60 FPS.",
      challenges: ["Handling fast sequential keyboard inputs without dropping frames", "Managing the expanding logical grid of the snake's body segments"],
      impact: "A highly responsive, classic gaming experience demonstrating a solid grasp of Java's core capabilities and GUI mechanics."
    }
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      onClick={onClick} 
      className={`glass-panel group cursor-pointer overflow-hidden ${project.span} flex flex-col h-full min-h-[250px] md:min-h-[280px] border border-white/5 bg-black/40 hover:bg-black/60 transition-all duration-500 rounded-3xl relative`}
      whileHover="hover"
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-accent-indigo/0 via-transparent to-accent-cyan/0 group-hover:from-accent-indigo/50 group-hover:via-accent-purple/50 group-hover:to-accent-cyan/50 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm pointer-events-none -z-10"></div>
      
      {/* Background Image / Overlay */}
      <motion.div layoutId={`card-${project.title}`} className="absolute inset-0 z-0 bg-[#050508] overflow-hidden rounded-3xl">
        <motion.img 
          layoutId={`image-${project.title}`} 
          src={project.image} 
          alt={project.title} 
          loading="lazy" 
          className="w-full h-full object-cover opacity-30 dark:opacity-40 filter grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 ease-out" 
        />
        {/* Complex Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </motion.div>

      {/* Content wrapper */}
      <div className="relative z-10 p-5 md:p-6 flex flex-col h-full justify-end pointer-events-none">
        
        {/* Floating Tags */}
        <div className="absolute top-5 md:top-6 left-5 md:left-6 flex flex-wrap gap-2 pr-12 md:pr-0">
          {project.tags.map((tag, i) => (
            <motion.span 
              key={tag} 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] md:text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/80 group-hover:border-accent-cyan/30 group-hover:text-accent-cyan transition-colors duration-300 font-medium tracking-wide shadow-xl"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Content Body */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out mt-12 md:mt-16">
          <motion.h3 
            layoutId={`title-${project.title}`} 
            className="text-2xl md:text-3xl font-black mb-2 tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-indigo group-hover:to-accent-cyan transition-all duration-500 pointer-events-auto w-fit"
          >
            {project.title}
          </motion.h3>
          
          <div className="h-[2px] w-8 bg-accent-blue/50 mb-3 group-hover:w-16 transition-all duration-500"></div>

          <p className="text-white/70 text-sm md:text-sm leading-relaxed mb-6 group-hover:text-white/90 transition-colors pointer-events-auto line-clamp-2">
            {project.description}
          </p>
          
          {/* Action Row */}
          <div className="flex items-center justify-between mt-auto pointer-events-auto border-t border-white/10 pt-4">
            <div className="flex items-center gap-3">
              {project.github && project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2.5 rounded-full bg-black/50 hover:bg-white border border-white/10 hover:border-white transition-all text-white/80 hover:text-black group/btn shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2.5 rounded-full bg-black/50 hover:bg-accent-primary border border-white/10 hover:border-transparent transition-all text-white/80 hover:text-white group/btn shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                </a>
              )}
            </div>
            
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-semibold text-sm group-hover:bg-accent-primary group-hover:text-white transition-colors cursor-pointer opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 !duration-500 ease-out"
            >
              Case Study <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
            <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
                    Featured <span className="text-gradient">Case Studies</span>
                </h2>
                <p className="text-[var(--text-secondary)] text-lg">
                    Real-world projects showcasing backend architecture, problem-solving, and full-stack integration.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input 
                    type="text" 
                    placeholder="Search tech stack..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                  />
                </div>
                
                <div className="glass-panel p-1.5 flex rounded-full w-full sm:w-auto overflow-x-auto hide-scrollbar border-border bg-surface">
                    {["All", "Web Dev", "Software & Games"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`relative px-5 py-2.5 whitespace-nowrap rounded-full text-sm font-semibold transition-colors duration-300 ${filter === category ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}
                        >
                            {filter === category && (
                                <motion.div layoutId="activeTabIndicator" className="absolute inset-0 bg-white dark:bg-accent-primary/20 border border-gray-200 dark:border-accent-primary/50 shadow-sm dark:shadow-[0_0_15px_rgba(99,102,241,0.5)] rounded-full -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.4 }}
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
              <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
      </AnimatePresence>
    </section>
  );
}
