import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Mail, ArrowRight, Play, CheckCircle2, Clock } from 'lucide-react';

const RealFeatures = [
  { icon: <Mail className="text-accent-blue" />, title: "SMTP Email", desc: "Automated notifications with Reply-To headers using JavaMailSender." },
  { icon: <Server className="text-accent-primary" />, title: "RESTful CRUD", desc: "Clean architecture endpoints with proper HTTP status codes and DTOs." },
  { icon: <Shield className="text-accent-purple" />, title: "Robust Validation", desc: "Server-side input validation using Spring Boot @Valid annotations." },
  { icon: <Database className="text-cyan-400" />, title: "Database Design", desc: "Structured relational schemas using MySQL and Spring Data JPA." },
  { icon: <CheckCircle2 className="text-green-400" />, title: "CORS Config", desc: "Secure cross-origin policies for seamless frontend-backend integration." },
];

const codeSnippet = `
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponse> submitContactMessage(
            @Valid @RequestBody ContactRequest request) {
            
        // 1. Save to MySQL database
        ContactMessage savedMessage = contactService.saveMessage(request);
        
        // 2. Trigger async SMTP email notification
        contactService.sendNotificationEmail(savedMessage);
        
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(new ApiResponse("Message successfully delivered"));
    }
}
`.trim();

export default function BackendShowcase() {
  const [activeTab, setActiveTab] = useState('health');
  const [testStatus, setTestStatus] = useState('idle');
  const [testResult, setTestResult] = useState(null);

  const simulateApiTest = () => {
    setTestStatus('loading');
    setTimeout(() => {
      setTestStatus('success');
      if (activeTab === 'health') {
        setTestResult({
          status: 200,
          time: '42ms',
          data: {
            "status": "UP",
            "database": "Connected",
            "timestamp": new Date().toISOString()
          }
        });
      } else {
        setTestResult({
          status: 201,
          time: '128ms',
          data: {
            "success": true,
            "message": "Message saved and email notification queued."
          }
        });
      }
      setTimeout(() => setTestStatus('idle'), 3000);
    }, 800);
  };

  return (
    <section id="backend" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
            How I Build <span className="text-gradient">Systems</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A look under the hood. I prioritize clean architecture, robust validation, and practical system design.
          </p>
        </motion.div>

        {/* API Flow Diagram */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="glass-panel p-8 md:p-12 rounded-3xl mb-16 border border-border bg-surface dark:bg-black/20"
        >
           <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-10 text-center">Standard Request Flow</h3>
           
           <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
              {['Client Request', 'Controller', 'Service Layer', 'Repository', 'MySQL DB'].map((step, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
                  <div className="flex-1 px-6 py-4 rounded-xl bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 text-center font-medium shadow-sm hover:border-accent-primary/50 transition-colors w-full text-[var(--text-primary)]">
                    {step}
                  </div>
                  {idx < 4 && (
                    <ArrowRight className="hidden lg:block text-accent-blue shrink-0" size={24} />
                  )}
                  {idx < 4 && (
                    <ArrowRight className="lg:hidden text-accent-blue rotate-90 shrink-0" size={24} />
                  )}
                </div>
              ))}
           </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
           {/* Real Features Grid */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="grid grid-cols-1 sm:grid-cols-2 gap-4"
           >
             {RealFeatures.map((feature, idx) => (
               <div key={idx} className="glass-panel p-6 rounded-2xl border border-border hover:border-accent-primary/30 transition-all bg-surface/50 dark:bg-black/20 group">
                 <div className="p-3 bg-white dark:bg-white/5 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                   {feature.icon}
                 </div>
                 <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{feature.title}</h4>
                 <p className="text-sm text-[var(--text-muted)]">{feature.desc}</p>
               </div>
             ))}
           </motion.div>

           {/* Code Snippet & Live Tester */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 flex flex-col bg-[#0d1117] text-gray-300 shadow-xl"
           >
              {/* Fake Window Controls */}
              <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-gray-500">ContactController.java</div>
                <div className="w-12"></div>
              </div>

              <div className="p-6 overflow-x-auto text-sm font-mono whitespace-pre text-[#c9d1d9] leading-relaxed">
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i}><span className="text-gray-600 mr-4 select-none">{i+1}</span>{line}</div>
                ))}
              </div>

              {/* Live API Tester */}
              <div className="mt-auto border-t border-white/5 bg-[#161b22] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Server size={16} className="text-accent-blue" /> Live API Tester
                  </h4>
                  <div className="flex gap-2 bg-black/40 p-1 rounded-lg">
                    <button 
                      onClick={() => { setActiveTab('health'); setTestResult(null); }}
                       className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${activeTab === 'health' ? 'bg-accent-blue/20 text-accent-blue' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5'}`}
                    >
                      GET /health
                    </button>
                    <button 
                      onClick={() => { setActiveTab('contact'); setTestResult(null); }}
                       className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${activeTab === 'contact' ? 'bg-accent-purple/20 text-accent-purple' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5'}`}
                    >
                      POST /contact
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <button 
                    onClick={simulateApiTest}
                    disabled={testStatus === 'loading'}
                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-2 font-mono text-sm transition-colors text-white"
                  >
                    {testStatus === 'loading' ? (
                      <span className="flex items-center gap-2">
                         <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                           <Server size={16} />
                         </motion.div> 
                         Sending Request...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-accent-blue">
                        <Play size={16} /> Run Test Endpoint
                      </span>
                    )}
                  </button>
                </div>

                {testResult && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-white/5 overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-2 text-xs font-mono">
                      <span className="text-green-400 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div> {testResult.status} OK
                      </span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Clock size={12} /> {testResult.time}
                      </span>
                    </div>
                    <pre className="p-4 bg-black/40 rounded-xl text-xs font-mono text-[#a5d6ff] overflow-x-auto">
                      {JSON.stringify(testResult.data, null, 2)}
                    </pre>
                  </motion.div>
                )}
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
