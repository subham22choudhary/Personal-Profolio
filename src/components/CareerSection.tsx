export const CareerSection = () => {
  const workExperience = [
    {
      company: "Stealth",
      location: "Hyderabad, Telangana, India",
      roles: [
        {
          title: "Fullstack Web Developer",
          period: "Feb 2024 – Present",
          achievements: [
            "Built interactive analytics dashboards (JSX Graph / React Charts).",
            "Implemented Google Auth for secure login.",
            "Integrated real-time data updates (~25% faster responses).",
            "Improved accessibility with semantic HTML & SEO."
          ]
        },
        {
          title: "Associate Frontend Web Developer", 
          period: "Jul 2022 – Feb 2024",
          achievements: [
            "Developed custom React components.",
            "Built internal no-code publishing platform (automated 800+ blogs).",
            "Created responsive UIs; implemented auth with JWT/cookies.",
            "Wrote unit tests with Jest/Enzyme."
          ]
        },
        {
          title: "Intern",
          period: "Jul 2021 – Jul 2022", 
          achievements: [
            "Enhanced accessibility using semantic HTML & SEO.",
            "Developed React Hooks for content workflows (+30% publishing efficiency)."
          ]
        }
      ]
    },
    {
      company: "Fidelity National Financial",
      location: "Analyst",
      roles: [
        {
          title: "Analyst",
          period: "Jun 2017 – Apr 2019",
          achievements: [
            "React/Redux UI with code-splitting & lazy loading (−30% load time).",
            "WCAG-aligned UI; performance with React.memo/useCallback."
          ]
        }
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech, Computer Engineering",
      institution: "KIIT",
      period: "2019–2022"
    },
    {
      degree: "Diploma",
      institution: "NTTF, Bangalore", 
      period: "2014–2017"
    },
    {
      degree: "School Education",
      institution: "DAV Public School, Jamshedpur",
      period: "2003–2014"
    }
  ];

  return (
    <section id="career" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Career Details
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        {/* Professional Summary */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-gradient-card p-8 rounded-lg shadow-card">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
              Professional Summary
            </h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Full-stack developer with ~5 years' experience delivering secure, performant web apps. 
              Strengths in React/Node, UX, accessibility, and AWS deployments. Proven record improving 
              publishing efficiency, load times, and user experience.
            </p>
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center">
            Work Experience
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {workExperience.map((company, companyIndex) => (
              <div key={company.company} className="relative mb-16 animate-slide-in">
                {/* Company Header */}
                <div className="mb-8">
                  <h4 className="font-heading text-2xl font-semibold text-primary mb-2">
                    {company.company}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {company.location}
                  </p>
                </div>
                
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative flex items-start mb-8 last:mb-0">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-accent"></div>
                    
                    {/* Content */}
                    <div className="ml-20 bg-gradient-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 w-full">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h5 className="font-heading text-xl font-semibold text-foreground">
                            {role.title}
                          </h5>
                        </div>
                        <span className="font-body text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {role.period}
                        </span>
                      </div>
                      
                      <ul className="space-y-2">
                        {role.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="font-body text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1.5 flex-shrink-0">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="animate-fade-in-delay-2">
          <h3 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center">
            Education
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105"
              >
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {edu.degree}
                </h4>
                <p className="font-body text-primary font-medium mb-1">
                  {edu.institution}
                </p>
                <span className="font-body text-sm text-muted-foreground">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};