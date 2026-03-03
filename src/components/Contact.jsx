import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
     const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
     const [status, setStatus] = useState({ submitting: false, success: false, error: null });

     const handleChange = (e) => {
          setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          setStatus({ submitting: true, success: false, error: null });

          // Simulate API call for frontend-only version
          try {
               await new Promise(resolve => setTimeout(resolve, 1500));

               setStatus({ submitting: false, success: true, error: null });
               setFormData({ name: '', email: '', subject: '', message: '' });

               // Hide success message after 5 seconds
               setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
          } catch (error) {
               console.error('Submission error:', error);
               setStatus({ submitting: false, success: false, error: 'Simulation failed' });
          }
     };

     return (
          <section id="contact" className="py-32 relative">
               <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                         className="max-w-4xl mx-auto"
                    >
                         <div className="text-center mb-16">
                              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                   Let's <span className="text-gradient">Connect</span>
                              </h2>
                              <p className="text-gray-400">
                                   Have a project in mind or just want to chat? I'd love to hear from you.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                              {/* Contact Info */}
                              <div className="md:col-span-2 space-y-8">
                                   <div className="glass-panel p-8">
                                        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

                                        <div className="space-y-6">
                                             <div className="flex items-center gap-4 text-gray-300">
                                                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                                                       <Mail size={20} />
                                                  </div>
                                                  <div>
                                                       <p className="text-sm text-gray-500">Email</p>
                                                       <a href="mailto:hello@example.com" className="hover:text-accent-blue transition-colors">hello@example.com</a>
                                                  </div>
                                             </div>

                                             <div className="flex items-center gap-4 text-gray-300">
                                                  <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                                                       <MapPin size={20} />
                                                  </div>
                                                  <div>
                                                       <p className="text-sm text-gray-500">Location</p>
                                                       <p>San Francisco, CA</p>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="mt-10">
                                             <p className="text-sm text-gray-500 mb-4">Socials</p>
                                             <div className="flex gap-4">
                                                  <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-primary transition-all">
                                                       <Github size={18} />
                                                  </a>
                                                  <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-primary transition-all">
                                                       <Linkedin size={18} />
                                                  </a>
                                                  <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-primary transition-all">
                                                       <Twitter size={18} />
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/* Contact Form */}
                              <div className="md:col-span-3">
                                   <form className="glass-panel p-8 space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                             <div className="space-y-2">
                                                  <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                                                  <input
                                                       type="text"
                                                       id="name"
                                                       required
                                                       value={formData.name}
                                                       onChange={handleChange}
                                                       className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                                                       placeholder="John Doe"
                                                  />
                                             </div>
                                             <div className="space-y-2">
                                                  <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                                                  <input
                                                       type="email"
                                                       id="email"
                                                       required
                                                       value={formData.email}
                                                       onChange={handleChange}
                                                       className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                                                       placeholder="john@example.com"
                                                  />
                                             </div>
                                        </div>

                                        <div className="space-y-2">
                                             <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                                             <input
                                                  type="text"
                                                  id="subject"
                                                  value={formData.subject}
                                                  onChange={handleChange}
                                                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                                                  placeholder="How can I help you?"
                                             />
                                        </div>

                                        <div className="space-y-2">
                                             <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                                             <textarea
                                                  id="message"
                                                  rows={5}
                                                  required
                                                  value={formData.message}
                                                  onChange={handleChange}
                                                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                                                  placeholder="Your message here..."
                                             ></textarea>
                                        </div>

                                        <button
                                             type="submit"
                                             disabled={status.submitting}
                                             className="w-full py-4 bg-gradient-to-r from-accent-blue via-accent-primary to-accent-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-accent-primary/25 disabled:opacity-70 transition-all flex items-center justify-center gap-2 group"
                                        >
                                             {status.submitting ? 'Sending...' : 'Send Message'}
                                             {!status.submitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                        </button>
                                   </form>
                              </div>
                         </div>
                    </motion.div>
               </div>
          </section>
     );
}
