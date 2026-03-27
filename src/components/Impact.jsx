import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { FaHackerrank } from 'react-icons/fa';

const AnimatedCounter = ({ end, label, icon: Icon, prefix = "", suffix = "+", link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 2000;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end]);

  const Container = link ? "a" : "div";
  const linkProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Container {...linkProps} ref={ref} className={`glass-panel p-8 rounded-3xl border border-border bg-surface text-center flex flex-col items-center justify-center group hover:border-accent-primary/50 transition-colors ${link ? 'cursor-pointer hover:shadow-lg' : ''}`}>
      <div className="p-4 bg-white dark:bg-black/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform text-accent-primary">
        <Icon size={32} />
      </div>
      <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 font-mono">
        {prefix}{count}{suffix}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider text-sm">{label}</p>
    </Container>
  );
};

export default function Impact() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proven <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">By the numbers.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatedCounter end={8} label="projects" icon={Github} link="https://github.com/Subrata55" />
          <AnimatedCounter end={300} label="LeetCode Problems" icon={SiLeetcode} link="https://leetcode.com/u/subratamalgope2003/" />
          <AnimatedCounter end={15} label="HackerRank Stars" icon={FaHackerrank} link="https://www.hackerrank.com/profile/subratamalgope21" />
        </div>
      </div>
    </section>
  );
}
