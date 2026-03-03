import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useState, useRef, Suspense } from 'react';

// Starfield particles background
function ParticleNetwork(props) {
     const ref = useRef();
     const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

     useFrame((state, delta) => {
          ref.current.rotation.x -= delta / 10;
          ref.current.rotation.y -= delta / 15;
     });

     return (
          <group rotation={[0, 0, Math.PI / 4]}>
               <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                    <PointMaterial
                         transparent
                         color="#0ea5e9"
                         size={0.005}
                         sizeAttenuation={true}
                         depthWrite={false}
                    />
               </Points>
          </group>
     );
}

export default function Hero() {
     return (
          <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
               {/* 3D Background */}
               <div className="absolute inset-0 z-0 opacity-60">
                    <Canvas camera={{ position: [0, 0, 1] }}>
                         <Suspense fallback={null}>
                              <ParticleNetwork />
                         </Suspense>
                    </Canvas>
               </div>

               {/* Content */}
               <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}
                         className="max-w-4xl"
                    >
                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-border bg-surface backdrop-blur-md text-sm font-medium tracking-wide"
                         >
                              <span className="text-gradient">Available for new opportunities</span>
                         </motion.div>

                         <div className="mb-8 relative z-20">
                              <motion.span
                                   initial={{ opacity: 0, y: 10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                                   className="text-xl md:text-3xl lg:text-4xl block font-medium text-gray-300 mb-4 tracking-wide"
                              >
                                   Hello, I'm
                              </motion.span>
                              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-tight">
                                   <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 80 }}
                                        className="relative inline-block"
                                   >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-primary to-accent-purple relative z-10">
                                             Subrata Malgope
                                        </span>
                                        {/* Animated underline glow */}
                                        <motion.span
                                             initial={{ scaleX: 0, opacity: 0 }}
                                             animate={{ scaleX: 1, opacity: 1 }}
                                             transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                                             className="absolute -bottom-1 left-0 w-full h-[0.08em] bg-gradient-to-r from-accent-blue via-accent-primary to-accent-purple blur-[8px] origin-left z-0"
                                        ></motion.span>
                                   </motion.div>
                              </h1>
                         </div>

                         {/* Interactive Hover Popups for Keywords */}
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                              className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed flex flex-wrap justify-center items-center gap-x-2"
                         >
                              <span>Passionate about crafting impactful web solutions that blend</span>

                              <div className="relative group inline-block">
                                   <span className="font-semibold text-white cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all group-hover:text-accent-blue">
                                        logic,
                                   </span>
                                   {/* Popup Card */}
                                   <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-50">
                                        <div className="bg-surface/90 backdrop-blur-xl border border-accent-blue/30 px-4 py-2 rounded-xl text-sm text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] whitespace-nowrap">
                                             <span className="text-accent-blue mr-2">⚡</span> Scalable Architectures
                                        </div>
                                   </div>
                              </div>

                              <div className="relative group inline-block">
                                   <span className="font-semibold text-white cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all group-hover:text-accent-purple">
                                        creativity,
                                   </span>
                                   {/* Popup Card */}
                                   <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-50">
                                        <div className="bg-surface/90 backdrop-blur-xl border border-accent-purple/30 px-4 py-2 rounded-xl text-sm text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] whitespace-nowrap">
                                             <span className="text-accent-purple mr-2">✨</span> Modern UI/UX
                                        </div>
                                   </div>
                              </div>

                              <span>and</span>

                              <div className="relative group inline-block">
                                   <span className="font-semibold text-white cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all group-hover:text-accent-primary">
                                        real-world usability.
                                   </span>
                                   {/* Popup Card */}
                                   <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-50">
                                        <div className="bg-surface/90 backdrop-blur-xl border border-accent-primary/30 px-4 py-2 rounded-xl text-sm text-white shadow-[0_0_20px_rgba(236,72,153,0.3)] whitespace-nowrap">
                                             <span className="text-accent-primary mr-2">🎯</span> User-Centric Design
                                        </div>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.9, duration: 0.5 }}
                              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
                         >
                              <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                   <span className="relative z-10 flex items-center gap-2">
                                        View Projects
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                   </span>
                                   <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-primary to-accent-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                              </a>
                              <a href="#contact" className="px-8 py-4 glass-panel glow-border font-semibold rounded-full hover:bg-surface-hover transition-all w-full sm:w-auto text-white group relative overflow-hidden">
                                   <span className="relative z-10">Contact Me</span>
                                   <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              </a>
                         </motion.div>
                    </motion.div>
               </div>

               {/* Unpack indicator (Replaced Scroll) */}
               <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
               >
                    <motion.div
                         className="flex items-center gap-3 mb-3"
                         whileHover={{ scale: 1.05 }}
                    >
                         <span className="text-xs tracking-[0.3em] uppercase font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200 group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
                              Unpack
                         </span>
                         <motion.div
                              animate={{ y: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                         >
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
                              </svg>
                         </motion.div>
                    </motion.div>
               </motion.div>
          </section>
     );
}
