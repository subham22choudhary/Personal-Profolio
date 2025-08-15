export const ProjectsSection = () => {
  const projects = [
    {
      title: "Lead Routing Dashboard",
      description: "Interactive dashboards with Google Auth and real-time data integration",
      achievements: [
        "Built with JSX Graph / React Charts",
        "Implemented Google Auth for secure login",
        "Real-time data updates",
        "~25% faster response times"
      ],
      tech: ["React", "Google Auth", "Real-time APIs", "Charts"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Blog Repository Platform",
      description: "No-code publishing platform that revolutionized content workflows",
      achievements: [
        "Automated 800+ blog publications",
        "No-code interface for content creators",
        "+30% content publishing efficiency",
        "Streamlined editorial workflows"
      ],
      tech: ["React", "Node.js", "Content Management", "Automation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
        </svg>
      )
    },
    {
      title: "Underwriting Module UI",
      description: "High-performance React application with advanced optimization techniques",
      achievements: [
        "React/Redux architecture",
        "Code-splitting & lazy loading implementation",
        "30% reduction in load time",
        "WCAG-aligned accessibility compliance"
      ],
      tech: ["React", "Redux", "Code Splitting", "WCAG", "Performance"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Projects & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-gradient-card p-8 rounded-lg shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105 group animate-fade-in-delay-${index + 1}`}
            >
              {/* Project Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {project.icon}
              </div>

              {/* Project Title */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-body font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="font-body text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-body font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-block bg-secondary hover:bg-primary hover:text-primary-foreground px-3 py-1 rounded-full font-body text-xs font-medium text-secondary-foreground transition-all duration-200 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-delay-4">
          <div className="bg-gradient-card p-8 rounded-lg shadow-card">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your next project to life with clean, efficient, and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('mailto:subham.choudhary.fullstack@gmail.com', '_blank', 'noopener,noreferrer')}
                className="bg-gradient-accent text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg shadow-accent hover:shadow-elevated transition-all duration-300 hover:scale-105"
              >
                Start a Conversation
              </button>
              <button 
                onClick={() => window.open('https://linkedin.com/in/subhamchoudhary', '_blank', 'noopener,noreferrer')}
                className="bg-card border border-border text-foreground hover:bg-secondary hover:shadow-card transition-all duration-300 px-8 py-3 rounded-lg"
              >
                View LinkedIn Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};