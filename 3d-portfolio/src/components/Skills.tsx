import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "LANGUAGES_&_FRAMEWORKS",
    skills: ["Node.js", "JavaScript", "TypeScript", "Express.js", "Nest.js", "Angular", "React.js", "GraphQL", "RxJS", "RESTful APIs"]
  },
  {
    title: "ARCHITECTURE_&_CLOUD",
    skills: ["Microservices", "SOA", "Distributed Systems", "Event-Driven", "Micro-frontends", "HLD/LLD", "Multi-Tenancy", "Single-SPA", "Monorepo"]
  },
  {
    title: "DATABASES_&_MESSAGING",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Kafka"]
  },
  {
    title: "TOOLS_&_DEVOPS",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "CI/CD Pipelines", "Git/GitHub"]
  },
  {
    title: "TESTING_&_AUTOMATION",
    skills: ["Playwright", "Jest", "TDD", "Claude", "MCP"]
  },
  {
    title: "METHODOLOGIES_&_LEADERSHIP",
    skills: ["Agile", "Sprint Planning", "Task Estimation", "User Stories", "Technical Strategy", "Code Reviews", "Stakeholder Management", "Mentorship"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#00f0ff]/20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-16 text-center text-white tracking-tighter"
      >
        <span className="text-[#00f0ff] font-mono text-xl sm:text-3xl md:text-4xl mr-2">01.</span>TECHNICAL<span className="text-[#ff00ff]">_SKILLS</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="cyber-panel p-6 group"
          >
            <h3 className="text-sm font-mono text-[#ff00ff] mb-6 tracking-widest uppercase flex items-center gap-2 border-b border-[#333] pb-2">
              <span className="w-2 h-2 bg-[#ff00ff] inline-block"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="bg-[#1a1a1a] border border-[#333] text-[#b0b0b0] px-3 py-1 font-mono text-xs hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
