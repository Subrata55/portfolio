import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Web3Forms Integration
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          access_key: "YOUR_ACCESS_KEY_HERE" // Get your key from web3forms.com
        })
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Submission failed');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
    } catch (error) {
      console.error('Contact form error:', error);
      setErrorMessage("Message could not be sent. Please check your connection or access key.");
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to explore an opportunity? Drop a message below or connect directly.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 space-y-4"
          >
            <a href="mailto:subrata.malgope@example.com" className="flex items-center gap-4 p-6 glass-panel rounded-2xl border border-border bg-surface dark:bg-black/20 hover:border-accent-primary/50 transition-colors group">
              <div className="p-3 bg-white dark:bg-white/5 rounded-xl text-accent-blue group-hover:scale-110 transition-transform shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                <p className="text-[var(--text-primary)] font-medium group-hover:text-accent-blue transition-colors">subratamalgope2003@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-6 glass-panel rounded-2xl border border-border bg-surface dark:bg-black/20 group cursor-default">
              <div className="p-3 bg-white dark:bg-white/5 rounded-xl text-accent-primary group-hover:scale-110 transition-transform shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-[var(--text-primary)] font-medium">India</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-border">
              <span className="text-[var(--text-secondary)] font-medium text-sm uppercase tracking-wider">Or connect on</span>
              <div className="flex gap-3">
                <a href="https://github.com/Subrata55" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-surface dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all border border-border shadow-sm hover:-translate-y-1">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/subrata-malgope" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-surface dark:bg-white/10 text-gray-700 dark:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2]/50 hover:text-white transition-all border border-border shadow-sm hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 glass-panel p-8 md:p-10 rounded-3xl border border-border bg-surface dark:bg-black/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl text-center p-6 border border-green-500/20"
                  >
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Message Sent!</h3>
                    <p className="text-[var(--text-secondary)]">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)] ml-1">Your Name</label>
                  <input required id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)] ml-1">Your Email</label>
                  <input required id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all shadow-sm" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-[var(--text-primary)] ml-1">Subject</label>
                <input required id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="w-full bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all shadow-sm" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)] ml-1">Message</label>
                <textarea required id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all resize-none shadow-sm" placeholder="Hello Subrata, I'd like to talk about..."></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-4 rounded-xl text-sm font-medium">
                  <AlertCircle size={20} className="shrink-0" /> {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
              >
                {status === 'loading' ? (
                  <><Loader2 size={20} className="animate-spin" /> Sending Message...</>
                ) : (
                  <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
