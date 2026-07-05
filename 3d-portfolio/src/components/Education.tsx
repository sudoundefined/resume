import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#00f0ff]/20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-16 text-center text-white tracking-tighter"
      >
        <span className="text-[#00f0ff] font-mono text-xl sm:text-3xl md:text-4xl mr-2">03.</span>EDUCATION<span className="text-[#ff00ff]">_DATA</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="cyber-panel p-8 group"
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl text-[#00f0ff] font-mono leading-none mt-1">
              {'{'}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Master of Computer Applications (MCA)</h3>
              <p className="text-[#888] font-mono text-sm">National Institute of Technology (NIT), Jamshedpur</p>
            </div>
            <div className="text-3xl text-[#00f0ff] font-mono leading-none mt-1">
              {'}'}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="cyber-panel p-8 group"
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl text-[#ff00ff] font-mono leading-none mt-1">
              [
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-[#888] font-mono text-sm">Swami Vivekanand Subharti University, Prayagraj</p>
            </div>
            <div className="text-3xl text-[#ff00ff] font-mono leading-none mt-1">
              ]
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
