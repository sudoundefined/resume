import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Technical Lead",
    company: "HCL Tech (Client: Emirates NBD)",
    date: "May 2024 – Present",
    responsibilities: [
      "Architected a high-performance application orchestration framework using Node.js and TypeScript, driving the adoption of new technologies, troubleshooting complex technical issues, and contributing to CI/CD automation and process improvements that drove efficiency and efficacy, reducing overall development effort by 55%.",
      "Led the design and implementation of complex features for the end-to-end migration of a core Credit Card application to a scalable Node.js distributed system, establishing real-time streaming pipelines, which reduced operational costs by 40% and increased efficiency by 30%.",
      "Engineered an automated E2E testing suite leveraging Playwright and Claude (via MCP) integrated with GitHub repository source control, drastically improving QA processes, reducing manual testing effort by 75%, and accelerating release cycles.",
      "Collaborated with cross-functional teams and stakeholders to define project requirements, scope, and timelines, driving technology and tool choices while leading code and architecture reviews to guarantee system Scaling, Performance, & Quality."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "MatchLog Solutions Private Limited, Bengaluru",
    date: "Apr 2021 – May 2024",
    responsibilities: [
      "Designed and developed the Transport Management System (TMS), Triangulation (TRI), and Container Assessment Survey Application (CASA) by writing highly testable and scalable code using Jest to deliver real-time logistics solutions, driving a 30% improvement in fleet utilization.",
      "Architected a highly scalable service-oriented platform using JavaScript, Node.js, and React.js/Angular, seamlessly integrating user-facing elements developed by front-end developers with complex server-side logic, supporting 100,000+ monthly container reuse operations for the STinder product via offline batching and messaging systems.",
      "Directed end-to-end delivery of complex web development projects for supply chain optimization, actively participating in sprint planning, accurate task estimation, and user story creation, ensuring timely completion and mitigating empty runs by 40%.",
      "Engineered highly reusable frontend components and optimized Node.js backends using RxJS and TypeScript, resulting in a 50% decrease in development workload through successful collaboration with frontend developers.",
      "Provided innovative solutions utilizing robust single-spa micro-frontend architecture to develop high-quality applications, enhancing maintainability and reducing enterprise application page load times by 35%.",
      "Utilized GitHub repository for source control and configured Jenkins CI/CD pipelines to automate deployments across Docker and Kubernetes environments, accelerating release cycles by 40%.",
      "Led and mentored a team of 5+ web developers in an agile environment, setting up engineering best practices through rigorous code reviews and architecture discussions to constantly improve technology use."
    ]
  },
  {
    title: "Software Engineer (Grade 2)",
    company: "Shiplyst Systems Private Limited, Bengaluru",
    date: "Aug 2019 – Mar 2021",
    responsibilities: [
      "Automated background processes to retrieve data from third-party APIs using asynchronous programming, achieving a 50% reduction in data processing time.",
      "Designed a high-performance matching algorithm for search features, significantly improving user experience and reducing API response latency by 45%.",
      "Developed globally reusable validators and frontend UI components in Angular, accelerating feature delivery across agile engineering teams by 30%.",
      "Upheld software quality through Test-Driven Development (TDD) and rigorous debugging, ensuring a 99.9% defect-free status for major production releases."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Canvas Digital, Bengaluru",
    date: "Nov 2018 – Aug 2019",
    responsibilities: [
      "Developed a full-stack appointment booking engine with integrated e-commerce capabilities and RESTful APIs, driving a 25% increase in online bookings.",
      "Engineered a marketplace bidding portal complete with advanced listing capabilities, optimizing the backend to seamlessly handle 10,000+ concurrent users."
    ]
  },
  {
    title: "Programmer Scale-1",
    company: "Intecons Software Lab, Bengaluru",
    date: "Jan 2017 – Jan 2018",
    responsibilities: [
      "Engineered a real-time communication chat application leveraging WebSockets and third-party APIs, facilitating high-quality calls for 5,000+ active users.",
      "Integrated mapping and autocomplete APIs to enrich core application functionalities with advanced real-time data features, improving user engagement by 20%."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#00f0ff]/20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-16 text-center text-white tracking-tighter"
      >
        <span className="text-[#00f0ff] font-mono text-xl sm:text-3xl md:text-4xl mr-2">02.</span>WORK<span className="text-[#ff00ff]">_EXPERIENCE</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto relative pl-4 md:pl-0">
        {/* Neon Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00f0ff] via-[#ff00ff] to-transparent shadow-[0_0_10px_#00f0ff]"></div>
        
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-8 top-6 w-3 h-3 bg-[#050505] rounded-none border-2 border-[#00f0ff] box-content -translate-x-[7px] group-hover:bg-[#00f0ff] group-hover:shadow-[0_0_15px_#00f0ff] transition-all duration-300 transform rotate-45"></div>
              
              <div className="cyber-panel p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 border-b border-[#333] pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                    <p className="text-[#00f0ff] font-mono mt-1 text-sm">{exp.company}</p>
                  </div>
                  <span className="font-mono text-[#ff00ff] text-sm self-start tracking-wider border border-[#ff00ff]/30 bg-[#ff00ff]/10 px-3 py-1">
                    [{exp.date}]
                  </span>
                </div>
                <ul className="space-y-4 text-[#b0b0b0]">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:text-[#ff00ff] before:font-mono">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
