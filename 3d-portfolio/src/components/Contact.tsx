import { motion } from 'framer-motion'
import { useState, type SyntheticEvent } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    
    const form = e.currentTarget
    const rawFormData = new FormData(form)
    const formData = new FormData()

    // Client-side sanitization to strip out potential injection payloads (SQLi / XSS)
    // Note: React automatically prevents XSS on render, and we don't use a SQL DB,
    // but this ensures the payload sent over the network is clean.
    for (const [key, value] of rawFormData.entries()) {
      if (typeof value === 'string') {
        // Strip out <, >, semicolons, and single/double quotes
        const sanitized = value.replace(/[<>;'"]/g, '')
        formData.append(key, sanitized)
      } else {
        formData.append(key, value)
      }
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/srivastava.deepanshu24@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSending(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#00f0ff]/20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto cyber-panel p-6 sm:p-8 md:p-12 shadow-[0_0_30px_rgba(0,240,255,0.05)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 text-white tracking-tighter">
              <span className="text-[#00f0ff] font-mono text-xl sm:text-3xl mr-2">04.</span>INIT_<span className="text-[#00f0ff]">CONTACT</span>
            </h2>
            <p className="text-[#b0b0b0] text-lg mb-8 border-l-2 border-[#ff00ff] pl-4">
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6 text-[#e0e0e0] font-mono text-sm">
              <a href="mailto:srivastava.deepanshu24@gmail.com" className="flex items-center gap-4 hover:text-[#00f0ff] transition-colors group">
                <div className="bg-[#111] p-3 border border-[#333] text-[#00f0ff] group-hover:border-[#00f0ff] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                srivastava.deepanshu24@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ds3042/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#00f0ff] transition-colors group">
                <div className="bg-[#111] p-3 border border-[#333] text-[#00f0ff] group-hover:border-[#00f0ff] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-[#00f0ff] mb-2 uppercase tracking-widest">Name_Input</label>
                <input type="text" id="name" name="name" required placeholder="User_ID" className="cyber-input w-full px-4 py-3" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-[#00f0ff] mb-2 uppercase tracking-widest">Email_Input</label>
                <input type="email" id="email" name="email" required placeholder="user@domain.com" className="cyber-input w-full px-4 py-3" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-[#00f0ff] mb-2 uppercase tracking-widest">Subject_Vector</label>
                <input type="text" id="subject" name="_subject" required placeholder="Transmission intent" className="cyber-input w-full px-4 py-3" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[#00f0ff] mb-2 uppercase tracking-widest">Payload</label>
                <textarea id="message" name="message" rows={4} required placeholder="Enter data packet..." className="cyber-input w-full px-4 py-3 resize-none"></textarea>
              </div>
              <button disabled={isSending} type="submit" className="cyber-button w-full py-4 text-center">
                {isSending ? 'Transmitting...' : 'Execute_Transmission'}
              </button>
              {status === 'success' && (
                <p className="text-center text-sm font-mono text-[#00ff00] mt-4">
                  &gt; Payload delivered successfully.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-mono text-[#ff0000] mt-4">
                  &gt; Transmission failed. Please try again.
                </p>
              )}
            </form>
          </div>
          
        </div>
      </motion.div>
    </section>
  )
}
