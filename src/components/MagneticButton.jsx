import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className, href, ...props }) {
     const ref = useRef(null);
     const [position, setPosition] = useState({ x: 0, y: 0 });

     const handleMouse = (e) => {
          const { clientX, clientY } = e;
          const { height, width, left, top } = ref.current.getBoundingClientRect();

          // Calculate distance from center of element
          const middleX = clientX - (left + width / 2);
          const middleY = clientY - (top + height / 2);

          // Apply dampening so it doesn't move too far
          setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
     };

     const reset = () => {
          setPosition({ x: 0, y: 0 });
     };

     const Component = href ? motion.a : motion.button;
     const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

     return (
          <Component
               ref={ref}
               onMouseMove={handleMouse}
               onMouseLeave={reset}
               animate={{ x: position.x, y: position.y }}
               transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
               className={className}
               {...linkProps}
               {...props}
          >
               {children}
          </Component>
     );
}
