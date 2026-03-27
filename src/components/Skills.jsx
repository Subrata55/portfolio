import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiHtml5, SiCss3,
  SiSpringboot, SiNodedotjs, SiExpress, SiPython,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiGit, SiGithub, SiPostman, SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, interactive user interfaces",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    ]
  },
  {
    title: "Backend",
    description: "Architecting scalable APIs and server logic",
    skills: [
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339939]" /> },
      { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-400" /> },
      { name: "REST APIs", icon: <span className="text-accent-blue font-mono font-bold text-xl leading-none">{`{}`}</span> },
    ]
  },
  {
    title: "Databases",
    description: "Designing schemas and managing data",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ]
  },
  {
    title: "Tools & DevOps",
    description: "Version control and infrastructure",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-gray-400" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technology stack, tools, and specialized capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-border bg-surface/50 dark:bg-black/20 hover:border-accent-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-accent-blue transition-colors">
                {category.title}
              </h3>
              <p className="text-[var(--text-muted)] mb-8 text-sm">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[var(--text-primary)] hover:border-accent-primary/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 cursor-default"
                  >
                    <span className="text-xl flex items-center justify-center min-w-[24px]">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
