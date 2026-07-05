import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="about" className="min-h-[100dvh] flex items-center pt-24 pb-12 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-4xl relative text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[#00f0ff] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-[#00f0ff]"></span>
          </span>
          System Status: Online / Available
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tighter text-white leading-[1.1]"
        >
          &gt; DEEPANSHU_<br className="md:hidden" />
          <span className="text-[#00f0ff]">SRIVASTAVA</span>
          <span className="animate-pulse text-[#ff00ff]">_</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-[#ff00ff] mb-8 font-mono uppercase tracking-[0.3em]"
        >
          // Tech_Lead & Sr.Full_Stack_Eng
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-lg md:text-xl text-[#b0b0b0] leading-relaxed mb-12 max-w-2xl font-light border-l-2 border-[#00f0ff] pl-6"
        >
          Accomplished engineering leader with 9+ years of experience architecting highly scalable, service-oriented distributed systems. Specialized in <span className="text-[#00f0ff] font-mono text-sm uppercase">Node.js, TypeScript, React.js, and Cloud Architecture</span> to deliver robust, high-performance enterprise solutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <a href="#contact" className="cyber-button w-full sm:w-auto px-10 py-4 text-center">
            Initialize Contact
          </a>
          <a href="#experience" className="cyber-button-alt w-full sm:w-auto px-10 py-4 text-center">
            Load Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}
