import { useState, useEffect } from 'react'
import Scene from './components/Scene'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      {/* 3D Simulation Background */}
      <Scene />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 px-6 md:px-12 flex justify-between items-center ${scrolled ? 'py-3 bg-[#050505]/90 backdrop-blur-md border-b border-[#00f0ff]/20 shadow-[0_4px_30px_rgba(0,240,255,0.1)]' : 'py-5 bg-transparent'}`}>
        <a href="#" className="text-2xl font-bold tracking-widest z-50 font-mono text-[#00f0ff] uppercase">&lt;DS/&gt;</a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-mono text-sm uppercase tracking-widest">
          <li><a href="#about" className="text-[#a0a0a0] hover:text-[#00f0ff] transition-colors">About</a></li>
          <li><a href="#skills" className="text-[#a0a0a0] hover:text-[#00f0ff] transition-colors">Skills</a></li>
          <li><a href="#experience" className="text-[#a0a0a0] hover:text-[#00f0ff] transition-colors">Experience</a></li>
          <li><a href="#education" className="text-[#a0a0a0] hover:text-[#00f0ff] transition-colors">Education</a></li>
          <li><a href="#contact" className="cyber-button px-5 py-2">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative focus:outline-none"
        >
          <span className={`w-6 h-[2px] bg-[#00f0ff] transition-all duration-300 absolute ${menuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
          <span className={`w-6 h-[2px] bg-[#00f0ff] transition-all duration-300 absolute ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-[2px] bg-[#00f0ff] transition-all duration-300 absolute ${menuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-opacity duration-300 z-40 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <ul className="flex flex-col gap-8 text-center text-xl font-mono uppercase tracking-widest">
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="text-[#e0e0e0] hover:text-[#00f0ff]">About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)} className="text-[#e0e0e0] hover:text-[#00f0ff]">Skills</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)} className="text-[#e0e0e0] hover:text-[#00f0ff]">Experience</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)} className="text-[#e0e0e0] hover:text-[#00f0ff]">Education</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="cyber-button px-8 py-3 mt-4 inline-block">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 selection:bg-[#ff00ff] selection:text-white">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-[#00f0ff]/20 bg-[#050505] py-8 text-center text-[#888] font-mono text-sm">
        <p>SYSTEM.HALT(); &copy; {new Date().getFullYear()} Deepanshu Srivastava.</p>
      </footer>
    </div>
  )
}

export default App
